import { getAuth } from "firebase/auth";
import type { Project, ProjectSummary} from "@shared/models/ProjectModel";

// Base URL for your backend API
const API_URL = import.meta.env.VITE_API_URL;

// Retrieve the current user's Firebase ID token
export async function getIdToken(): Promise<string> {
  const user = getAuth().currentUser;
  if (!user) throw new Error('No current user');
  return user.getIdToken();
}

// Fetch all projects
export async function getAllProjects(): Promise<Project[]> {
  const token = await getIdToken();
  const res = await fetch(`${API_URL}/projects/all`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch projects: ${res.status} ${res.statusText}`);
  }

  const data = await res.json();
  return data.projects;
}

// Fetch a single project by ID
export async function getProject(id: string): Promise<Project> {
  const token = await getIdToken();
  const res = await fetch(`${API_URL}/projects/${id}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
  if (!res.ok) {
    throw new Error(`Failed to fetch project ${id}: ${res.status} ${res.statusText}`);
  }
  const data = await res.json();
  return data.project;
}

// Delete a project
export async function deleteProject(id: string): Promise<void> {
  const token = await getIdToken();
  const res = await fetch(`${API_URL}/projects/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw new Error(`Failed to delete project ${id}: ${res.status} ${res.statusText}`);
  }
}

// Create a new project
export async function createProject(name: string): Promise<Project> {
  const token = await getIdToken();
  const res = await fetch(`${API_URL}/projects`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ name }),
  });

  if (!res.ok) {
    throw new Error(`Failed to create project: ${res.status} ${res.statusText}`);
  }

  const data = await res.json();
  return data.project;
}

// Update an existing project
export async function updateProject(
  id: string,
  updates: Partial<Project>
): Promise<Project> {
  const token = await getIdToken();
  const res = await fetch(`${API_URL}/projects/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(updates),
  });

  if (!res.ok) {
    throw new Error(`Failed to update project ${id}: ${res.status} ${res.statusText}`);
  }

  const data = await res.json();
  return data.project;
}


export async function getProjectSummaries(): Promise<ProjectSummary[]> {
    const token = await getIdToken();
    console.log("API_URL:", API_URL);
    const res = await fetch(`${API_URL}/projects/summaries`, {
      headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    });
  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`Failed to fetch projects: ${res.status} ${res.statusText}\n${errText}`);
  }
  const data = await res.json();
  console.log(data);
  return data;
}

