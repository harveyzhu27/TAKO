import { List } from "./ListModel";
import { getNewListId } from "../../server/utils/utils";

export interface Project {
  id: string;
  uid: string;
  name: string;
  description: string;
  order: number;
  taskCount: number;
  lists: List[];
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
  const list1: List = {
    id: getNewListId(),
    uid,
    name: "Unnamed",
    projectId: id,
    order: 1,
    taskCount: 0,
    tasks: [],
  };

  return {
    id,
    uid,
    name,
    description: '',
    order,
    taskCount: 0,
    lists: [list1], 
  };
}

export type ProjectSummary = Pick<Project, "id" | "name" | "order" | "description" | "taskCount">;