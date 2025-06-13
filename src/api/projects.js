import { getAuth } from 'firebase/auth';

const BASE = import.meta.env.VITE_BACKEND_URL;

async function fetchWithAuth(path, options = {}) {
  const user = getAuth().currentUser;
  const token = user && await user.getIdToken();
  const res = await fetch(`${BASE}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
      Authorization: token ? `Bearer ${token}` : ''
    }
  });
  if (!res.ok) throw new Error((await res.json()).error || res.statusText);
  return res.json();
}

export function getProjects() {
  return fetchWithAuth('/projects/all').then(data => data.projects);
}

export function createProject(name) {
  return fetchWithAuth('/projects/create', {
    method: 'POST',
    body: JSON.stringify({ name })
  }).then(data => data.project);
}
