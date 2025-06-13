import { useState, useEffect, useCallback } from "react";
import { useAuthContext } from "./useAuth";
import {
  getAllProjects,
  getProject,
  createProject as apiCreateProject,
  deleteProject as apiDeleteProject,
  updateProject,
} from "../api/projects";
import {
  getAllLists,
  createList as apiCreateList,
  deleteList as apiDeleteList,
  editList as apiEditList,
} from "../api/lists";
import {
  getAllTasks,
  createTask as apiCreateTask,
  deleteTask as apiDeleteTask,
  editTask as apiEditTask,
  checkTask as apiCheckTask,
} from "../api/tasks";
import {
  getAllSubtasks,
  createSubtask as apiCreateSubtask,
  deleteSubtask as apiDeleteSubtask,
  editSubtask as apiEditSubtask,
  checkSubtask as apiCheckSubtask,
} from "../api/subtasks";

export default function useUserProjects() {
  const { currentUser } = useAuthContext();
  const [projects, setProjects] = useState([]);
  const [currentProject, setCurrentProject] = useState<string | null>(null);
  const [lists, setLists] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [subtasks, setSubtasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!currentUser) return;
    setLoading(true);
    getAllProjects()
      .then((projects) => {
        setProjects(projects);
        const firstProjectId = projects[0]?.id || null;
        setCurrentProject(firstProjectId);
        if (firstProjectId) {
          loadLists(firstProjectId);
        }
      })
      .finally(() => setLoading(false));
  }, [currentUser]);

  const loadLists = useCallback(async (projectId: string) => {
    const lists = await getAllLists(projectId);
    setLists(lists);
    if (lists.length > 0) {
      loadTasks(projectId, lists[0].id);
    }
  }, []);

  const loadTasks = useCallback(async (projectId: string, listId: string) => {
    const tasks = await getAllTasks(projectId, listId);
    setTasks(tasks);
    if (tasks.length > 0) {
      loadSubtasks(projectId, listId, tasks[0].id);
    }
  }, []);

  const loadSubtasks = useCallback(async (projectId: string, listId: string, taskId: string) => {
    const subtasks = await getAllSubtasks(projectId, listId, taskId);
    setSubtasks(subtasks);
  }, []);

  const addProject = useCallback(async (name: string) => {
    const newProject = await apiCreateProject(name);
    setProjects((prev) => [...prev, newProject]);
    setCurrentProject(newProject.id);
    loadLists(newProject.id);
  }, [loadLists]);

  const deleteProject = useCallback(async (id: string) => {
    await apiDeleteProject(id);
    setProjects((prev) => prev.filter((p) => p.id !== id));
    setCurrentProject((prev) => {
      if (prev === id) {
        return projects.length > 0 ? projects[0].id : null;
      }
      return prev;
    });
  }, [projects]);

  const addList = useCallback(async (projectId: string, name: string) => {
    const newList = await apiCreateList(projectId, name);
    setLists((prev) => [...prev, newList]);
  }, []);

  const removeList = useCallback(async (projectId: string, listId: string) => {
    await apiDeleteList(projectId, listId);
    setLists((prev) => prev.filter((l) => l.id !== listId));
  }, []);

  const updateList = useCallback(async (projectId: string, listId: string, updates) => {
    const updated = await apiEditList(projectId, listId, updates);
    setLists((prev) => prev.map((l) => (l.id === listId ? updated : l)));
  }, []);

  const addTask = useCallback(async (projectId: string, listId: string, task) => {
    const newTask = await apiCreateTask(projectId, listId, task);
    setTasks((prev) => [...prev, newTask]);
  }, []);

  const removeTask = useCallback(async (projectId: string, listId: string, taskId: string) => {
    await apiDeleteTask(projectId, listId, taskId);
    setTasks((prev) => prev.filter((t) => t.id !== taskId));
  }, []);

  const updateTask = useCallback(async (projectId: string, listId: string, taskId: string, updates) => {
    const updated = await apiEditTask(projectId, listId, taskId, updates);
    setTasks((prev) => prev.map((t) => (t.id === taskId ? updated : t)));
  }, []);

  const toggleTask = useCallback(async (projectId: string, listId: string, taskId: string) => {
    const updated = await apiCheckTask(projectId, listId, taskId);
    setTasks((prev) => prev.map((t) => (t.id === taskId ? updated : t)));
  }, []);

  const addSubtask = useCallback(async (projectId: string, listId: string, taskId: string, subtask) => {
    const newSubtask = await apiCreateSubtask(projectId, listId, taskId, subtask);
    setSubtasks((prev) => [...prev, newSubtask]);
  }, []);

  const removeSubtask = useCallback(async (projectId: string, listId: string, taskId: string, subtaskId: string) => {
    await apiDeleteSubtask(projectId, listId, taskId, subtaskId);
    setSubtasks((prev) => prev.filter((s) => s.id !== subtaskId));
  }, []);

  const updateSubtask = useCallback(async (projectId: string, listId: string, taskId: string, subtaskId: string, updates) => {
    const updated = await apiEditSubtask(projectId, listId, taskId, subtaskId, updates);
    setSubtasks((prev) => prev.map((s) => (s.id === subtaskId ? updated : s)));
  }, []);

  const toggleSubtask = useCallback(async (projectId: string, listId: string, taskId: string, subtaskId: string) => {
    const updated = await apiCheckSubtask(projectId, listId, taskId, subtaskId);
    setSubtasks((prev) => prev.map((s) => (s.id === subtaskId ? updated : s)));
  }, []);

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
