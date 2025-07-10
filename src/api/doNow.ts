// src/api/doNow.ts
import { getAuth } from "firebase/auth";
import type { Task } from "@shared/models/TaskModel";

const API_URL = import.meta.env.VITE_API_URL;

export async function getIdToken(): Promise<string> {
  const user = getAuth().currentUser;
  if (!user) throw new Error("No current user");
  return user.getIdToken();
}

// Fetch all Do Now tasks
export async function getDoNowTasks(): Promise<Task[]> {
  const token = await getIdToken();
  const res = await fetch(`${API_URL}/doNow`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error(`Failed to fetch Do Now tasks: ${res.status} ${res.statusText}`);
  const data = await res.json();
  return data.tasks;
}

// Create a new Do Now task
export async function createDoNowTask(
  projectId: string,
  taskId: string,
  name: string,
  dueDate?: number,
): Promise<Task> {
  const token = await getIdToken();
  const res = await fetch(`${API_URL}/doNow`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ projectId, taskId, name, dueDate }),
  });
  const data = await res.json();
  if (!res.ok) {
    console.error('server error payload:', data);
    throw new Error(data.error || `Failed to create Do Now task: ${res.status}`);
  }
  return data.task;
}

// Update a Do Now task
export async function updateDoNowTask(
  taskId: string,
  updates: Partial<Task>
): Promise<void> {
  const token = await getIdToken();
  const res = await fetch(`${API_URL}/doNow/${taskId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(updates),
  });
  if (!res.ok) {
    const data = await res.json();
    throw new Error(data.error || `Failed to update Do Now task: ${res.status}`);
  }
}

// Delete a Do Now task
export async function deleteDoNowTask(taskId: string): Promise<void> {
  const token = await getIdToken();
  const res = await fetch(`${API_URL}/doNow/${taskId}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) {
    const data = await res.json();
    throw new Error(data.error || `Failed to delete Do Now task: ${res.status}`);
  }
} 