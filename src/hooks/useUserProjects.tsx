import { useState, useEffect, useCallback } from "react";
import { useAuthContext } from "./useAuth.jsx";
import type { Project } from "@shared/models/ProjectModel";

type ProjectMove = "up" | "down";
type ProjectUpdate = Partial<Project> & { move?: ProjectMove };
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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Reset all state
  const resetAll = useCallback(() => {
    setProjects([]);
    setCurrentProject(null);
    setLists([]);
    setError(null);
    setLoading(false);
  }, []);


useEffect(() => {
  console.log(
    "📋 Current projects (full objects, ordered):",
    projects.slice().sort((a, b) => a.order - b.order)
  );
}, [projects]);

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

  // When project changes: fetch lists, tasks, and subtasks
  useEffect(() => {
    if (!currentProject) {
      setLists([]);
      return;
    }
    (async () => {
      setLoading(true);
      setError(null);
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
        setLists(listsWithTasks);
      } catch (err: any) {
        setError(err.message ?? "Failed to load lists, tasks, or subtasks");
      } finally {
        setLoading(false);
      }
    })();
  }, [currentProject]);

  // Projects CRUD
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

  const deleteProject = useCallback(
    async (projectId: string) => {
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
    },
    [currentProject, projects]
  );

  const updateProject = useCallback(
    async (projectId: string, updates: ProjectUpdate) => {
      setLoading(true);
      setError(null);
      try {
        const updated = await apiUpdateProject(projectId, updates);

        if (updates.move) {
          // fetch full list so neighbor order comes back too
          const all = await apiGetAllProjects();
          setProjects(all);
        } else {
          setProjects(prev =>
            prev
              .map(p => (p.id === updated.id ? updated : p))
              .sort((a, b) => a.order - b.order)
          );
        }
        return updated;
      } catch (e: any) {
        setError(e.message ?? "Unable to update project");
        throw e;
      } finally {
        setLoading(false);
      }
    },
    []
  );


  // Lists CRUD
  const addList = useCallback(
    async (projectId: string, name: string) => {
      setLoading(true);
      setError(null);
      try {
        const newList = await apiCreateList(projectId, name);
        setLists((prev) => [...prev, { ...newList, tasks: [] }]);
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
    },
    []
  );

  const deleteList = useCallback(
    async (projectId: string, listId: string) => {
      setLoading(true);
      setError(null);
      try {
        await apiDeleteList(projectId, listId);
        setLists((prev) => prev.filter((l) => l.id !== listId));
        setProjects((prev) =>
          prev.map((p) =>
            p.id === projectId
              ? { ...p, lists: (p.lists ?? []).filter((l) => l.id !== listId) }
              : p
          )
        );
      } catch (e: any) {
        setError(e.message ?? "Unable to delete list");
      } finally {
        setLoading(false);
      }
    },
    []
  );

  const updateList = useCallback(
    async (projectId: string, listId: string, name: string) => {
      setLoading(true);
      setError(null);
      try {
        const updated = await apiUpdateList(projectId, listId, name);
        setLists((prev) => prev.map((l) => (l.id === listId ? { ...updated, tasks: l.tasks } : l)));
        setProjects((prev) =>
          prev.map((p) =>
            p.id === projectId
              ? {
                ...p,
                lists: (p.lists ?? []).map((l) =>
                  l.id === listId ? updated : l
                ),
              }
              : p
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
    []
  );

  const moveList = useCallback(
  async (projectId: string, listId: string, direction: "left" | "right") => {
    setLoading(true);
    setError(null);
    try {
      const idx = lists.findIndex((l) => l.id === listId);
      if (idx === -1) return;
      const swapIdx = direction === "left" ? idx - 1 : idx + 1;
      if (swapIdx < 0 || swapIdx >= lists.length) return;
      const listA = lists[idx];
      const listB = lists[swapIdx];
      await apiUpdateList(projectId, listA.id, undefined, listB.order);
      await apiUpdateList(projectId, listB.id, undefined, listA.order);
      const updatedLists = await apiGetLists(projectId);
      setLists(updatedLists.map(l => ({
        ...l,
        tasks: lists.find(orig => orig.id === l.id)?.tasks || []
      })));
      setProjects((prev) =>
        prev.map((p) =>
          p.id === projectId
            ? {
                ...p,
                lists: updatedLists,
              }
            : p
        )
      );
    } catch (e: any) {
      setError(e.message ?? "Unable to move list");
    } finally {
      setLoading(false);
    }
  },
  [lists]
);


  // Tasks CRUD (nested in lists)
  const addTask = useCallback(
    async (projectId: string, listId: string, name: string, dueDate?: number) => {
      setLoading(true);
      setError(null);
      try {
        const newTask = await apiCreateTask(projectId, listId, name, dueDate);  // updated
        setLists((prev) =>
          prev.map((l) =>
            l.id === listId
              ? { ...l, tasks: [...(l.tasks ?? []), { ...newTask, subtasks: [] }] }
              : l
          )
        );
        return newTask;
      } catch (e: any) {
        setError(e.message ?? "Unable to add task");
        throw e;
      } finally {
        setLoading(false);
      }
    },
    []
  );


  const deleteTask = useCallback(
    async (projectId: string, listId: string, taskId: string) => {
      setLoading(true);
      setError(null);
      try {
        await apiDeleteTask(projectId, listId, taskId);
        setLists((prev) =>
          prev.map((l) =>
            l.id === listId
              ? { ...l, tasks: (l.tasks ?? []).filter((t) => t.id !== taskId) }
              : l
          )
        );
      } catch (e: any) {
        setError(e.message ?? "Unable to delete task");
      } finally {
        setLoading(false);
      }
    },
    []
  );

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
        const payload: any = { ...updates };
        if (payload.dueDate === null) delete payload.dueDate;
        if (payload.completedAt === null) delete payload.completedAt;

        const updated = await apiUpdateTask(projectId, listId, taskId, payload);
        setLists((prev) =>
          prev.map((l) =>
            l.id === listId
              ? {
                ...l,
                tasks: (l.tasks ?? []).map((t) =>
                  t.id === taskId
                    ? { ...updated, subtasks: t.subtasks }
                    : t
                ),
              }
              : l
          )
        );
        return updated;
      } catch (e: any) {
        setError(e.message ?? "Unable to update task");
        throw e;
      } finally {
        setLoading(false);
      }
    },
    []
  );

  // Subtasks CRUD (nested in tasks)
  const addSubtask = useCallback(
    async (projectId: string, listId: string, taskId: string, name: string) => {
      setLoading(true);
      setError(null);
      try {
        const newSub = await apiCreateSubtask(projectId, listId, taskId, name);
        setLists((prev) =>
          prev.map((l) =>
            l.id === listId
              ? {
                ...l,
                tasks: (l.tasks ?? []).map((t) =>
                  t.id === taskId
                    ? { ...t, subtasks: [...(t.subtasks ?? []), newSub] }
                    : t
                ),
              }
              : l
          )
        );
        return newSub;
      } catch (e: any) {
        setError(e.message ?? "Unable to add subtask");
        throw e;
      } finally {
        setLoading(false);
      }
    },
    []
  );

  const deleteSubtask = useCallback(
    async (projectId: string, listId: string, taskId: string, subtaskId: string) => {
      setLoading(true);
      setError(null);
      try {
        await apiDeleteSubtask(projectId, listId, taskId, subtaskId);
        setLists((prev) =>
          prev.map((l) =>
            l.id === listId
              ? {
                ...l,
                tasks: (l.tasks ?? []).map((t) =>
                  t.id === taskId
                    ? {
                      ...t,
                      subtasks: (t.subtasks ?? []).filter((s) => s.id !== subtaskId),
                    }
                    : t
                ),
              }
              : l
          )
        );
      } catch (e: any) {
        setError(e.message ?? "Unable to delete subtask");
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

        setLists(prev =>
          prev.map(l =>
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
          )
        );

        return updated;
      } catch (e: any) {
        setError(e.message ?? "Unable to update subtask");
        throw e;
      } finally {
        setLoading(false);
      }
    },
    []
  );

  const toggleSubtask = useCallback(
    async (
      projectId: string,
      listId: string,
      taskId: string,
      subtaskId: string
    ) => {
      const list = lists.find(l => l.id === listId);
      const task = list?.tasks.find(t => t.id === taskId);
      const sub = task?.subtasks.find(s => s.id === subtaskId);
      if (!sub) return;

      return updateSubtask(
        projectId,
        listId,
        taskId,
        subtaskId,
        { completedAt: sub.completedAt ? null : Date.now() }
      );
    },
    [lists, updateSubtask]
  );

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
