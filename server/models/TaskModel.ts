export interface Task {
  id: string;
  uid: string;
  name: string;
  projectId: string;
  listId: string;
  dueDate: number | null;
  createdAt: number;
  completedAt: number | null;
  tags: string[];
  order: number;
  subtaskCount: number;
}

export function createTask({
  id,
  uid,
  name,
  projectId,
  listId,
  dueDate = null,
  tags = [],
  isUniversal = false,
  order,
}: {
  id: string;
  uid: string;
  name: string;
  projectId: string;
  listId: string;
  dueDate?: number | null;
  tags?: string[];
  isUniversal?: boolean;
  order: number;
}): Task {
  return {
    id,
    uid,
    name,
    projectId,
    listId,
    dueDate,
    createdAt: Date.now(),
    completedAt: null,
    tags: isUniversal ? ['DoNow'] : tags,
    order,
    subtaskCount: 0,
  };
}
