// src/api/subtasks.ts
import { getAuth } from "firebase/auth";

import type { Subtask, SubtaskUpdate } from "@shared/models/SubtaskModel";

const API_URL = import.meta.env.VITE_API_URL;


export async function getIdToken(): Promise<string> {
  const user = getAuth().currentUser;
  if (!user) throw new Error("No current user");
  return user.getIdToken();
}

// Fetch all subtasks under a task
export async function getSubtasks(
  projectId: string,
  listId: string,
  taskId: string
): Promise<Subtask[]> {
  const token = await getIdToken();
  const res = await fetch(
    `${API_URL}/projects/${projectId}/lists/${listId}/tasks/${taskId}/subtasks`,
    { headers: { Authorization: `Bearer ${token}` } }
  );
  if (!res.ok) throw new Error(`Failed to fetch subtasks: ${res.status} ${res.statusText}`);
  const data = await res.json();
  return data.subtasks;
}

// Fetch a single subtask
export async function getSubtask(
  projectId: string,
  listId: string,
  taskId: string,
  subtaskId: string
): Promise<Subtask> {
  const token = await getIdToken();
  const res = await fetch(
    `${API_URL}/projects/${projectId}/lists/${listId}/tasks/${taskId}/subtasks/${subtaskId}`,
    { headers: { Authorization: `Bearer ${token}` } }
  );
  if (!res.ok) throw new Error(`Failed to fetch subtask: ${res.status} ${res.statusText}`);
  const data = await res.json();
  return data.subtask;
}

// Create a new subtask
export async function createSubtask(
  projectId: string,
  listId: string,
  taskId: string,
  name: string,
  dueDate?: number
): Promise<Subtask> {
  const token = await getIdToken();
  const res = await fetch(
    `${API_URL}/projects/${projectId}/lists/${listId}/tasks/${taskId}/subtasks`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ name, dueDate }),
    }
  );
  if (!res.ok) throw new Error(`Failed to create subtask: ${res.status} ${res.statusText}`);
  const data = await res.json();
  return data.subtask;
}

// Update a subtask
export async function updateSubtask(
  projectId: string,
  listId: string,
  taskId: string,
  subtaskId: string,
  updates: SubtaskUpdate
): Promise<Subtask> {
  const token = await getIdToken();
  const res = await fetch(
    `${API_URL}/projects/${projectId}/lists/${listId}/tasks/${taskId}/subtasks/${subtaskId}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(updates),
    }
  );
  if (!res.ok) throw new Error(`Failed to update subtask: ${res.status} ${res.statusText}`);
  const data = await res.json();
  return data.subtask;
}

// Delete a subtask
export async function deleteSubtask(
  projectId: string,
  listId: string,
  taskId: string,
  subtaskId: string
): Promise<Subtask> {
  const token = await getIdToken();
  const res = await fetch(
    `${API_URL}/projects/${projectId}/lists/${listId}/tasks/${taskId}/subtasks/${subtaskId}`,
    {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  if (!res.ok) throw new Error(`Failed to delete subtask: ${res.status} ${res.statusText}`);
  const data = await res.json();
  return data.subtask;
}
