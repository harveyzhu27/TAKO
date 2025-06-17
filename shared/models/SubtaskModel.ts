export interface Subtask {
  id: string;
  uid: string;
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
}: {
  id: string;
  uid: string;
  name: string;
  dueDate?: number | null;
  order: number;
}): Subtask {
  return {
    id,
    uid,
    name,
    dueDate,
    createdAt: Date.now(),
    completedAt: null,
    order,
  };
}