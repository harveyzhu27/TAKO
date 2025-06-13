import { getIdToken } from "./projects";

export type Subtask = {
  id: string,
  name: string,
  dueDate: number | null,
  createdAt: number,
  completedAt: number | null,
  order?: number,
};

export async function getAllSubtasks(projectId: string, listId: string, taskId: string): Promise<Subtask[]> {
  const token = await getIdToken();
  const res = await fetch(`/projects/${projectId}/lists/${listId}/tasks/${taskId}/subtasks`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error(`Failed to fetch subtasks: ${res.statusText}`);
  const data = await res.json();
  return data.subtasks;
}

export async function getSubtask(projectId: string, listId: string, taskId: string, subtaskId: string): Promise<Subtask> {
  const token = await getIdToken();
  const res = await fetch(`/projects/${projectId}/lists/${listId}/tasks/${taskId}/subtasks/${subtaskId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error(`Failed to fetch subtask: ${res.statusText}`);
  const data = await res.json();
  return data.subtask;
}

export async function createSubtask(projectId: string, listId: string, taskId: string, name: string, dueDate?: number): Promise<Subtask> {
  const token = await getIdToken();
  const res = await fetch(`/projects/${projectId}/lists/${listId}/tasks/${taskId}/subtasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ name, dueDate }),
  });
  if (!res.ok) throw new Error(`Failed to create subtask: ${res.statusText}`);
  const data = await res.json();
  return data.subtask;
}

export async function editSubtask(projectId: string, listId: string, taskId: string, subtaskId: string, updates: Partial<Subtask>): Promise<Subtask> {
  const token = await getIdToken();
  const res = await fetch(`/projects/${projectId}/lists/${listId}/tasks/${taskId}/subtasks/${subtaskId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(updates),
  });
  if (!res.ok) throw new Error(`Failed to update subtask: ${res.statusText}`);
  const data = await res.json();
  return data.subtask;
}

export async function deleteSubtask(projectId: string, listId: string, taskId: string, subtaskId: string): Promise<void> {
  const token = await getIdToken();
  const res = await fetch(`/projects/${projectId}/lists/${listId}/tasks/${taskId}/subtasks/${subtaskId}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error(`Failed to delete subtask: ${res.statusText}`);
}
