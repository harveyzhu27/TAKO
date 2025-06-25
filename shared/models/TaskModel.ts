import { Subtask } from "./SubtaskModel";

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
  subtasks: Subtask[];
}

export function createTask({
  id,
  uid,
  name,
  projectId,
  listId,
  dueDate = null,
  tags = [],
  order,
}: {
  id: string;
  uid: string;
  name: string;
  projectId: string;
  listId: string;
  dueDate?: number | null;
  tags?: string[];
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
    tags,
    order,
    subtaskCount: 0,
    subtasks: []
  };
}


export type TaskUpdate = Partial<
  Pick<Task, "name" | "dueDate" | "completedAt" | "tags" | "order">
>;
