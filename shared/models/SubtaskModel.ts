export interface Subtask {
  id: string;
  uid: string;
  projectId: string;
  listId: string;
  taskId: string,
  name: string;
  dueDate: number | null;
  createdAt: number;
  completedAt: number | null;
  order: number;
}

export function createSubtask({
  id,
  uid,
  name,
  dueDate = null,
  order,
  projectId,
  listId,
  taskId
}: {
  id: string;
  uid: string;
  name: string;
  dueDate?: number | null;
  order: number;
  projectId: string;
  listId: string;
  taskId: string;
}): Subtask {
  return {
    id,
    uid,
    name,
    projectId,
    listId,
    taskId,
    dueDate,
    createdAt: Date.now(),
    completedAt: null,
    order,
  };
}