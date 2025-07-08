// useUserProjects.ts
import { useState, useEffect, useCallback } from "react";
import { useAuthContext } from "./useAuth.jsx";
import type { Project, ProjectSummary } from "@shared/models/ProjectModel";
import type { List } from "@shared/models/ListModel";
import type { Task, TaskUpdate } from "@shared/models/TaskModel";
import type { Subtask, SubtaskUpdate } from "@shared/models/SubtaskModel";
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
import {
  getSubtasks as apiGetSubtasks,
  createSubtask as apiCreateSubtask,
  deleteSubtask as apiDeleteSubtask,
  updateSubtask as apiUpdateSubtask,
} from "../api/subtasks";

export default function useUserProjects() {
  const { currentUser } = useAuthContext();
  // const [projects, setProjects] = useState<Project[]>([]); // all projects
  const [projectSummaries, setProjectSummaries] = useState<ProjectSummary[]>([]); // project summaries. 
  const [currentProject, setCurrentProject] = useState<string | null>(null); // currently selected project
  const [projectData, setProjectData] = useState<Record<string, List[]>>({}); // record of projects' lists in dictionary format 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Add a refreshKey for manual/triggered refreshes
  const [refreshKey, setRefreshKey] = useState(0);
  // Function to force a full refresh from backend
  const forceRefresh = useCallback(() => setRefreshKey(k => k + 1), []);


  const lists = currentProject
    ? projectData[currentProject] ?? []
    : [];

  const fullProject: Project | null = currentProject
    ? {
      ...projectSummaries.find(p => p.id === currentProject)!,
      uid: currentUser!.uid,
      lists,
    }
    : null;


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

  useEffect(() => {
    if (!currentUser) {
      resetAll();
      return;
    }
    setLoading(true);
    setError(null);

    (async () => {
      try {
        const summaries = await apiGetProjectSummaries();
        setProjectSummaries(summaries);
        setCurrentProject(summaries[0]?.id ?? null);
      } catch (err: unknown) {
        console.error("🔴 getProjectSummaries failed:", (err as Error).message);
      } finally {
        setLoading(false);
      }
    })();

  }, [currentUser, resetAll]);


  // useEffect(() => { // GETTING AUTH TOKEN FOR DEBUGGING
  //   if (currentUser) {
  //     currentUser.getIdToken(true).then(token => {
  //       console.log("TOKEN:", token);
  //     });
  //   }
  // }, [currentUser]);


  // Optimized: Only fetch from backend on initial load or when forced
  useEffect(() => {
    if (!currentProject) return;
    setLoading(true);
    setError(null);

    (async () => {
      try {
        // Fetch all lists, tasks, and subtasks for the current project
        const rawLists = await apiGetLists(currentProject);
        const listsWithTasks = await Promise.all(
          rawLists.map(async (l) => {
            const tasks = await apiGetTasks(currentProject, l.id);
            const tasksWithSubtasks = await Promise.all(
              tasks.map(async (task) => {
                const subtasks = await apiGetSubtasks(currentProject, l.id, task.id);
                return { ...task, subtasks };
              })
            );
            return {
              ...l,
              tasks: tasksWithSubtasks,
              taskCount: l.taskCount ?? tasksWithSubtasks.length
            };
          })
        );
        setProjectData(prev => ({ ...prev, [currentProject]: listsWithTasks }));
      } catch (e: any) {
        setError(e.message ?? "Failed to load project data");
      } finally {
        setLoading(false);
      }
    })();
  }, [currentProject, refreshKey]);

  // Projects CRUD
  const addProject = useCallback(async (name: string) => {
    console.log("✏️  addProject(", name, ")");
    setLoading(true);
    setError(null);
    try {
      const { project: newProject, list: defaultList } = await apiCreateProject(name);

      const newSummary: ProjectSummary = {
        id: newProject.id,
        name: newProject.name,
        description: newProject.description,
        order: newProject.order,
        taskCount: newProject.taskCount
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
      setLoading(false);
    }
  }, []);

  const deleteProject = useCallback(async (projectId: string) => {
    setLoading(true);
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
      setLoading(false);
    }
  }, [projectSummaries]);

  const updateProject = useCallback(async (projectId: string, updates: Partial<Project>) => {
    setLoading(true);
    try {
      const updatedProject = await apiUpdateProject(projectId, updates);
      const updatedSummary: ProjectSummary = {
        id: updatedProject.id,
        name: updatedProject.name,
        description: updatedProject.description,
        order: updatedProject.order,
        taskCount: updatedProject.taskCount,
      };
      setProjectSummaries(prev => prev.map(p => p.id === projectId ? updatedSummary : p));
      return updatedProject;
    } catch (e: any) {
      setError(e.message ?? "Unable to update project");
      throw e;
    } finally {
      setLoading(false);
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

  const refreshCurrentProjectData = useCallback(async () => {
    if (!currentProject) return;
    
    console.log("🔄 Refreshing current project data for:", currentProject);
    
    try {
      const rawLists = await apiGetLists(currentProject);
      console.log("📋 Raw lists from API:", rawLists.map(l => ({ id: l.id, name: l.name, taskCount: l.taskCount })));
      
      const listsWithTasks = await Promise.all(
        rawLists.map(async (l) => {
          const ts = await apiGetTasks(currentProject, l.id);
          const tasksWithSubs = await Promise.all(
            ts.map(async (t) => {
              const sts = await apiGetSubtasks(currentProject, l.id, t.id);
              return { ...t, subtasks: sts };
            })
          );
          return { ...l, tasks: tasksWithSubs, taskCount: l.taskCount ?? tasksWithSubs.length};
        })
      );
      
      console.log("📊 Lists with tasks:", listsWithTasks.map(l => ({ id: l.id, name: l.name, taskCount: l.taskCount, taskCountFromTasks: l.tasks.length })));
      
      setProjectData(prev => ({ ...prev, [currentProject]: listsWithTasks }));
    } catch (err: unknown) {
      console.error("🔴 refreshCurrentProjectData failed:", (err as Error).message);
    }
  }, [currentProject, apiGetLists, apiGetTasks, apiGetSubtasks]);




  // Lists CRUD
  // Efficiently update local state after list changes
  const addList = useCallback(async (projectId: string, name: string) => {
    setLoading(true);
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
      setLoading(false);
    }
  }, [updateProjectData, refreshProjectSummaries]);

  const deleteList = useCallback(
    async (projectId: string, listId: string) => {
      setLoading(true);
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
        setLoading(false);
      }
    },
    [updateProjectData, refreshProjectSummaries]
  );

  const updateList = useCallback(
    async (projectId: string, listId: string, name: string) => {
      setLoading(true);
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
        setLoading(false);
      }
    },
    [updateProjectData]
  );

  // MOVE a list left or right
const moveList = useCallback(
  async (projectId: string, listId: string, direction: "left" | "right") => {
    setLoading(true);
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

      updateProjectData(projectId, old =>
        updatedLists
          .sort((a, b) => a.order - b.order)
          .map(l => ({
            ...l,
            tasks: old.find(orig => orig.id === l.id)?.tasks ?? []
          }))
      );
    } catch (e: any) {
      setError(e.message ?? "Unable to move list");
      throw e;
    } finally {
      setLoading(false);
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
      setLoading(true);
      setError(null);
      try {
        const newTask = await apiCreateTask(projectId, listId, name, dueDate);
        updateProjectData(projectId, lists =>
          lists.map(l =>
            l.id === listId
              ? {
                ...l,
                tasks: [
                  ...l.tasks,
                  { ...newTask, subtasks: [] }],
              }
              : l
          )
        );
        
        // Refresh current project data to update list taskCount
        console.log("🔄 addTask: Calling refreshCurrentProjectData");
        await refreshCurrentProjectData();
        
        return newTask;
      } catch (e: any) {
        setError(e.message ?? "Unable to create task");
        // throw e;
      } finally {
        setLoading(false);
      }
    },
    [updateProjectData, refreshCurrentProjectData]
  );

  // UPDATE a task
  const updateTask = useCallback(
    async (
      projectId: string,
      listId: string,
      taskId: string,
      updates: TaskUpdate
    ) => {
      setLoading(true);
      setError(null);
      try {
        const updated = await apiUpdateTask(
          projectId,
          listId,
          taskId,
          updates
        );
        updateProjectData(projectId, lists =>
          lists.map(l =>
            l.id === listId
              ? {
                ...l,
                tasks: l.tasks.map(t =>
                  t.id === taskId
                    ? { ...updated, subtasks: t.subtasks } // preserve existing subtasks
                    : t
                )
              }
              : l
          )
        );
        
        // Refresh current project data if completion status changed
        if (updates.completedAt !== undefined) {
          await refreshCurrentProjectData();
        }
        
        return updated;
      } catch (e: any) {
        setError(e.message ?? "Unable to update task");
        throw e;
      } finally {
        setLoading(false);
      }
    },
    [updateProjectData, refreshCurrentProjectData]
  );

  // DELETE a task
  const deleteTask = useCallback(
    async (projectId: string, listId: string, taskId: string) => {
      setLoading(true);
      setError(null);
      try {
        await apiDeleteTask(projectId, listId, taskId);
        updateProjectData(projectId, lists =>
          lists.map(l =>
            l.id === listId
              ? {
                ...l,
                tasks: l.tasks.filter(t => t.id !== taskId),
              }
              : l
          )
        );
        
        // Refresh current project data to update list taskCount
        console.log("🔄 deleteTask: Calling refreshCurrentProjectData");
        await refreshCurrentProjectData();
      } catch (e: any) {
        setError(e.message ?? "Unable to delete task");
        throw e;
      } finally {
        setLoading(false);
      }
    },
    [updateProjectData, refreshCurrentProjectData]
  );

  // ADD a subtask
  const addSubtask = useCallback(
    async (projectId: string, listId: string, taskId: string, name: string, dueDate?: number) => {
      try {
        const newSubtask = await apiCreateSubtask(projectId, listId, taskId, name, dueDate);
        updateProjectData(projectId, (lists) =>
          lists.map((list) =>
            list.id !== listId
              ? list
              : {
                  ...list,
                  tasks: list.tasks.map((task) =>
                    task.id !== taskId
                      ? task
                      : {
                          ...task,
                          subtasks: [...(task.subtasks || []), newSubtask],
                          subtaskCount: (task.subtaskCount || 0) + 1,
                        }
                  ),
                }
        )
      );
      return true;
    } catch (e: any) {
      setError(e.message ?? "Unable to create subtask");
      return false;
    }
  },
  [updateProjectData]
);

  // UPDATE a subtask
  const updateSubtask = useCallback(
    async (
      projectId: string,
      listId: string,
      taskId: string,
      subtaskId: string,
      updates: SubtaskUpdate
    ) => {
      try {
        const updatedSubtask = await apiUpdateSubtask(projectId, listId, taskId, subtaskId, updates);
        updateProjectData(projectId, (lists) =>
          lists.map((list) =>
            list.id !== listId
              ? list
              : {
                  ...list,
                  tasks: list.tasks.map((task) =>
                    task.id !== taskId
                      ? task
                      : {
                          ...task,
                          subtasks: (task.subtasks || []).map((subtask) =>
                            subtask.id !== subtaskId ? subtask : updatedSubtask
                          ),
                        }
                  ),
                }
        )
      );
      return true;
    } catch (e: any) {
      setError(e.message ?? "Unable to update subtask");
      return false;
    }
  },
  [updateProjectData]
);

  // DELETE a subtask
  const deleteSubtask = useCallback(
    async (projectId: string, listId: string, taskId: string, subtaskId: string) => {
      try {
        await apiDeleteSubtask(projectId, listId, taskId, subtaskId);
        updateProjectData(projectId, (lists) =>
          lists.map((list) =>
            list.id !== listId
              ? list
              : {
                  ...list,
                  tasks: list.tasks.map((task) =>
                    task.id !== taskId
                      ? task
                      : {
                          ...task,
                          subtasks: (task.subtasks || []).filter((subtask) => subtask.id !== subtaskId),
                          subtaskCount: Math.max((task.subtaskCount || 1) - 1, 0),
                        }
                  ),
                }
        )
      );
      return true;
    } catch (e: any) {
      setError(e.message ?? "Unable to delete subtask");
      return false;
    }
  },
  [updateProjectData]
);

  return {
    // core selectors
    projectSummaries,      // list of all projects’ metadata
    currentProject,        // the active project’s ID
    setCurrentProject,     // to switch projects

    // convenience views of the current project
    lists,                 // List[] for the current project
    fullProject,           // Project|null, or null if none selected

    // loading & error
    loading,
    error,

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

    // subtask‐level actions
    addSubtask,
    updateSubtask,
    deleteSubtask,

    // force a full refresh from backend
    forceRefresh,
  };
}
