// useUserProjects.ts
import { useState, useEffect, useCallback, useMemo } from "react";
import { useAuthContext } from "./useAuth.jsx";
import type { Project, ProjectSummary } from "@shared/models/ProjectModel";
import type { List } from "@shared/models/ListModel";
import type { Task, TaskUpdate } from "@shared/models/TaskModel";
// import type { Subtask, SubtaskUpdate } from "@shared/models/SubtaskModel";
import { getIdToken } from "firebase/auth";

import {
  getAllProjects as apiGetAllProjects,
  createProject as apiCreateProject,
  deleteProject as apiDeleteProject,
  updateProject as apiUpdateProject,
  getProjectSummaries as apiGetProjectSummaries,
} from "../api/projects";
import {
  getLists as apiGetLists,
  createList as apiCreateList,
  deleteList as apiDeleteList,
  updateList as apiUpdateList,
} from "../api/lists";
import {
  getTasks as apiGetTasks,
  createTask as apiCreateTask,
  deleteTask as apiDeleteTask,
  updateTask as apiUpdateTask,
} from "../api/tasks";
// import {
//   getSubtasks as apiGetSubtasks,
//   createSubtask as apiCreateSubtask,
//   deleteSubtask as apiDeleteSubtask,
//   updateSubtask as apiUpdateSubtask,
// } from "../api/subtasks";
import {
  getDoNowTasks as apiGetDoNowTasks,
  createDoNowTask as apiCreateDoNowTask,
  deleteDoNowTask as apiDeleteDoNowTask,
  updateDoNowTask as apiUpdateDoNowTask,
} from "../api/doNow";

