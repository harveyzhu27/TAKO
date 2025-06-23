// src/api/tasks.ts
import { getAuth } from "firebase/auth";

import type { Task, TaskUpdate } from "@shared/models/TaskModel";

const API_URL = import.meta.env.VITE_API_URL;

export async function getIdToken(): Promise<string> {
  const user = getAuth().currentUser;
  if (!user) throw new Error("No current user");
  return user.getIdToken();
}

// Fetch all tasks in a list
export async function getTasks(projectId: string, listId: string): Promise<Task[]> {
  const token = await getIdToken();
  const res = await fetch(`${API_URL}/projects/${projectId}/lists/${listId}/tasks`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error(`Failed to fetch tasks: ${res.status} ${res.statusText}`);
  const data = await res.json();
  return data.tasks;
}

// Fetch a single task
export async function getTask(
  projectId: string,
  listId: string,
  taskId: string
): Promise<Task> {
  const token = await getIdToken();
  const res = await fetch(
    `${API_URL}/projects/${projectId}/lists/${listId}/tasks/${taskId}`,
    { headers: { Authorization: `Bearer ${token}` } }
  );
  if (!res.ok) throw new Error(`Failed to fetch task: ${res.status} ${res.statusText}`);
  const data = await res.json();
  return data.task;
}

// Create a new task
export async function createTask(
  projectId: string,
  listId: string,
  name: string,
  dueDate?: number,
  // tags?: string[]
): Promise<Task> {
  const token = await getIdToken();
  const res = await fetch(
    `${API_URL}/projects/${projectId}/lists/${listId}/tasks`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      // body: JSON.stringify({ name, dueDate, tags }),
      body: JSON.stringify({ name, dueDate}),

    }
  );
  const data = await res.json();
  if (!res.ok) {
    console.error('server error payload:', data);
    throw new Error(data.error || `Failed to create task: ${res.status}`);
  }
  return data.task;
}

// Update a task
export async function updateTask(
  projectId: string,
  listId: string,
  taskId: string,
  updates: TaskUpdate
): Promise<Task> {
  const token = await getIdToken();
  const res = await fetch(
    `${API_URL}/projects/${projectId}/lists/${listId}/tasks/${taskId}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(updates),
    }
  );
  if (!res.ok) throw new Error(`Failed to update task: ${res.status} ${res.statusText}`);
  const data = await res.json();
  return data.task;
}

// Delete a task
export async function deleteTask(
  projectId: string,
  listId: string,
  taskId: string
): Promise<Task> {
  const token = await getIdToken();
  const res = await fetch(
    `${API_URL}/projects/${projectId}/lists/${listId}/tasks/${taskId}`,
    {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  if (!res.ok) throw new Error(`Failed to delete task: ${res.status} ${res.statusText}`);
  const data = await res.json();
  return data.task;
}