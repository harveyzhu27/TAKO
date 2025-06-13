import { getIdToken } from "./projects";

export type Task = {
  id: string,
  name: string,
  projectId: string,
  listId: string,
  dueDate: number | null,
  createdAt: number,
  completedAt: number | null,
  tags: string[],
  order: number,
  subtaskCount: number,
};


export async function getAllTasks(projectId: string, listId: string): Promise<Task[]> {
  const token = await getIdToken();
  const res = await fetch(`/projects/${projectId}/lists/${listId}/tasks`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error(`Failed to fetch tasks: ${res.statusText}`);
  const data = await res.json();
  return data.tasks;
}

export async function getTask(projectId: string, listId: string, taskId: string): Promise<Task> {
  const token = await getIdToken();
  const res = await fetch(`/projects/${projectId}/lists/${listId}/tasks/${taskId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error(`Failed to fetch task: ${res.statusText}`);
  const data = await res.json();
  return data.task;
}

export async function createTask(projectId: string, listId: string, name: string, dueDate?: number): Promise<Task> {
  const token = await getIdToken();
  const res = await fetch(`/projects/${projectId}/lists/${listId}/tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ name, dueDate }),
  });
  if (!res.ok) throw new Error(`Failed to create task: ${res.statusText}`);
  const data = await res.json();
  return data.task;
}

export async function editTask(projectId: string, listId: string, taskId: string, updates: Partial<Task>): Promise<Task> {
  const token = await getIdToken();
  const res = await fetch(`/projects/${projectId}/lists/${listId}/tasks/${taskId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(updates),
  });
  if (!res.ok) throw new Error(`Failed to update task: ${res.statusText}`);
  const data = await res.json();
  return data.task;
}

export async function deleteTask(projectId: string, listId: string, taskId: string): Promise<void> {
  const token = await getIdToken();
  const res = await fetch(`/projects/${projectId}/lists/${listId}/tasks/${taskId}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error(`Failed to delete task: ${res.statusText}`);
}