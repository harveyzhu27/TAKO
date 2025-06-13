export interface List {
  id: string;
  uid: string;
  name: string;
  projectId: string;
  isUniversal: boolean;
  order: number;
  taskCount: number;
}

export function createList({
  id,
  uid,
  name,
  projectId,
  isUniversal,
  order,
}: {
  id: string;
  uid: string;
  name: string;
  projectId: string;
  isUniversal: boolean;
  order: number;
}): List {
  return {
    id,
    uid,
    name,
    projectId,
    isUniversal,
    order,
    taskCount: 0,
  };
}