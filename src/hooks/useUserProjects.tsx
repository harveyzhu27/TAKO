// useUserProjects.ts
import { useState, useEffect, useCallback } from "react";
import { useAuthContext } from "./useAuth.jsx";
import type { Project, ProjectSummary } from "@shared/models/ProjectModel";
import type { List } from "@shared/models/ListModel";
import type { Task, TaskUpdate } from "@shared/models/TaskModel";
import type { Subtask, SubtaskUpdate} from "@shared/models/SubtaskModel";
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
  const [projects, setProjects] = useState<ProjectSummary[]>([]);
  const [currentProject, setCurrentProject] = useState<string | null>(null);
  const [projectData, setProjectData] = useState<Record<string, List[]>>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const lists = currentProject ? projectData[currentProject] ?? [] : [];

  const resetAll = useCallback(() => {
    setProjects([]);
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
  let cancelled = false;
  setLoading(true);
  setError(null);
  console.log("Fetching project summaries...");

  (async () => {
    try {
      const summaries = await apiGetProjectSummaries();
      console.log("Loaded summaries:", summaries);
      if (!cancelled) {
        setProjects(summaries);
        setCurrentProject(summaries[0]?.id ?? null);
      }
    } catch (e: any) {
      if (!cancelled) setError(e.message ?? "Failed to load projects");
    } finally {
      if (!cancelled) setLoading(false);
    }
  })();

  return () => {
    cancelled = true;
  };
}, [currentUser, resetAll]);


  useEffect(() => {
  console.log("🔄 projects state changed:", projects);
}, [projects]);


  useEffect(() => {
    if (!currentProject || projectData[currentProject]) return;
    setLoading(true);
    setError(null);
    (async () => {
      try {
        const rawLists = await apiGetLists(currentProject);
        const listsWithTasks = await Promise.all(
          rawLists.map(async (l) => {
            const ts = await apiGetTasks(currentProject, l.id);
            const tasksWithSubs = await Promise.all(
              ts.map(async (t) => {
                const sts = await apiGetSubtasks(currentProject, l.id, t.id);
                return { ...t, subtasks: sts };
              })
            );
            return { ...l, tasks: tasksWithSubs };
          })
        );
        setProjectData(prev => ({ ...prev, [currentProject]: listsWithTasks }));
      } catch (e: any) {
        setError(e.message ?? "Failed to load project data");
      } finally {
        setLoading(false);
      }
    })();
  }, [currentProject, projectData]);

  // Projects CRUD
  const addProject = useCallback(async (name: string) => {
    console.log("✏️  addProject(", name, ")");
    setLoading(true);
    try {
      
      const newProject = await apiCreateProject(name);
    console.log("↩️ apiCreateProject returned", newProject);
      setProjects(prev => [...prev, newProject]);
      setProjectData(prev => ({ ...prev, [newProject.id]: [] }));
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
    try {
      await apiDeleteProject(projectId);
      setProjects(prev => prev.filter(p => p.id !== projectId));
      setProjectData(prev => {
        const newData = { ...prev };
        delete newData[projectId];
        return newData;
      });
    } catch (e: any) {
      setError(e.message ?? "Unable to delete project");
      throw e;
    } finally {
      setLoading(false);
    }
  }, []);

  const updateProject = useCallback(async (projectId: string, updates: Partial<Project>) => {
    setLoading(true);
    try {
      const updated = await apiUpdateProject(projectId, updates);
      setProjects(prev => prev.map(p => p.id === projectId ? updated : p));
      return updated;
    } catch (e: any) {
      setError(e.message ?? "Unable to update project");
      throw e;
    } finally {
      setLoading(false);
    }
  }, []);


  // Lists CRUD
  const addList = useCallback(async (projectId: string, name: string) => {
    setLoading(true);
    try {
      const newList = await apiCreateList(projectId, name);
      setProjectData(prev => ({
        ...prev,
        [projectId]: [...(prev[projectId] ?? []), { ...newList, tasks: [] }]
      }));
      return newList;
    } catch (e: any) {
      setError(e.message ?? "Unable to create list");
      throw e;
    } finally {
      setLoading(false);
    }
  }, []);

  const deleteList = useCallback(async (projectId: string, listId: string) => {
    setLoading(true);
    try {
      await apiDeleteList(projectId, listId);
      setProjectData(prev => ({
        ...prev,
        [projectId]: prev[projectId].filter(l => l.id !== listId)
      }));
    } catch (e: any) {
      setError(e.message ?? "Unable to delete list");
      throw e;
    } finally {
      setLoading(false);
    }
  }, []);

  const updateList = useCallback(async (projectId: string, listId: string, name: string) => {
    setLoading(true);
    try {
      const updated = await apiUpdateList(projectId, listId, name);
      setProjectData(prev => ({
        ...prev,
        [projectId]: prev[projectId].map(l =>
          l.id === listId ? { ...updated, tasks: l.tasks } : l
        )
      }));
      return updated;
    } catch (e: any) {
      setError(e.message ?? "Unable to update list");
      throw e;
    } finally {
      setLoading(false);
    }
  }, []);

  const moveList = useCallback(
    async (projectId: string, listId: string, direction: "left" | "right") => {
      setLoading(true);
      try {
        const lists = projectData[projectId] ?? [];
        const idx = lists.findIndex(l => l.id === listId);
        const swapIdx = direction === "left" ? idx - 1 : idx + 1;
        if (idx === -1 || swapIdx < 0 || swapIdx >= lists.length) return;
        const listA = lists[idx];
        const listB = lists[swapIdx];
        await apiUpdateList(projectId, listA.id, listA.name, listB.order);
        await apiUpdateList(projectId, listB.id, listB.name, listA.order);
        const updated = await apiGetLists(projectId);
        updateProjectData(projectId, old => updated.map(l => ({
          ...l,
          tasks: old.find(orig => orig.id === l.id)?.tasks || []
        })));
      } catch (e: any) {
        setError(e.message ?? "Unable to move list");
      } finally {
        setLoading(false);
      }
    }, [projectData, updateProjectData]
  );

  const addTask = useCallback(async (projectId: string, listId: string, name: string, dueDate?: number) => {
    setLoading(true);
    try {
      const task = await apiCreateTask(projectId, listId, name, dueDate);
      updateProjectData(projectId, lists =>
        lists.map(l => l.id === listId
          ? { ...l, tasks: [...l.tasks, { ...task, subtasks: [] }] }
          : l));
      return task;
    } catch (e: any) {
      setError(e.message ?? "Unable to create task");
      throw e;
    } finally {
      setLoading(false);
    }
  }, [updateProjectData]);

  const updateTask = useCallback(async (projectId: string, listId: string, taskId: string, updates: TaskUpdate) => {
    setLoading(true);
    try {
      const updated = await apiUpdateTask(projectId, listId, taskId, updates);
      updateProjectData(projectId, lists =>
        lists.map(l => l.id === listId
          ? { ...l, tasks: l.tasks.map(t => t.id === taskId ? { ...updated, subtasks: t.subtasks } : t) }
          : l));
      return updated;
    } catch (e: any) {
      setError(e.message ?? "Unable to update task");
      throw e;
    } finally {
      setLoading(false);
    }
  }, [updateProjectData]);

  const deleteTask = useCallback(async (projectId: string, listId: string, taskId: string) => {
    setLoading(true);
    try {
      await apiDeleteTask(projectId, listId, taskId);
      updateProjectData(projectId, lists =>
        lists.map(l => l.id === listId
          ? { ...l, tasks: l.tasks.filter(t => t.id !== taskId) }
          : l));
    } catch (e: any) {
      setError(e.message ?? "Unable to delete task");
      throw e;
    } finally {
      setLoading(false);
    }
  }, [updateProjectData]);

  const addSubtask = useCallback(async (projectId: string, listId: string, taskId: string, name: string, dueDate?: number) => {
    setLoading(true);
    try {
      const subtask = await apiCreateSubtask(projectId, listId, taskId, name, dueDate);
      updateProjectData(projectId, lists =>
        lists.map(l => l.id === listId
          ? {
            ...l,
            tasks: l.tasks.map(t =>
              t.id === taskId
                ? { ...t, subtasks: [...(t.subtasks ?? []), subtask] }
                : t
            )
          }
          : l));
      return subtask;
    } catch (e: any) {
      setError(e.message ?? "Unable to add subtask");
      throw e;
    } finally {
      setLoading(false);
    }
  }, [updateProjectData]);

  const updateSubtask = useCallback(async (projectId: string, listId: string, taskId: string, subtaskId: string, updates: SubtaskUpdate) => {
    setLoading(true);
    try {
      const updated = await apiUpdateSubtask(projectId, listId, taskId, subtaskId, updates);
      updateProjectData(projectId, lists =>
        lists.map(l => l.id === listId
          ? {
            ...l,
            tasks: l.tasks.map(t =>
              t.id === taskId
                ? {
                  ...t,
                  subtasks: t.subtasks.map(s => s.id === subtaskId ? updated : s)
                }
                : t
            )
          }
          : l));
      return updated;
    } catch (e: any) {
      setError(e.message ?? "Unable to update subtask");
      throw e;
    } finally {
      setLoading(false);
    }
  }, [updateProjectData]);

  const deleteSubtask = useCallback(async (projectId: string, listId: string, taskId: string, subtaskId: string) => {
    setLoading(true);
    try {
      await apiDeleteSubtask(projectId, listId, taskId, subtaskId);
      updateProjectData(projectId, lists =>
        lists.map(l => l.id === listId
          ? {
            ...l,
            tasks: l.tasks.map(t =>
              t.id === taskId
                ? { ...t, subtasks: t.subtasks.filter(s => s.id !== subtaskId) }
                : t
            )
          }
          : l));
    } catch (e: any) {
      setError(e.message ?? "Unable to delete subtask");
      throw e;
    } finally {
      setLoading(false);
    }
  }, [updateProjectData]);
  return {
    projects,
    currentProject,
    setCurrentProject,
    lists,
    loading,
    error,
    addProject,
    deleteProject,
    updateProject,
    addList,
    deleteList,
    updateList,
    moveList,
    addTask,
    deleteTask,
    updateTask,
    addSubtask,
    deleteSubtask,
    updateSubtask,
  };
}
