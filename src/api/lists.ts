// src/api/lists.ts
import { getAuth } from "firebase/auth";

import type { List } from "@shared/models/ListModel";

// Base URL for your backend API
const API_URL = import.meta.env.VITE_API_URL;

export async function getIdToken(): Promise<string> {
  const user = getAuth().currentUser;
  if (!user) throw new Error("No current user");
  return user.getIdToken();
}

// Fetch all lists for a given project
export async function getLists(projectId: string): Promise<List[]> {
  const token = await getIdToken();
  const res = await fetch(`${API_URL}/projects/${projectId}/lists`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error(`Failed to fetch lists: ${res.status} ${res.statusText}`);
  const data = await res.json();
  return data.lists;
}

// Fetch a single list
export async function getList(projectId: string, listId: string): Promise<List> {
  const token = await getIdToken();
  const res = await fetch(`${API_URL}/projects/${projectId}/lists/${listId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error(`Failed to fetch list: ${res.status} ${res.statusText}`);
  const data = await res.json();
  return data.list;
}

// Create a new list
export async function createList(projectId: string, name: string): Promise<List> {
  const token = await getIdToken();
  const res = await fetch(`${API_URL}/projects/${projectId}/lists`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ name }),
  });
  if (!res.ok) throw new Error(`Failed to create list: ${res.status} ${res.statusText}`);
  const data = await res.json();
  return data.list;
}

// Rename a list
export async function updateList(projectId: string, listId: string, name: string): Promise<List> {
  const token = await getIdToken();
  const res = await fetch(`${API_URL}/projects/${projectId}/lists/${listId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ name }),
  });
  if (!res.ok) throw new Error(`Failed to update list: ${res.status} ${res.statusText}`);
  const data = await res.json();
  return data.list;
}

// Delete a list
export async function deleteList(projectId: string, listId: string): Promise<List> {
  const token = await getIdToken();
  const res = await fetch(`${API_URL}/projects/${projectId}/lists/${listId}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error(`Failed to delete list: ${res.status} ${res.statusText}`);
  const data = await res.json();
  return data.list;
}
