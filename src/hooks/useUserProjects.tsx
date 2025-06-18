import { useState, useEffect, useCallback } from "react";
import { useAuthContext } from "./useAuth.jsx";
import type { Project } from "@shared/models/ProjectModel";
import type { List } from "@shared/models/ListModel";
import type { Task } from "@shared/models/TaskModel";
import type { Subtask } from "@shared/models/SubtaskModel";
import {
  getAllProjects as apiGetAllProjects,
  createProject as apiCreateProject,
  deleteProject as apiDeleteProject,
  updateProject as apiUpdateProject,
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
  const [projects, setProjects] = useState<Project[]>([]);
  const [currentProject, setCurrentProject] = useState<string | null>(null);
  const [lists, setLists] = useState<List[]>([]);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [subtasks, setSubtasks] = useState<Subtask[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Reset all state
  const resetAll = useCallback(() => {
    setProjects([]);
    setCurrentProject(null);
    setLists([]);
    setTasks([]);
    setSubtasks([]);
    setError(null);
    setLoading(false);
  }, []);

  // Load projects on auth change
  useEffect(() => {
    if (!currentUser) {
      resetAll();
      return;
    }
    (async () => {
      setLoading(true);
      setError(null);
      try {
        const projs = await apiGetAllProjects();
        setProjects(projs);
        setCurrentProject(projs[0]?.id ?? null);
      } catch (e: any) {
        setError(e.message ?? "Failed to load projects");
      } finally {
        setLoading(false);
      }
    })();
  }, [currentUser, resetAll]);

  // Load lists, tasks and subtasks functions returning data
  const loadLists = useCallback(async (projectId: string) => {
    const ls = await apiGetLists(projectId);
    setLists(ls);
    return ls;
  }, []);

  const loadTasks = useCallback(async (projectId: string, listId: string) => {
    const ts = await apiGetTasks(projectId, listId);
    setTasks(ts);
    return ts;
  }, []);

  const loadSubtasks = useCallback(
    async (projectId: string, listId: string, taskId: string) => {
      const sts = await apiGetSubtasks(projectId, listId, taskId);
      setSubtasks(sts);
      return sts;
    },
    []
  );

  // Combined effect: when currentProject changes, load lists → tasks → subtasks
  useEffect(() => {
  if (!currentProject) {
    setLists([]);
    setTasks([]);
    setSubtasks([]);
    return;
  }
  (async () => {
    setLoading(true);
    setError(null);
    try {
      const ls = await loadLists(currentProject);
      if (ls.length === 0) {
        setTasks([]);
        return;
      }
      const ts = await loadTasks(currentProject, ls[0].id);
    } catch (e: any) {
      setError(e.message ?? "Failed to load data");
    } finally {
      setLoading(false);
    }
  })();
}, [currentProject, loadLists, loadTasks, loadSubtasks]);

  // Projects
  const addProject = useCallback(async (name: string) => {
    setLoading(true);
    setError(null);
    try {
      const newProj = await apiCreateProject(name);
      setProjects((prev) => [...prev, newProj]);
      setCurrentProject(newProj.id);
      return newProj;
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
      setProjects((prev) => prev.filter((p) => p.id !== projectId));
      if (currentProject === projectId) {
        setCurrentProject(projects[0]?.id ?? null);
      }
    } catch (e: any) {
      setError(e.message ?? "Unable to delete project");
    } finally {
      setLoading(false);
    }
  }, [currentProject, projects]);

  const updateProject = useCallback(async (projectId: string, name: string) => {
    setLoading(true);
    setError(null);
    try {
      const updated = await apiUpdateProject(projectId,{ name});
      setProjects((prev) => prev.map((p) => (p.id === projectId ? updated : p)));
      return updated;
    } catch (e: any) {
      setError(e.message ?? "Unable to update project");
      throw e;
    } finally {
      setLoading(false);
    }
  }, []);

  // Lists
  const addList = useCallback(async (projectId: string, name: string) => {
    setLoading(true);
    setError(null);
    try {
      const newList = await apiCreateList(projectId, name);
      setLists((prev) => [...prev, newList]);
      setProjects((prev) =>
        prev.map((p) =>
          p.id === projectId
            ? { ...p, lists: [...(p.lists ?? []), newList] }
            : p
        )
      );
      return newList;
    } catch (e: any) {
      setError(e.message ?? "Unable to add list");
      throw e;
    } finally {
      setLoading(false);
    }
  }, []);

  const deleteList = useCallback(async (projectId: string, listId: string) => {
    setLoading(true);
    setError(null);
    try {
      await apiDeleteList(projectId, listId);
      setLists((prev) => prev.filter((l) => l.id !== listId));
      setProjects((prev) =>
        prev.map((p) =>
          p.id === projectId
            ? { ...p, lists: p.lists.filter((l) => l.id !== listId) }
            : p
        )
      );
    } catch (e: any) {
      setError(e.message ?? "Unable to delete list");
    } finally {
      setLoading(false);
    }
  }, []);

  const updateList = useCallback(async (projectId: string, listId: string, name: string) => {
    setLoading(true);
    setError(null);
    try {
      const updated = await apiUpdateList(projectId, listId, name);
      setLists((prev) => prev.map((l) => (l.id === listId ? updated : l)));
      setProjects(prev => {
        console.log("prev projects:", prev);
        prev.forEach(p => console.log(p.id, "lists:", p.lists));
        return prev.map((p) =>
          p.id === projectId
            ? { ...p, lists: (p.lists ?? []).map((l) => (l.id === listId ? updated : l)) }
            : p
        )
      });
      return updated;
    } catch (e: any) {
      setError(e.message ?? "Unable to update list");
      throw e;
    } finally {
      setLoading(false);
    }
  }, []);

  // Tasks
  const addTask = useCallback(async (
    projectId: string,
    listId: string,
    name: string,
    dueDate?: number,
    tags?: string[]
  ) => {
    setLoading(true);
    setError(null);
    try {
      const newTask = await apiCreateTask(projectId, listId, name, dueDate, tags);
      setTasks((prev) => [...prev, newTask]);
      setProjects((prev) =>
        prev.map((p) =>
          p.id === projectId
            ? {
                ...p,
                lists: (p.lists ?? []).map((l) =>
                  l.id === listId
                    ? { ...l, tasks: [...(l.tasks ?? []), newTask] }
                    : l
                ),
              }
            : p
        )
      );
      return newTask;
    } catch (e: any) {
      setError(e.message ?? "Unable to add task");
      throw e;
    } finally {
      setLoading(false);
    }
  }, []);

  // Remove a task
  const deleteTask = useCallback(
    async (projectId: string, listId: string, taskId: string) => {
      setLoading(true);
      setError(null);
      try {
        await apiDeleteTask(projectId, listId, taskId);
        // flat state
        setTasks(prev => prev.filter(t => t.id !== taskId));
        // nested in projects
        setProjects(prev =>
          prev.map(p =>
            p.id === projectId
              ? {
                  ...p,
                  lists: (p.lists ?? []).map(l =>
                    l.id === listId
                      ? { ...l, tasks: l.tasks.filter(t => t.id !== taskId) }
                      : l
                  ),
                }
              : p
          )
        );
      } catch (e: any) {
        setError(e.message ?? 'Unable to delete task');
      } finally {
        setLoading(false);
      }
    },
    []
  );

  // Update a task
  const updateTask = useCallback(
    async (
      projectId: string,
      listId: string,
      taskId: string,
      updates: Partial<Task>
    ) => {
      setLoading(true);
      setError(null);
      try {
        // strip nulls
        const payload: any = { ...updates };
        if (payload.dueDate === null) delete payload.dueDate;
        if (payload.completedAt === null) delete payload.completedAt;

        const updated = await apiUpdateTask(projectId, listId, taskId, payload);
        // flat state
        setTasks(prev => prev.map(t => (t.id === taskId ? updated : t)));
        // nested in projects
        setProjects(prev =>
          prev.map(p =>
            p.id === projectId
              ? {
                  ...p,
                  lists: (p.lists ?? []).map(l =>
                    l.id === listId
                      ? {
                          ...l,
                          tasks: (l.tasks ?? []).map(t => (t.id === taskId ? updated : t)),
                        }
                      : l
                  ),
                }
              : p
          )
        );
        return updated;
      } catch (e: any) {
        setError(e.message ?? 'Unable to update task');
        throw e;
      } finally {
        setLoading(false);
      }
    },
    []
  );

  // Toggle task completion
  const toggleTask = useCallback(
    async (projectId: string, listId: string, taskId: string) => {
      const task = tasks.find(t => t.id === taskId);
      if (!task) return;
      return updateTask(projectId, listId, taskId, {
        completedAt: task.completedAt ? null : Date.now(),
      });
    },
    [tasks, updateTask]
  );

  // Create a new subtask
  const addSubtask = useCallback(
    async (
      projectId: string,
      listId: string,
      taskId: string,
      name: string,
      dueDate?: number
    ) => {
      setLoading(true);
      setError(null);
      try {
        const newSub = await apiCreateSubtask(
          projectId,
          listId,
          taskId,
          name,
          dueDate
        );
        // flat state
        setSubtasks(prev => [...prev, newSub]);
        // nested in projects
        setProjects(prev =>
          prev.map(p =>
            p.id === projectId
              ? {
                  ...p,
                  lists: (p.lists ?? []).map(l =>
                    l.id === listId
                      ? {
                          ...l,
                          tasks: (l.tasks ?? []).map(t =>
                            t.id === taskId
                              ? { ...t, subtasks: [...(t.subtasks ?? []), newSub] }
                              : t
                          ),
                        }
                      : l
                  ),
                }
              : p
          )
        );
        return newSub;
      } catch (e: any) {
        setError(e.message ?? 'Unable to add subtask');
        throw e;
      } finally {
        setLoading(false);
      }
    },
    []
  );

  // Remove a subtask
  const deleteSubtask = useCallback(
    async (
      projectId: string,
      listId: string,
      taskId: string,
      subtaskId: string
    ) => {
      setLoading(true);
      setError(null);
      try {
        await apiDeleteSubtask(projectId, listId, taskId, subtaskId);
        // flat state
        setSubtasks(prev => prev.filter(s => s.id !== subtaskId));
        // nested in projects
        setProjects(prev =>
          prev.map(p =>
            p.id === projectId
              ? {
                  ...p,
                  lists: (p.lists ?? []).map(l =>
                    l.id === listId
                      ? {
                          ...l,
                          tasks: (l.tasks ?? []).map(t =>
                            t.id === taskId
                              ? {
                                  ...t,
                                  subtasks: t.subtasks.filter(s => s.id !== subtaskId),
                                }
                              : t
                          ),
                        }
                      : l
                  ),
                }
              : p
          )
        );
      } catch (e: any) {
        setError(e.message ?? 'Unable to delete subtask');
      } finally {
        setLoading(false);
      }
    },
    []
  );

  // Update a subtask
  const updateSubtask = useCallback(
    async (
      projectId: string,
      listId: string,
      taskId: string,
      subtaskId: string,
      updates: Partial<Subtask>
    ) => {
      setLoading(true);
      setError(null);
      try {
        const payload: any = { ...updates };
        if (payload.dueDate === null) delete payload.dueDate;
        if (payload.completedAt === null) delete payload.completedAt;

        const updated = await apiUpdateSubtask(
          projectId,
          listId,
          taskId,
          subtaskId,
          payload
        );
        // flat state
        setSubtasks(prev => prev.map(s => (s.id === subtaskId ? updated : s)));
        // nested in projects
        setProjects(prev =>
          prev.map(p =>
            p.id === projectId
              ? {
                  ...p,
                  lists: (p.lists ?? []).map(l =>
                    l.id === listId
                      ? {
                          ...l,
                          tasks: (l.tasks ?? []).map(t =>
                            t.id === taskId
                              ? {
                                  ...t,
                                  subtasks: (t.subtasks ?? []).map(s =>
                                    s.id === subtaskId ? updated : s
                                  ),
                                }
                              : t
                          ),
                        }
                      : l
                  ),
                }
              : p
          )
        );
        return updated;
      } catch (e: any) {
        setError(e.message ?? 'Unable to update subtask');
        throw e;
      } finally {
        setLoading(false);
      }
    },
    []
  );

  // Toggle subtask completion
  const toggleSubtask = useCallback(
    async (
      projectId: string,
      listId: string,
      taskId: string,
      subtaskId: string
    ) => {
      const sub = subtasks.find(s => s.id === subtaskId);
      if (!sub) return;
      return updateSubtask(projectId, listId, taskId, subtaskId, {
        completedAt: sub.completedAt ? null : Date.now(),
      });
    },
    [subtasks, updateSubtask]
  );


    return {
    projects,
    currentProject,
    setCurrentProject,
    lists,
    tasks,
    subtasks,
    loading,
    error,
    addProject,
    deleteProject,
    updateProject,
    addList,
    deleteList,
    updateList,
    addTask,
    deleteTask,
    updateTask,
    toggleTask,
    addSubtask,
    deleteSubtask,
    updateSubtask,
    toggleSubtask,
  };
}
