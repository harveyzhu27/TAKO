export interface Project {
  id: string;
  uid: string;
  name: string;
  description: string;
  order: number;
  taskCount: number;
}

export function createProject({
  id,
  uid,
  name,
  order,
}: {
  id: string;
  uid: string;
  name: string;
  order: number;
}): Project {
  return {
    id,
    uid,
    name,
    description: '',
    order,
    taskCount: 0,
  };
}
