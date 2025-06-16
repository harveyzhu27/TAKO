import { useState, useEffect, useCallback } from "react";
import { getAuth } from 'firebase/auth';
import { useAuthContext } from "./useAuth";
import {
  getAllProjects,
  createProject as apiCreateProject,
  deleteProject as apiDeleteProject,
  updateProject as apiUpdateProject,
  Project,
} from "../api/projects";
import {
  getLists as getAllLists,
  createList as apiCreateList,
  deleteList as apiDeleteList,
  updateList as apiUpdateList,
  List,
} from "../api/lists";
import {
  getTasks as getAllTasks,
  createTask as apiCreateTask,
  deleteTask as apiDeleteTask,
  updateTask as apiUpdateTask,
  Task,
} from "../api/tasks";
import {
  getSubtasks as getAllSubtasks,
  createSubtask as apiCreateSubtask,
  deleteSubtask as apiDeleteSubtask,
  updateSubtask as apiUpdateSubtask,
  Subtask,
} from "../api/subtasks";

export default function useUserProjects() {
  const { currentUser } = useAuthContext();
  const [projects, setProjects] = useState<Project[]>([]);
  const [currentProject, setCurrentProject] = useState<string | null>(null);
  const [lists, setLists] = useState<List[]>([]);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [subtasks, setSubtasks] = useState<Subtask[]>([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
  const auth = getAuth();
  const user = auth.currentUser;

  if (user) {
    user.getIdToken().then((token) => {
      console.log("🔥 Firebase token:", token);
    });
  } else {
    console.log("⚠️ No user signed in");
  }
}, []);

  // Load all projects on auth change
  useEffect(() => {
    if (!currentUser) return;
    setLoading(true);
    getAllProjects()
      .then((projs) => {
        setProjects(projs);
        const firstId = projs[0]?.id || null;
        setCurrentProject(firstId);
        if (firstId) loadLists(firstId);
      })
      .finally(() => setLoading(false));
  }, [currentUser]);

  // Load lists for a project
  const loadLists = useCallback(async (projectId: string) => {
    const ls = await getAllLists(projectId);
    setLists(ls);
    if (ls.length > 0) loadTasks(projectId, ls[0].id);
  }, []);

  // Load tasks for a list
  const loadTasks = useCallback(async (projectId: string, listId: string) => {
    const ts = await getAllTasks(projectId, listId);
    setTasks(ts);
    if (ts.length > 0) loadSubtasks(projectId, listId, ts[0].id);
  }, []);

  // Load subtasks for a task
  const loadSubtasks = useCallback(
    async (projectId: string, listId: string, taskId: string) => {
      const sts = await getAllSubtasks(projectId, listId, taskId);
      setSubtasks(sts);
    },
    []
  );

  // Create a new project
  const addProject = useCallback(
    async (name: string) => {
      const newProject = await apiCreateProject(name);
      setProjects((prev) => [...prev, newProject]);
      setCurrentProject(newProject.id);
      loadLists(newProject.id);
    },
    [loadLists]
  );

  // Delete a project
  const deleteProject = useCallback(
    async (id: string) => {
      await apiDeleteProject(id);
      setProjects((prev) => prev.filter((p) => p.id !== id));
      setCurrentProject((prev) => (prev === id ? projects[0]?.id || null : prev));
    },
    [projects]
  );

  // Create a new list
  const addList = useCallback(
    async (projectId: string, name: string) => {
      const newList = await apiCreateList(projectId, name);
      setLists((prev) => [...prev, newList]);
    },
    []
  );

  // Remove a list
  const removeList = useCallback(
    async (projectId: string, listId: string) => {
      await apiDeleteList(projectId, listId);
      setLists((prev) => prev.filter((l) => l.id !== listId));
    },
    []
  );

  // Update a list's name
  const updateList = useCallback(
    async (projectId: string, listId: string, name: string) => {
      const updated = await apiUpdateList(projectId, listId, name);
      setLists((prev) => prev.map((l) => (l.id === listId ? updated : l)));
    },
    []
  );

  // Create a new task
  const addTask = useCallback(
    async (
      projectId: string,
      listId: string,
      name: string,
      dueDate?: number,
      tags?: string[]
    ) => {
      const newTask = await apiCreateTask(projectId, listId, name, dueDate, tags);
      setTasks((prev) => [...prev, newTask]);
    },
    []
  );

  // Remove a task
  const removeTask = useCallback(
    async (projectId: string, listId: string, taskId: string) => {
      await apiDeleteTask(projectId, listId, taskId);
      setTasks((prev) => prev.filter((t) => t.id !== taskId));
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
      // Prepare payload: strip nulls to satisfy API type
      const payload: any = { ...updates };
      if (payload.dueDate === null) delete payload.dueDate;
      if (payload.completedAt === null) delete payload.completedAt;
      const updated = await apiUpdateTask(
        projectId,
        listId,
        taskId,
        payload
      );
      setTasks((prev) => prev.map((t) => (t.id === taskId ? updated : t)));
    },
    []
  );

  // Toggle task completion
  const toggleTask = useCallback(
    async (projectId: string, listId: string, taskId: string) => {
      const task = tasks.find((t) => t.id === taskId);
      if (!task) return;
      // Cast and strip null for uncheck
      const payload: any = { completedAt: task.completedAt ? null : Date.now() };
      if (payload.completedAt === null) delete payload.completedAt;
      const updated = await apiUpdateTask(
        projectId,
        listId,
        taskId,
        payload
      );
      setTasks((prev) => prev.map((t) => (t.id === taskId ? updated : t)));
    },
    [tasks]
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
      const newSub = await apiCreateSubtask(projectId, listId, taskId, name, dueDate);
      setSubtasks((prev) => [...prev, newSub]);
    },
    []
  );

  // Remove a subtask
  const removeSubtask = useCallback(
    async (
      projectId: string,
      listId: string,
      taskId: string,
      subtaskId: string
    ) => {
      await apiDeleteSubtask(projectId, listId, taskId, subtaskId);
      setSubtasks((prev) => prev.filter((s) => s.id !== subtaskId));
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
      // Strip nulls for API
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
      setSubtasks((prev) => prev.map((s) => (s.id === subtaskId ? updated : s)));
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
      const sub = subtasks.find((s) => s.id === subtaskId);
      if (!sub) return;
      const payload: any = { completedAt: sub.completedAt ? null : Date.now() };
      if (payload.completedAt === null) delete payload.completedAt;
      const updated = await apiUpdateSubtask(
        projectId,
        listId,
        taskId,
        subtaskId,
        payload
      );
      setSubtasks((prev) => prev.map((s) => (s.id === subtaskId ? updated : s)));
    },
    [subtasks]
  );

  return {
    projects,
    currentProject,
    setCurrentProject,
    addProject,
    deleteProject,
    lists,
    addList,
    removeList,
    updateList,
    tasks,
    addTask,
    removeTask,
    updateTask,
    toggleTask,
    subtasks,
    addSubtask,
    removeSubtask,
    updateSubtask,
    toggleSubtask,
    loading,
  };
}