export default function useUserProjects() {
  const { currentUser } = useAuthContext();
  // const [projects, setProjects] = useState<Project[]>([]); // all projects
  const [projectSummaries, setProjectSummaries] = useState<ProjectSummary[]>([]); // project summaries. 
  const [currentProject, setCurrentProject] = useState<string | null>(null); // currently selected project
  const [projectData, setProjectData] = useState<Record<string, List[]>>({}); // record of projects' lists in dictionary format 
  const [loading, setLoading] = useState(false);
  const [loadingProjects, setLoadingProjects] = useState<Set<string>>(new Set()); // track loading state per project
  const [error, setError] = useState<string | null>(null);
  const [doNowTasks, setDoNowTasks] = useState<Task[]>([]); // Do Now tasks
  const [needsSync, setNeedsSync] = useState(false); // Track if sync is needed
  const [tasksCompletedToday, setTasksCompletedToday] = useState(0); // Track tasks completed today
  // Removed allTasks state - we now get due counts from project summaries for better performance

  // Separate loading states for different sections
  const [loadingDoNow, setLoadingDoNow] = useState(false);
  const [loadingProjectContent, setLoadingProjectContent] = useState(false);
  const [loadingSidebar, setLoadingSidebar] = useState(false);
  const [loadingTasks, setLoadingTasks] = useState<Set<string>>(new Set()); // Track loading state per task
  const [loadingInitialData, setLoadingInitialData] = useState(false); // Track initial data loading

  // Add a refreshKey for manual/triggered refreshes
  const [refreshKey, setRefreshKey] = useState(0);
  // Function to force a full refresh from backend
  const forceRefresh = useCallback(() => setRefreshKey(k => k + 1), []);
  
  // Function to clear cache for a specific project
  const clearProjectCache = useCallback((projectId: string) => {
    setProjectData(prev => {
      const copy = { ...prev };
      delete copy[projectId];
      return copy;
    });
  }, []);
  
  // Function to clear all project caches
  const clearAllCaches = useCallback(() => {
    setProjectData({});
  }, []);


  const lists = useMemo(() => 
    currentProject ? projectData[currentProject] ?? [] : [],
    [currentProject, projectData]
  );

  // Set currentProject to first project if none is selected and user wasn't on home screen
  useEffect(() => {
    if (!currentProject && projectSummaries.length > 0) {
      // Only set to first project if no preference is saved AND we're not in the initial loading phase
      const savedPreference = localStorage.getItem(`tako-home-screen-${currentUser?.uid}`);
      console.log('🔄 useUserProjects: checking if should set first project. savedPreference:', savedPreference);
      if (savedPreference !== 'true' && savedPreference !== null) {
        console.log('📁 useUserProjects: setting to first project:', projectSummaries[0].id);
        setCurrentProject(projectSummaries[0].id);
      }
    }
  }, [currentProject, projectSummaries, currentUser, setCurrentProject]);

  const fullProject: Project | null = useMemo(() => 
    currentProject
      ? {
          ...projectSummaries.find(p => p.id === currentProject)!,
          uid: currentUser!.uid,
          lists,
        }
      : null,
    [currentProject, projectSummaries, currentUser, lists]
  );

  // Calculate Do Now taskCount (only uncompleted tasks)
  const doNowTaskCount = useMemo(() => 
    doNowTasks.filter(task => !task.completedAt).length,
    [doNowTasks]
  );


  const resetAll = useCallback(() => {
    setProjectSummaries([]);
    setCurrentProject(null);
    setProjectData({});
    setError(null);
    setLoading(false);
  }, []);

  const updateProjectData = useCallback(
    (projectId: string, updater: (lists: List[]) => List[]) => {
      setProjectData(prev => ({
        ...prev,
        [projectId]: updater(prev[projectId] ?? [])
      }));
    }, []);



  // Load Do Now tasks
  const loadDoNowTasks = useCallback(async () => {
    if (!currentUser) return;
    
    try {
      const tasks = await apiGetDoNowTasks();
      const tasksWithSubtasks = tasks.map(task => ({ ...task, subtasks: [] }));
      setDoNowTasks(tasksWithSubtasks);
      
      // Calculate tasks completed today from all sources
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      
      // Count completed Do Now tasks
      const doNowCompleted = tasksWithSubtasks.filter(task => 
        task.completedAt && new Date(task.completedAt) >= today
      ).length;
      
      // Count completed project tasks
      const projectCompleted = Object.values(projectData).flatMap(lists =>
        lists.flatMap(list =>
          list.tasks.filter(task => 
            task.completedAt && new Date(task.completedAt) >= today
          )
        )
      ).length;
      
      setTasksCompletedToday(doNowCompleted + projectCompleted);
    } catch (err: unknown) {
      console.error("🔴 loadDoNowTasks failed:", (err as Error).message);
    }
  }, [currentUser, projectData]);

  // Load all tasks across all projects for due today/tomorrow display
  // This is now optimized - we get due counts from project summaries instead
  const loadAllTasks = useCallback(async () => {
    if (!currentUser) return;
    
    // Since we now get due today/tomorrow counts from project summaries,
    // we don't need to fetch all tasks just for display purposes
    // This significantly improves performance
    // setAllTasks([]); // Removed - no longer needed
  }, [currentUser]);

  // Load Do Now tasks when user logs in or changes
  useEffect(() => {
    if (currentUser) {
      loadDoNowTasks();
    } else {
      setDoNowTasks([]);
    }
  }, [currentUser, loadDoNowTasks]);

  // useEffect(() => { // GETTING AUTH TOKEN FOR DEBUGGING
  //   if (currentUser) {
  //     currentUser.getIdToken(true).then(token => {
  //       console.log("TOKEN:", token);
  //     });
  //   }
  // }, [currentUser]);


  // Optimized: Only fetch from backend if data isn't cached or when forced
  useEffect(() => {
    if (!currentProject) return;
    
    // Check if project data is already cached
    const cachedData = projectData[currentProject];
    if (cachedData && refreshKey === 0) {
      // Data is already cached and no forced refresh, so don't fetch
      console.log(`🚀 Using cached data for project: ${currentProject}`);
      setLoading(false);
      return;
    }
    
    console.log(`📡 Fetching data for project: ${currentProject}`);
    
    setLoading(true);
    setLoadingProjects(prev => new Set(prev).add(currentProject));
    setError(null);

    (async () => {
      try {
        // Fetch all lists and tasks for the current project (subtasks commented out)
        const rawLists = await apiGetLists(currentProject);
        const listsWithTasks = await Promise.all(
          rawLists.map(async (l) => {
            const tasks = await apiGetTasks(currentProject, l.id);
            // const tasksWithSubtasks = await Promise.all(
            //   tasks.map(async (task) => {
            //     const subtasks = await apiGetSubtasks(currentProject, l.id, task.id);
            //     return { ...task, subtasks };
            //   })
            // );
            const tasksWithSubtasks = tasks.map(task => ({ ...task, subtasks: [] }));
            return {
              ...l,
              tasks: tasksWithSubtasks,
              taskCount: l.taskCount ?? tasksWithSubtasks.length
            };
          })
        );
        setProjectData(prev => ({ ...prev, [currentProject]: listsWithTasks }));
        
        // Recalculate tasks completed today after loading project data
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        
        // Count completed Do Now tasks
        const doNowCompleted = doNowTasks.filter(task => 
          task.completedAt && new Date(task.completedAt) >= today
        ).length;
        
        // Count completed project tasks
        const projectCompleted = Object.values(projectData).flatMap(lists =>
          lists.flatMap(list =>
            list.tasks.filter(task => 
              task.completedAt && new Date(task.completedAt) >= today
            )
          )
        ).length;
        
        setTasksCompletedToday(doNowCompleted + projectCompleted);
      } catch (e: any) {
        setError(e.message ?? "Failed to load project data");
      } finally {
        setLoading(false);
        setLoadingProjects(prev => {
          const newSet = new Set(prev);
          newSet.delete(currentProject);
          return newSet;
        });
      }
    })();
  }, [currentProject, refreshKey, projectData]);

  // Projects CRUD
  const addProject = useCallback(async (name: string) => {
    console.log("✏️  addProject(", name, ")");
    setLoadingSidebar(true);
    setError(null);
    try {
      const { project: newProject, list: defaultList } = await apiCreateProject(name);

      const newSummary: ProjectSummary = {
        id: newProject.id,
        name: newProject.name,
        description: newProject.description,
        order: newProject.order,
        taskCount: newProject.taskCount,
        dueTodayCount: 0,
        dueTomorrowCount: 0
      }
      setProjectSummaries(prev => [...prev, newSummary]);

      setProjectData(prev => ({
        ...prev,
        [newProject.id]: [{ ...defaultList, tasks: [] }],
      }));
      setCurrentProject(newProject.id);


      return newProject;
    } catch (e: any) {
      setError(e.message ?? "Unable to create project");
      throw e;
    } finally {
      setLoadingSidebar(false);
    }
  }, []);

  const deleteProject = useCallback(async (projectId: string) => {
    setLoadingSidebar(true);
    setError(null);
    try {
      await apiDeleteProject(projectId);
      setProjectSummaries(prev => prev.filter(p => p.id !== projectId));
      setProjectData(prev => {
        const copy = { ...prev };
        delete copy[projectId];
        return copy;
      });
      setCurrentProject(curr =>
        curr === projectId
          ? projectSummaries[0]?.id ?? null
          : curr
      );
    } catch (e: any) {
      setError(e.message ?? "Unable to delete project");
      throw e;
    } finally {
      setLoadingSidebar(false);
    }
  }, [projectSummaries]);

  const updateProject = useCallback(async (projectId: string, updates: Partial<Project>) => {
    setLoadingSidebar(true);
    try {
      const updatedProject = await apiUpdateProject(projectId, updates);
      const updatedSummary: ProjectSummary = {
        id: updatedProject.id,
        name: updatedProject.name,
        description: updatedProject.description,
        order: updatedProject.order,
        taskCount: updatedProject.taskCount,
        dueTodayCount: 0,
        dueTomorrowCount: 0
      };
      setProjectSummaries(prev => prev.map(p => p.id === projectId ? updatedSummary : p));
      return updatedProject;
    } catch (e: any) {
      setError(e.message ?? "Unable to update project");
      throw e;
    } finally {
      setLoadingSidebar(false);
    }
  }, []);

  const refreshProjectSummaries = useCallback(async () => {
    try {
      const summaries = await apiGetProjectSummaries();
      setProjectSummaries(summaries);
    } catch (err: unknown) {
      console.error("🔴 refreshProjectSummaries failed:", (err as Error).message);
    }
  }, []);

  // Load initial project summaries when user logs in
  useEffect(() => {
    if (currentUser) {
      setLoadingInitialData(true);
      refreshProjectSummaries()
        .catch(err => {
          console.error("🔴 Initial project summaries load failed:", err);
          setError("Failed to load projects");
        })
        .finally(() => {
          setLoadingInitialData(false);
        });
    } else {
      setProjectSummaries([]);
      setLoadingInitialData(false);
    }
  }, [currentUser, refreshProjectSummaries]);

  // Debounced background sync - runs periodically to sync with backend
  const debouncedSync = useCallback(async () => {
    if (!needsSync || !currentProject) return;
    
    console.log("🔄 Running background sync for project:", currentProject);
    setNeedsSync(false);
    
    try {
      // Only sync project summaries (task counts) - don't reload all data
      await refreshProjectSummaries();
    } catch (err: unknown) {
      console.error("🔴 Background sync failed:", (err as Error).message);
      // Don't set error state for background sync failures
    }
  }, [needsSync, currentProject, refreshProjectSummaries]);

  // Reset tasks completed today at midnight
  useEffect(() => {
    const checkDateChange = () => {
      const now = new Date();
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      
      // If it's a new day, reset the counter
      if (tasksCompletedToday > 0) {
        const lastCompletedTask = doNowTasks
          .filter(task => task.completedAt)
          .sort((a, b) => (b.completedAt || 0) - (a.completedAt || 0))[0];
        
        if (lastCompletedTask && lastCompletedTask.completedAt) {
          const lastCompletedDate = new Date(lastCompletedTask.completedAt);
          lastCompletedDate.setHours(0, 0, 0, 0);
          
          if (lastCompletedDate < today) {
            setTasksCompletedToday(0);
          }
        }
      }
    };
    
    // Check every minute for date change
    const interval = setInterval(checkDateChange, 60000);
    
    // Also check immediately
    checkDateChange();
    
    return () => clearInterval(interval);
  }, [tasksCompletedToday, doNowTasks]);

  const refreshCurrentProjectData = useCallback(async () => {
    if (!currentProject) return;
    
    console.log("🔄 Refreshing current project data for:", currentProject);
    
    try {
      const rawLists = await apiGetLists(currentProject);
      console.log("📋 Raw lists from API:", rawLists.map(l => ({ id: l.id, name: l.name, taskCount: l.taskCount })));
      
      const listsWithTasks = await Promise.all(
        rawLists.map(async (l) => {
          const ts = await apiGetTasks(currentProject, l.id);
          // const tasksWithSubs = await Promise.all(
          //   ts.map(async (t) => {
          //     const sts = await apiGetSubtasks(currentProject, l.id, t.id);
          //     return { ...t, subtasks: sts };
          //   })
          // );
          const tasksWithSubs = ts.map(t => ({ ...t, subtasks: [] }));
          return { ...l, tasks: tasksWithSubs, taskCount: l.taskCount ?? tasksWithSubs.length};
        })
      );
      
      console.log("📊 Lists with tasks:", listsWithTasks.map(l => ({ id: l.id, name: l.name, taskCount: l.taskCount, taskCountFromTasks: l.tasks.length })));
      
      setProjectData(prev => ({ ...prev, [currentProject]: listsWithTasks }));
    } catch (err: unknown) {
      console.error("🔴 refreshCurrentProjectData failed:", (err as Error).message);
    }
  }, [currentProject, apiGetLists, apiGetTasks]);




  // Lists CRUD
  // Efficiently update local state after list changes
  const addList = useCallback(async (projectId: string, name: string) => {
    setLoadingProjectContent(true);
    setError(null);
    try {
      const newList = await apiCreateList(projectId, name);
      updateProjectData(projectId, lists => [
        ...lists,
        { ...newList, tasks: [] }
      ]);
      await refreshProjectSummaries();
      return newList;
    } catch (e: any) {
      setError(e.message ?? "Unable to create list");
      throw e;
    } finally {
      setLoadingProjectContent(false);
    }
  }, [updateProjectData, refreshProjectSummaries]);

  const deleteList = useCallback(
    async (projectId: string, listId: string) => {
      setLoadingProjectContent(true);
      setError(null);
      try {
        await apiDeleteList(projectId, listId);
        updateProjectData(projectId, lists =>
          (lists ?? []).filter(l => l.id !== listId)
        );
        await refreshProjectSummaries();
      } catch (e: any) {
        setError(e.message ?? "Unable to delete list");
        throw e;
      } finally {
        setLoadingProjectContent(false);
      }
    },
    [updateProjectData, refreshProjectSummaries]
  );

  const updateList = useCallback(
    async (projectId: string, listId: string, name: string) => {
      setLoadingProjectContent(true);
      setError(null);
      try {
        const updated = await apiUpdateList(projectId, listId, name);
        updateProjectData(projectId, lists =>
          (lists ?? []).map(l =>
            l.id === listId
              ? {
    ...l,
    name: updated.name,
    order: updated.order ?? l.order,
  }
              : l
          )
        );
        return updated;
      } catch (e: any) {
        setError(e.message ?? "Unable to update list");
        throw e;
      } finally {
        setLoadingProjectContent(false);
      }
    },
    [updateProjectData]
  );

  // MOVE a list left or right
const moveList = useCallback(
  async (projectId: string, listId: string, direction: "left" | "right") => {
    setLoadingProjectContent(true);
    setError(null);
    try {
      const lists = projectData[projectId] ?? [];
      const idx = lists.findIndex(l => l.id === listId);
      const swapIdx = direction === "left" ? idx - 1 : idx + 1;
      if (idx < 0 || swapIdx < 0 || swapIdx >= lists.length) return;

      const a = lists[idx], b = lists[swapIdx];


      // swap orders
    await Promise.all([
      apiUpdateList(projectId, a.id, a.name, b.order),
      apiUpdateList(projectId, b.id, b.name, a.order),
    ]);

      const updatedLists = await apiGetLists(projectId);
      setProjectData(prev => ({ ...prev, [projectId]: updatedLists }));
    } catch (e: any) {
      setError(e.message ?? "Unable to move list");
      throw e;
    } finally {
      setLoadingProjectContent(false);
    }
  },
  [projectData, updateProjectData]
);


  // ADD a task
  const addTask = useCallback(
    async (
      projectId: string,
      listId: string,
      name: string,
      dueDate?: number
    ) => {
      setError(null);
      
      // Use specific loading states instead of global loading
      if (listId === 'do-now') {
        setLoadingDoNow(true);
      } else {
        setLoadingProjectContent(true);
      }
      
      // Create optimistic task immediately for instant UI feedback
      const optimisticTaskId = `temp-${Date.now()}-${Math.random()}`;
      const optimisticTask: Task = {
        id: optimisticTaskId,
        uid: currentUser!.uid,
        name,
        projectId,
        listId,
        dueDate: dueDate ?? null,
        createdAt: Date.now(),
        completedAt: null,
        tags: [],
        order: Date.now(), // Temporary order
        subtaskCount: 0,
        subtasks: []
      };
      
      try {
        let newTask: Task;
        
        // Handle Do Now tasks differently
        if (listId === 'do-now') {
          const taskId = `do-now-${Date.now()}`; // Generate a unique ID
          // For global do-now tasks, use a default project ID
          const effectiveProjectId = projectId === 'global' ? 'default' : projectId;
          
          // Add optimistic task immediately
          setDoNowTasks(prev => [...prev, { ...optimisticTask, id: taskId, subtasks: [] }]);
          
          // Update project summary taskCount optimistically
          if (projectId !== 'global') {
            setProjectSummaries(prev => 
              prev.map(p => 
                p.id === projectId 
                  ? { ...p, taskCount: (p.taskCount || 0) + 1 }
                  : p
              )
            );
          }
          
          // Make API call in background
          newTask = await apiCreateDoNowTask(effectiveProjectId, taskId, name, dueDate);
          
          // Replace optimistic task with real task
          setDoNowTasks(prev => 
            prev.map(t => t.id === taskId ? { ...newTask, subtasks: [] } : t)
          );
        } else {
          // Add optimistic task immediately for instant UI feedback
          updateProjectData(projectId, lists =>
            lists.map(l =>
              l.id === listId
                ? {
                  ...l,
                  tasks: [...l.tasks, { ...optimisticTask, subtasks: [] }],
                  taskCount: (l.taskCount || 0) + 1,
                }
                : l
            )
          );
          
          // Update project summary taskCount optimistically
          setProjectSummaries(prev => 
            prev.map(p => 
              p.id === projectId 
                ? { ...p, taskCount: (p.taskCount || 0) + 1 }
                : p
            )
          );
          
          // Make API call in background
          newTask = await apiCreateTask(projectId, listId, name, dueDate);
          
          // Replace optimistic task with real task
          updateProjectData(projectId, lists =>
            lists.map(l =>
              l.id === listId
                ? {
                  ...l,
                  tasks: l.tasks.map(t =>
                    t.id === optimisticTaskId ? { ...newTask, subtasks: [] } : t
                  ),
                }
                : l
            )
          );
          
          // Mark that sync is needed
          setNeedsSync(true);
        }
        
        return newTask;
      } catch (e: any) {
        // Revert optimistic updates on error
        if (listId === 'do-now') {
          setDoNowTasks(prev => prev.filter(t => t.id !== optimisticTaskId));
          if (projectId !== 'global') {
            setProjectSummaries(prev => 
              prev.map(p => 
                p.id === projectId 
                  ? { ...p, taskCount: Math.max((p.taskCount || 0) - 1, 0) }
                  : p
              )
            );
          }
        } else {
          updateProjectData(projectId, lists =>
            lists.map(l =>
              l.id === listId
                ? {
                  ...l,
                  tasks: l.tasks.filter(t => t.id !== optimisticTaskId),
                  taskCount: Math.max((l.taskCount || 0) - 1, 0),
                }
                : l
            )
          );
          setProjectSummaries(prev => 
            prev.map(p => 
              p.id === projectId 
                ? { ...p, taskCount: Math.max((p.taskCount || 0) - 1, 0) }
                : p
            )
          );
        }
        
        setError(e.message ?? "Unable to create task");
        throw e; // Re-throw so UI can handle the error
      } finally {
        if (listId === 'do-now') {
          setLoadingDoNow(false);
        } else {
          setLoadingProjectContent(false);
        }
      }
    },
    [updateProjectData, currentUser]
  );

  // UPDATE a task
  const updateTask = useCallback(
    async (
      projectId: string,
      listId: string,
      taskId: string,
      updates: TaskUpdate
    ) => {
      setError(null);
      
      // For completion status changes, apply optimistic updates immediately
      if (updates.completedAt !== undefined) {
        const isCompleting = updates.completedAt !== null;
        
        // Handle Do Now tasks
        if (listId === 'do-now') {
          const currentTask = doNowTasks.find(t => t.id === taskId);
          const wasCompleted = currentTask?.completedAt !== null;
          
          if (isCompleting !== wasCompleted) {
            // Apply optimistic update immediately
            setDoNowTasks(prev => 
              prev.map(t => 
                t.id === taskId 
                  ? { ...t, ...updates, subtasks: t.subtasks }
                  : t
              )
            );
            
            // Update task completion tracking
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            
            if (isCompleting) {
              const completedDate = new Date(updates.completedAt!);
              if (completedDate >= today) {
                setTasksCompletedToday(prev => prev + 1);
              }
            } else {
              if (wasCompleted && currentTask?.completedAt) {
                const completedDate = new Date(currentTask.completedAt);
                if (completedDate >= today) {
                  setTasksCompletedToday(prev => Math.max(prev - 1, 0));
                }
              }
            }
            
            // Update project summary taskCount optimistically
            if (projectId !== 'global') {
              setProjectSummaries(prev => 
                prev.map(p => 
                  p.id === projectId 
                    ? { 
                        ...p, 
                        taskCount: isCompleting 
                          ? Math.max((p.taskCount || 0) - 1, 0)
                          : (p.taskCount || 0) + 1
                      }
                    : p
                )
              );
            }
          }
        } else {
          // Handle regular tasks
          const currentTask = projectData[projectId]?.find(l => 
            l.tasks.some(t => t.id === taskId)
          )?.tasks.find(t => t.id === taskId);
          const wasCompleted = currentTask?.completedAt !== null;
          
          console.log('[updateTask] Task found:', { taskId, currentTask, wasCompleted, isCompleting, projectData: !!projectData[projectId] });
          
          if (isCompleting !== wasCompleted) {
            // Apply optimistic update immediately
            updateProjectData(projectId, lists =>
              lists.map(l =>
                l.id === listId
                  ? {
                    ...l,
                    tasks: l.tasks.map(t =>
                      t.id === taskId
                        ? { ...t, ...updates, subtasks: t.subtasks }
                        : t
                    ),
                    // Recalculate taskCount based on actual incomplete tasks
                    taskCount: l.tasks.map(t =>
                      t.id === taskId
                        ? { ...t, ...updates, subtasks: t.subtasks }
                        : t
                    ).filter(t => !t.completedAt).length,
                  }
                  : l
              )
            );
            
            // Update task completion tracking for project tasks
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            
            if (isCompleting) {
              const completedDate = new Date(updates.completedAt!);
              if (completedDate >= today) {
                setTasksCompletedToday(prev => prev + 1);
              }
            } else {
              if (wasCompleted && currentTask?.completedAt) {
                const completedDate = new Date(currentTask.completedAt);
                if (completedDate >= today) {
                  setTasksCompletedToday(prev => Math.max(prev - 1, 0));
                }
              }
            }
            
            // Recalculate project summary taskCount based on all lists
            const updatedLists = projectData[projectId]?.map(l =>
              l.id === listId
                ? {
                  ...l,
                  tasks: l.tasks.map(t =>
                    t.id === taskId
                      ? { ...t, ...updates, subtasks: t.subtasks }
                      : t
                  ),
                  taskCount: l.tasks.map(t =>
                    t.id === taskId
                      ? { ...t, ...updates, subtasks: t.subtasks }
                      : t
                  ).filter(t => !t.completedAt).length,
                }
                : l
            ) || [];
            
            const totalIncompleteTasks = updatedLists.reduce((sum, list) => sum + list.taskCount, 0);
            
            setProjectSummaries(prev => 
              prev.map(p => 
                p.id === projectId 
                  ? { ...p, taskCount: totalIncompleteTasks }
                  : p
              )
            );
          } else {
            console.log('[updateTask] No optimistic update needed - completion status unchanged');
          }
        }
      }
      
      try {
        let updated: Task;
        
        // Handle Do Now tasks differently
        if (listId === 'do-now') {
          await apiUpdateDoNowTask(taskId, updates);
          updated = doNowTasks.find(t => t.id === taskId)!;

          // Refresh Do Now tasks from backend to ensure UI matches backend
          await loadDoNowTasks();
          
          // Recalculate tasks completed today after server response
          const today = new Date();
          today.setHours(0, 0, 0, 0);
          
          // Count completed Do Now tasks
          const doNowCompleted = doNowTasks.filter(task => 
            task.completedAt && new Date(task.completedAt) >= today
          ).length;
          
          // Count completed project tasks
          const projectCompleted = Object.values(projectData).flatMap(lists =>
            lists.flatMap(list =>
              list.tasks.filter(task => 
                task.completedAt && new Date(task.completedAt) >= today
              )
            )
          ).length;
          
          setTasksCompletedToday(doNowCompleted + projectCompleted);
          
          // Mark that sync is needed for completion changes
          if (updates.completedAt !== undefined) {
            setNeedsSync(true);
          }
        } else {
          updated = await apiUpdateTask(projectId, listId, taskId, updates);
          
          console.log('[updateTask] Server response:', { updated, updates });
          
          // For completion updates, ensure the optimistic update is properly reflected
          // by updating with the server response
          if (updates.completedAt !== undefined) {
            updateProjectData(projectId, lists =>
              lists.map(l =>
                l.id === listId
                  ? {
                    ...l,
                    tasks: l.tasks.map(t =>
                      t.id === taskId
                        ? { ...updated, subtasks: t.subtasks }
                        : t
                    ),
                    // Recalculate taskCount based on incomplete tasks
                    taskCount: l.tasks.map(t =>
                      t.id === taskId
                        ? { ...updated, subtasks: t.subtasks }
                        : t
                    ).filter(t => !t.completedAt).length,
                  }
                  : l
              )
            );
            
            // Recalculate project summary taskCount based on all lists
            const updatedLists = projectData[projectId]?.map(l =>
              l.id === listId
                ? {
                  ...l,
                  tasks: l.tasks.map(t =>
                    t.id === taskId
                      ? { ...updated, subtasks: t.subtasks }
                      : t
                  ),
                  taskCount: l.tasks.map(t =>
                    t.id === taskId
                      ? { ...updated, subtasks: t.subtasks }
                      : t
                  ).filter(t => !t.completedAt).length,
                }
                : l
            ) || [];
            
            const totalIncompleteTasks = updatedLists.reduce((sum, list) => sum + list.taskCount, 0);
            
            setProjectSummaries(prev => 
              prev.map(p => 
                p.id === projectId 
                  ? { ...p, taskCount: totalIncompleteTasks }
                  : p
              )
            );
            
            // Recalculate tasks completed today after server response
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            
            // Count completed Do Now tasks
            const doNowCompleted = doNowTasks.filter(task => 
              task.completedAt && new Date(task.completedAt) >= today
            ).length;
            
            // Count completed project tasks
            const projectCompleted = Object.values(projectData).flatMap(lists =>
              lists.flatMap(list =>
                list.tasks.filter(task => 
                  task.completedAt && new Date(task.completedAt) >= today
                )
              )
            ).length;
            
            setTasksCompletedToday(doNowCompleted + projectCompleted);
          } else {
            // For non-completion updates, update the task in local state
            updateProjectData(projectId, lists =>
              lists.map(l =>
                l.id === listId
                  ? {
                    ...l,
                    tasks: l.tasks.map(t =>
                      t.id === taskId
                        ? { ...updated, subtasks: t.subtasks }
                        : t
                    ),
                  }
                  : l
              )
            );
          }
          
          // Mark that sync is needed for completion changes
          if (updates.completedAt !== undefined) {
            setNeedsSync(true);
          }
        }
        
        return updated;
      } catch (e: any) {
        setError(e.message ?? "Unable to update task");
        throw e;
      }
    },
    [updateProjectData, doNowTasks]
  );

  // DELETE a task
  const deleteTask = useCallback(
    async (projectId: string, listId: string, taskId: string) => {
      // Use specific loading states instead of global loading
      if (listId === 'do-now') {
        setLoadingDoNow(true);
      } else {
        setLoadingProjectContent(true);
      }
      setLoadingTasks(prev => new Set(prev).add(taskId));
      setError(null);
      try {
        // Handle Do Now tasks differently
        if (listId === 'do-now') {
          await apiDeleteDoNowTask(taskId);
          
          // Check if the deleted task was completed today
          const deletedTask = doNowTasks.find(t => t.id === taskId);
          if (deletedTask?.completedAt) {
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            const completedDate = new Date(deletedTask.completedAt);
            if (completedDate >= today) {
              setTasksCompletedToday(prev => Math.max(prev - 1, 0));
            }
          }
          
          setDoNowTasks(prev => prev.filter(t => t.id !== taskId));
          
          // Update project summary taskCount optimistically (only count incomplete tasks)
          // Only update if it's not a global task
          if (projectId !== 'global') {
            setProjectSummaries(prev => 
              prev.map(p => 
                p.id === projectId 
                  ? { ...p, taskCount: Math.max((p.taskCount || 0) - 1, 0) }
                  : p
              )
            );
          }
          
          // Update allTasks state for immediate due today/tomorrow updates
          // setAllTasks(prev => prev.filter(t => t.id !== taskId));
          
          // Mark that sync is needed
          setNeedsSync(true);
        } else {
          await apiDeleteTask(projectId, listId, taskId);
          
          // Optimistic update - remove task from local state immediately
          updateProjectData(projectId, lists =>
            lists.map(l =>
              l.id === listId
                ? {
                  ...l,
                  tasks: l.tasks.filter(t => t.id !== taskId),
                  // Update taskCount optimistically (only count incomplete tasks)
                  taskCount: Math.max((l.taskCount || 0) - 1, 0),
                }
                : l
            )
          );
          
          // Update project summary taskCount optimistically
          setProjectSummaries(prev => 
            prev.map(p => 
              p.id === projectId 
                ? { ...p, taskCount: Math.max((p.taskCount || 0) - 1, 0) }
                : p
            )
          );
          
          // Update allTasks state for immediate due today/tomorrow updates
          // setAllTasks(prev => prev.filter(t => t.id !== taskId));
          
          // Mark that sync is needed
          setNeedsSync(true);
        }
      } catch (e: any) {
        setError(e.message ?? "Unable to delete task");
        throw e;
      } finally {
        if (listId === 'do-now') {
          setLoadingDoNow(false);
        } else {
          setLoadingProjectContent(false);
        }
        setLoadingTasks(prev => {
          const newSet = new Set(prev);
          newSet.delete(taskId);
          return newSet;
        });
      }
    },
    [updateProjectData]
  );

  // ADD a subtask (commented out - subtasks disabled)
  // const addSubtask = useCallback(
  //   async (projectId: string, listId: string, taskId: string, name: string, dueDate?: number) => {
  //     try {
  //       const newSubtask = await apiCreateSubtask(projectId, listId, taskId, name, dueDate);
  //       updateProjectData(projectId, (lists) =>
  //         lists.map((list) =>
  //           list.id !== listId
  //             ? list
  //             : {
  //                 ...list,
  //                 tasks: list.tasks.map((task) =>
  //                   task.id !== taskId
  //                     ? task
  //                     : {
  //                         ...task,
  //                         subtasks: [...(task.subtasks || []), newSubtask],
  //                         subtaskCount: (task.subtaskCount || 0) + 1,
  //                       }
  //                 ),
  //               }
  //       )
  //     );
  //     return true;
  //   } catch (e: any) {
  //     setError(e.message ?? "Unable to create subtask");
  //     return false;
  //   }
  // },
  // [updateProjectData]
  // );

  // UPDATE a subtask (commented out - subtasks disabled)
  // const updateSubtask = useCallback(
  //   async (
  //     projectId: string,
  //     listId: string,
  //     taskId: string,
  //     subtaskId: string,
  //     updates: SubtaskUpdate
  //   ) => {
  //     try {
  //       const updatedSubtask = await apiUpdateSubtask(projectId, listId, taskId, subtaskId, updates);
  //       updateProjectData(projectId, (lists) =>
  //         lists.map((list) =>
  //           list.id !== listId
  //             ? list
  //             : {
  //                 ...list,
  //                 tasks: list.tasks.map((task) =>
  //                   task.id !== taskId
  //                     ? task
  //                     : {
  //                         ...task,
  //                         subtasks: (task.subtasks || []).map((subtask) =>
  //                           subtask.id !== subtaskId ? subtask : updatedSubtask
  //                         ),
  //                       }
  //                 ),
  //               }
  //       )
  //     );
  //     return true;
  //   } catch (e: any) {
  //     setError(e.message ?? "Unable to update subtask");
  //     return false;
  //   }
  // },
  // [updateProjectData]
  // );

  // DELETE a subtask (commented out - subtasks disabled)
  // const deleteSubtask = useCallback(
  //   async (projectId: string, listId: string, taskId: string, subtaskId: string) => {
  //     try {
  //       await apiDeleteSubtask(projectId, listId, taskId, subtaskId);
  //       updateProjectData(projectId, (lists) =>
  //         lists.map((list) =>
  //           list.id !== listId
  //             ? list
  //             : {
  //                 ...list,
  //                 tasks: list.tasks.map((task) =>
  //                   task.id !== taskId
  //                     ? task
  //                     : {
  //                         ...task,
  //                         subtasks: (task.subtasks || []).filter((subtask) => subtask.id !== subtaskId),
  //                         subtaskCount: Math.max((task.subtaskCount || 1) - 1, 0),
  //                       }
  //                 ),
  //               }
  //       )
  //     );
  //     return true;
  //   } catch (e: any) {
  //     setError(e.message ?? "Unable to delete subtask");
  //     return false;
  //   }
  // },
  // [updateProjectData]
  // );

  return {
    // core selectors
    projectSummaries,      // list of all projects' metadata
    currentProject,        // the active project's ID
    setCurrentProject,     // to switch projects

    // convenience views of the current project
    lists,                 // List[] for the current project
    fullProject,           // Project|null, or null if none selected
    doNowTasks,            // Task[] for Do Now list
    doNowTaskCount,        // number of uncompleted Do Now tasks
    tasksCompletedToday,   // number of tasks completed today
    // allTasks removed - now using due counts from summaries

    // loading & error
    loading,
    loadingProjects,
    error,

    // Separate loading states for different sections
    loadingDoNow,
    loadingProjectContent,
    loadingSidebar,
    loadingTasks,
    loadingInitialData,

    // project‐level actions
    addProject,
    updateProject,
    deleteProject,
    refreshProjectSummaries,
    refreshCurrentProjectData,


    // list‐level actions
    addList,
    updateList,
    deleteList,
    moveList,

    // task‐level actions
    addTask,
    updateTask,
    deleteTask,

    // subtask‐level actions (commented out - subtasks disabled)
    // addSubtask,
    // updateSubtask,
    // deleteSubtask,

    // force a full refresh from backend
    forceRefresh,
    
    // cache management
    clearProjectCache,
    clearAllCaches,
    
    // manual sync
    syncNow: debouncedSync,
  };
}
