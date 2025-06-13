import React, { useState, useRef, useEffect } from 'react';
import './TaskList.css';
import SubtaskList from "../SubtaskList/SubtaskList";

type Task = {
    id: string,
    name: string, 
    projectId: string,
    dueDate: number,
    listId: string,
    createdAt: number,
    completedAt?: number,
    tags?: string[],
    order?: number,
    subtasks: {
        id: string,
        name: string,
        dueDate: number,
        createdAt: number,
        completedAt: number,
        taskId: string,
        order?: string
    }
}

const [tasks, setTasks] = useState<Record<string,Task>>({});
