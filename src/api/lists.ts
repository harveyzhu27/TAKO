import { getIdToken } from "./projects";

export type List = {
    id: string,
    projectId: string,
    name: string,
    tasksId: string[],
    order: number,
    isUniversal: boolean
}

export async function getAllLists(projectId: string): Promise<List[]> {
    const token = await getIdToken();
    const res = await fetch(`/projects/${projectId}/lists`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
    if (!res.ok) {
        throw new Error(`Failed to get lists: ${res.statusText}`);
    }
    const data = await res.json();
    return data.lists;
}
export async function getList(projectId: string, listId: string): Promise<List> {
    const token = await getIdToken();
    const res = await fetch(`/projects/${projectId}/lists/${listId}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
    if (!res.ok) {
        throw new Error(`Failed to get list: ${res.statusText}`);
    }
    const data = await res.json();
    return data.list;
}
export async function createList(projectId: string, name: string): Promise<List> {
    const token = await getIdToken();
    const res = await fetch(`/projects/${projectId}/lists`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ name })
    })
    const data = await res.json();
    return data.list;
}
export async function deleteList(projectId: string, listId: string): Promise<void> {
    const token = await getIdToken();
    const res = await fetch(`/projects/${projectId}/lists/${listId}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
    if (!res.ok) {
        throw new Error(`Failed to delete list: ${res.statusText}`);
    }
}
export async function editList(projectId: string, listId: string, updates: Partial<List>): Promise<List> {
    const token = await getIdToken();
    const res = await fetch(`/projects/${projectId}/lists/${listId}`, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(updates)
    })
    if (!res.ok) {
        throw new Error(`Failed to update list: ${res.statusText}`);
    }
    const data = await res.json();
    return data.list;
}