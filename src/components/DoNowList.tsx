import React, { useState, useMemo, ChangeEvent, KeyboardEvent } from 'react';
import { SortableList } from './DragDrop';
import { useCurrentTime } from '../hooks/useCurrentTime';
import { useClickOutside } from '../hooks/useClickOutside';
import { formatDeadline, getDeadlineClass } from '../utils/dateUtils';
import './DoNowList.css';
import type { Task } from '@shared/models/TaskModel';

interface DoNowListProps {
  projectId: string;
  tasks?: Task[];
  addTask: (projectId: string, listId: string, taskName: string, dueDate?: number) => Promise<boolean>;
  deleteTask: (projectId: string, listId: string, taskId: string) => Promise<void>;
  updateTask: (projectId: string, listId: string, taskId: string, updates: Partial<Task>) => Promise<void>;
}

function DoNowList({
  projectId,
  tasks = [],
  addTask,
  deleteTask,
  updateTask,
}: DoNowListProps) {
  const [newTaskName, setNewTaskName] = useState<string>("");
  const [newTaskDeadline, setNewTaskDeadline] = useState<string>("");
  const [showAddTaskOptions, setShowAddTaskOption] = useState<boolean>(false);

  const currentTime = useCurrentTime(); // Use custom hook for efficient time updates

  // Use custom hooks for click outside handling
  const taskInputRef = useClickOutside(() => {
    setShowAddTaskOption(false);
    setNewTaskName("");
    setNewTaskDeadline("");
  }, [showAddTaskOptions]);

  function sortTasks(arr: Task[]) {
    return arr
      .map((t, idx) => ({ ...t, _creationIndex: idx }))
      .sort((a, b) => {
        const aDone = !!a.completedAt;
        const bDone = !!b.completedAt;
        if (aDone !== bDone) return aDone ? 1 : -1;
        if (a.order !== undefined && b.order !== undefined && a.order !== b.order) {
          return a.order - b.order;
        }
        return a.createdAt - b.createdAt;
      });
  }

  // Handle task reordering
  const handleReorder = (fromIndex: number, toIndex: number) => {
    // TODO: Implement task reordering in backend
    console.log(`Reordering task from index ${fromIndex} to ${toIndex}`);
  };

  // Memoized date calculations using utility functions
  const memoizedDateCalculations = useMemo(() => {
    return {
      formatDeadline: (daysFromNow: number) => formatDeadline(daysFromNow, currentTime),
      deadlineClass: (daysFromNow: number) => getDeadlineClass(daysFromNow, currentTime)
    };
  }, [currentTime]);

  const sortedTasks = sortTasks(tasks);

  // Render function for sortable list
  const renderTask = (task: Task) => (
    <div className="do-now-task">
      <div className="drag-handle">⋮⋮</div>
      <input
        className="task-checkbox"
        type="checkbox"
        checked={!!task.completedAt}
        onChange={() => {
          const completedAt = task.completedAt ? null : Date.now();
          updateTask(projectId, 'do-now', task.id, { completedAt });
        }}
      />
      <div className="task-content">
        <span className={`task-name ${task.completedAt ? "done-task" : ""}`}>
          {task.name}
        </span>
        {task.dueDate && (
          <span className={`task-deadline ${memoizedDateCalculations.deadlineClass(task.dueDate)}`}>
            {memoizedDateCalculations.formatDeadline(task.dueDate)}
          </span>
        )}
      </div>
      <button
        className="delete-task-btn"
        onClick={() => deleteTask(projectId, 'do-now', task.id)}
        title="Delete task"
      >
        ×
      </button>
    </div>
  );

  return (
    <div className="do-now-list">

      <SortableList
        items={sortedTasks}
        onReorder={handleReorder}
        renderItem={renderTask}
        className="do-now-tasks"
      />

      {showAddTaskOptions ? (
        <div className="add-task-input" ref={taskInputRef}>
          <input
            type="text"
            placeholder="Add a do-now task..."
            value={newTaskName}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setNewTaskName(e.target.value)}
            onKeyDown={async (e: KeyboardEvent<HTMLInputElement>) => {
              if (e.key === 'Enter') {
                const trimmedName = newTaskName.trim();
                if (trimmedName) {
                  const deadline = newTaskDeadline.trim() === "" ? null : Number(newTaskDeadline);
                  await addTask(projectId, 'do-now', trimmedName, deadline);
                  setNewTaskName("");
                  setNewTaskDeadline("");
                  setShowAddTaskOption(false);
                }
              }
              if (e.key === 'Escape') {
                setNewTaskName("");
                setNewTaskDeadline("");
                setShowAddTaskOption(false);
              }
            }}
          />
          <input
            type="number"
            min="0"
            placeholder="0"
            value={newTaskDeadline}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setNewTaskDeadline(e.target.value)}
            className="deadline-input"
          />
        </div>
      ) : (
        <button
          className="add-do-now-btn"
          onClick={() => setShowAddTaskOption(true)}
        >
          + Add Do Now Task
        </button>
      )}
    </div>
  );
}

export default DoNowList;

