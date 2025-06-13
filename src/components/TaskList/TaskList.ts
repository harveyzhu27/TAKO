import React, { useState, useRef, useEffect } from 'react';
import './TaskList.css';
import SubtaskList from "../SubtaskList/SubtaskList";

export interface Task {
    id: string,
    name: string, 
    projectId: string,
    dueDate: number,
    listId: string,
    createdAt: number,
    completedAt?: number,
    repeat?: "daily" | "weekly" | null;
    repeatOn?: string,
    priority?: "high" | "medium" | "low"
    tags?: string[];
    order?: number,
    subtasks: 
}

const [tasks, setTasks] = useState<Record<string,Task>>({});