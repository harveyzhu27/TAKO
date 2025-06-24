import { Task } from "./TaskModel";

export interface List {
  id: string;
  uid: string;
  name: string;
  projectId: string;
  order: number;
  taskCount: number;
  tasks: Task[]
}

export function createList({
  id,
  uid,
  name,
  projectId,
  order,
}: {
  id: string;
  uid:string;
  name: string;
  projectId: string;
  order: number;
}): List {
  return {
    id,
    uid,
    name,
    projectId,
    order,
    taskCount: 0,
    tasks: [],
  };
}