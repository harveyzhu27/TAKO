import { List } from "./ListModel";
import { getNewListId } from "../utils/utils";

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
    name: "Do Now",
    projectId: id,
    isUniversal: true,
    order: 0,
    taskCount: 0,
    tasks: [],
  };

  const list2: List = {
    id: getNewListId(),
    uid,
    name: "Unnamed",
    projectId: id,
    isUniversal: false,
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
    lists: [list1, list2], 
  };
}
