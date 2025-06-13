import { getAuth } from "firebase/auth";

export type Project = {
    id: string,
    name: string, 
    description: string, 
    order : number,
    taskCount: number, 
    lists: string[]
}

export async function getIdToken() : Promise<string> {
    const user = getAuth().currentUser;
    if (!user) throw new Error('No current user');
    return user.getIdToken();
}

export async function getAllProjects(): Promise<Project[]> {
    const token = await getIdToken();
    const res = await fetch('/projects/all', {
        headers : {
            Authorization: `Bearer ${token}`,
        },
    });

    if(!res.ok){
        throw new Error(`Failed to fetch projects: ${res.statusText}`);
    }

    const data = await res.json();
    return data.projects;

}


export async function getProject(id: string): Promise<Project> {
    const token = await getIdToken();
    const res = await fetch(`/projects/${id}`, {
        headers: {
        Authorization: `Bearer ${token}`,
        },
    });
    if (!res.ok){
        throw new Error(`Failed to fetch project: ${res.statusText}`);
    }
    const data = await res.json();
    return data.project;
}

export async function deleteProject(id:string): Promise<void> {
    const token = await getIdToken();
    if (!token) {
        throw new Error('Not allowed')
    }
    const res = await fetch(`/projects/${id}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
    if (!res.ok) {
        throw new Error(`Failed to delete project: ${res.statusText}`);
    }

}

export async function createProject(name: string): Promise<Project> {
        const token = await getIdToken();
    if (!token) {
        throw new Error('Not allowed')
    }
    const res = await fetch(`/projects/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({name})
    })
        if (!res.ok) {
        throw new Error(`Failed to fetch project: ${res.statusText}`);
    }
      const data = await res.json();
  return data.project;
}


export async function updateProject(id: string, updates: Partial<Project>): Promise<Project> {
    const token = await getIdToken();
    if (!token) {
        throw new Error('Not allowed')
    }
    const res = await fetch(`/projects/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(updates)
    })
        if (!res.ok) {
        throw new Error(`Failed to fetch project: ${res.statusText}`);
    }
      const data = await res.json();
  return data.project;
}
