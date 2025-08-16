import React, { useState, useMemo, useCallback, ChangeEvent, KeyboardEvent, DragEvent } from 'react';
import { useCurrentTime } from '../../hooks/useCurrentTime';
import { useClickOutside } from '../../hooks/useClickOutside';
import { formatDeadline, getDeadlineClass } from '../../utils/dateUtils';
import './TaskList.css';
import type { Task } from '@shared/models/TaskModel';

interface TaskListProps {
  projectId: string;
  listId: string;
  tasks: Task[];
  addTask: (projectId: string, listId: string, taskName: string, dueDate?: number) => Promise<boolean>;
  deleteTask: (projectId: string, listId: string, taskId: string) => Promise<void>;
  updateTask: (projectId: string, listId: string, taskId: string, updates: Partial<Task>) => Promise<void>;
  onReorder: (taskIds: string[]) => void;
  loadingTasks?: Set<string>;
}

function TaskList({
  projectId,
  listId,
  tasks,
  deleteTask,
  updateTask,
  onReorder,
  loadingTasks = new Set(),
}: TaskListProps) {

  const [editingTaskId, setEditingTaskId] = useState<string | null>(null);
  const [editName, setEditName] = useState<string>('');
  const [editDeadline, setEditDeadline] = useState<string>('');
  const [menuOpenId, setMenuOpenId] = useState<string | null>(null);
  const currentTime = useCurrentTime();



  // Use custom hooks for click outside handling
  const menuRef = useClickOutside(() => setMenuOpenId(null));
  const editRef = useClickOutside(() => {
    setEditingTaskId(null);
  }, [editingTaskId]);

  // Memoized sorting function to prevent unnecessary re-computations
  const sortedTasks = useMemo(() => {
    return tasks
      .map((t, idx) => ({ ...t, _creationIndex: idx }))
      .sort((a, b) => {
        const aDone = !!a.completedAt;
        const bDone = !!b.completedAt;
        if (aDone !== bDone) return aDone ? 1 : -1;
        
        // First try to sort by order field
        if (a.order !== undefined && b.order !== undefined) {
          return a.order - b.order;
        }
        
        // If order is missing, fall back to creation time
        if (a.order === undefined && b.order === undefined) {
          return a.createdAt - b.createdAt;
        }
        
        // If one has order and the other doesn't, prioritize the one with order
        if (a.order !== undefined) return -1;
        if (b.order !== undefined) return 1;
        
        return a.createdAt - b.createdAt;
      });
  }, [tasks]);

  // Memoized date calculations using utility functions
  const memoizedDateCalculations = useMemo(() => {
    return {
      formatDeadline: (daysFromNow: number) => formatDeadline(daysFromNow, currentTime),
      deadlineClass: (daysFromNow: number) => getDeadlineClass(daysFromNow, currentTime)
    };
  }, [currentTime]);

  // Simple drag and drop
  const [draggedTaskId, setDraggedTaskId] = useState<string | null>(null);

  const handleDragStart = useCallback((e: DragEvent<HTMLDivElement>, taskId: string) => {
    e.dataTransfer.setData('text/plain', taskId);
    setDraggedTaskId(taskId);
  }, []);

  const handleDragEnd = useCallback(() => {
    setDraggedTaskId(null);
  }, []);

  const handleDragOver = useCallback((e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  }, []);

  const handleDrop = useCallback((e: DragEvent<HTMLDivElement>, targetTaskId: string) => {
    e.preventDefault();
    const draggedTaskId = e.dataTransfer.getData('text/plain');
    
    if (draggedTaskId && targetTaskId && draggedTaskId !== targetTaskId && onReorder) {
      // Simple reorder: move dragged task to target position
      const taskIds = tasks.map(task => task.id);
      const draggedIndex = taskIds.indexOf(draggedTaskId);
      const targetIndex = taskIds.indexOf(targetTaskId);
      
      if (draggedIndex !== -1 && targetIndex !== -1) {
        // Remove dragged task and insert at target position
        taskIds.splice(draggedIndex, 1);
        taskIds.splice(targetIndex, 0, draggedTaskId);
        
        onReorder(taskIds);
      }
    }
    setDraggedTaskId(null);
  }, [tasks, onReorder]);

  // Render function for individual task
  const renderTask = useCallback((task: Task) => {
    const isTaskLoading = loadingTasks.has(task.id);
    
    return (
      <div 
        className={`task-block ${isTaskLoading ? 'task-loading' : ''} ${
          draggedTaskId === task.id ? 'dragging' : ''
        }`}
        draggable={!isTaskLoading}
        onDragStart={(e: DragEvent<HTMLDivElement>) => handleDragStart(e, task.id)}
        onDragEnd={handleDragEnd}
        onDragOver={handleDragOver}
        onDrop={(e: DragEvent<HTMLDivElement>) => handleDrop(e, task.id)}
        key={task.id}
      >
        {isTaskLoading && (
          <div className="task-loading-overlay">
            <div className="loading-spinner">⟳</div>
          </div>
        )}
        <div className="task-bar">
          <input
            className="task-checkbox"
            type="checkbox"
            checked={!!task.completedAt}
            disabled={isTaskLoading}
            onChange={() => {
              const completedAt = task.completedAt ? null : Date.now();
              updateTask(projectId, listId, task.id, { completedAt })
                .then(() => console.log('[TaskCheckbox] updateTask resolved'))
                .catch(err => console.error('[TaskCheckbox] updateTask failed:', err));
            }}
            aria-label={`Mark ${task.name} as ${task.completedAt ? 'incomplete' : 'complete'}`}
          />
          <div
            className="task-name-deadline"
            ref={editingTaskId === task.id ? editRef : undefined}
          >
            {editingTaskId === task.id ? (
              <>
                <input
                  className="task-name-edit"
                  value={editName}
                  autoFocus
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setEditName(e.target.value)}
                  onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
                    if (e.key === 'Enter') {
                      updateTask(projectId, listId, task.id, {
                        name: editName,
                        dueDate: editDeadline === '' ? null : Number(editDeadline),
                      });
                      setEditingTaskId(null);
                    }
                    if (e.key === 'Escape') {
                      setEditingTaskId(null);
                    }
                  }}
                />
                <input
                  className="task-date-edit"
                  type="number"
                  min="0"
                  value={editDeadline}
                  placeholder="0"
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setEditDeadline(e.target.value)}
                  onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
                    if (e.key === 'Enter') {
                      updateTask(projectId, listId, task.id, {
                        name: editName,
                        dueDate: editDeadline === '' ? null : Number(editDeadline),
                      });
                      setEditingTaskId(null);
                    }
                    if (e.key === 'Escape') {
                      setEditingTaskId(null);
                    }
                  }}
                />
              </>
            ) : (
              <>
                <span
                  className={`task-name ${task.completedAt ? "done-task" : ""}`}
                  onClick={() => {
                    setEditingTaskId(task.id);
                    setEditName(task.name);
                    setEditDeadline(task.dueDate !== null ? task.dueDate.toString() : '');
                  }}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e: KeyboardEvent<HTMLSpanElement>) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setEditingTaskId(task.id);
                      setEditName(task.name);
                      setEditDeadline(task.dueDate !== null ? task.dueDate.toString() : '');
                    }
                  }}
                  aria-label={`Edit ${task.name} task`}
                >
                  {task.name}
                </span>
                {task.dueDate ? (
                  <span className={`task-deadline ${memoizedDateCalculations.deadlineClass(task.dueDate)}`}>
                    {memoizedDateCalculations.formatDeadline(task.dueDate)}
                  </span>
                ) : null}
                <div className="task-controls">
                  <button
                    className="task-more-btn"
                    onClick={() =>
                      setMenuOpenId(prev => (prev === task.id ? null : task.id))
                    }
                    aria-label={`${task.name} task menu`}
                    aria-expanded={menuOpenId === task.id}
                    aria-haspopup="true"
                  >
                    ⋮
                  </button>
                  {menuOpenId === task.id && (
                    <div className="task-menu-dropdown" ref={menuRef} role="menu" aria-label={`${task.name} task options`}>
                      <button
                        className="task-menu-item"
                        onClick={() => {
                          deleteTask(projectId, listId, task.id);
                          setMenuOpenId(null);
                        }}
                        role="menuitem"
                        aria-label={`Delete ${task.name} task`}
                      >
                        Delete Task
                      </button>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    );
  }, [loadingTasks, editingTaskId, editName, editDeadline, memoizedDateCalculations, projectId, listId, updateTask, deleteTask, setEditingTaskId, setEditName, setEditDeadline, setMenuOpenId, menuOpenId, menuRef, editRef, handleDragStart, handleDragEnd, handleDragOver, handleDrop, draggedTaskId]);

  // Return the task list with drag and drop
  return (
    <div className="task-list">
      {sortedTasks.map((task) => (
        <div key={task.id}>
          {renderTask(task)}
        </div>
      ))}
    </div>
  );
}

export default React.memo(TaskList);

