import React, { useState, useRef, useEffect } from 'react';
import { SortableList } from './DragDrop.jsx';
import './DoNowList.css';

function DoNowList({
  projectId,
  tasks = [],
  addTask,
  deleteTask,
  updateTask,
  addSubtask,
  deleteSubtask,
  updateSubtask,
}) {
  const [newTaskName, setNewTaskName] = useState("");
  const [newTaskDeadline, setNewTaskDeadline] = useState("");
  const [showAddTaskOptions, setShowAddTaskOption] = useState(false);
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editName, setEditName] = useState('');
  const [editDeadline, setEditDeadline] = useState('');
  const [menuOpenId, setMenuOpenId] = useState(null);
  const [now, setNow] = useState(Date.now()); // For live updates

  const menuRef = useRef(null);
  const editRef = useRef(null);
  const taskInputRef = useRef(null);

  // Timer to update 'now' every minute for live due date updates
  useEffect(() => {
    const interval = setInterval(() => setNow(Date.now()), 60000);
    return () => clearInterval(interval);
  }, []);

  // Close the task menu when clicking outside
  useEffect(() => {
    const handleClickOutside = e => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpenId(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Exit edit mode when clicking outside the edit inputs
  useEffect(() => {
    const handleClickOutsideEdit = e => {
      if (editingTaskId && editRef.current && !editRef.current.contains(e.target)) {
        setEditingTaskId(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutsideEdit);
    return () => document.removeEventListener('mousedown', handleClickOutsideEdit);
  }, [editingTaskId]);

  // Close add task input when clicking outside
  useEffect(() => {
    if (!showAddTaskOptions) return;

    function handleClickOutside(e) {
      if (taskInputRef.current && !taskInputRef.current.contains(e.target)) {
        setShowAddTaskOption(false);
        setNewTaskName("");
        setNewTaskDeadline("");
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showAddTaskOptions]);

  function sortTasks(arr) {
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
  const handleReorder = (fromIndex, toIndex) => {
    // TODO: Implement task reordering in backend
    console.log(`Reordering task from index ${fromIndex} to ${toIndex}`);
  };

  // Format deadline using days from now with real-time tracking
  function formatDeadline(daysFromNow) {
    if (daysFromNow === null || daysFromNow === undefined || daysFromNow === '') return '';
    
    // Ensure daysFromNow is a number
    const days = typeof daysFromNow === 'string' ? Number(daysFromNow) : daysFromNow;
    
    // Calculate the actual due date based on days from now
    const today = new Date(now);
    today.setHours(0, 0, 0, 0);
    const dueDate = new Date(today);
    dueDate.setDate(today.getDate() + days);
    
    // Calculate days difference from today
    const nowDate = new Date(now);
    nowDate.setHours(0, 0, 0, 0);
    const diffDays = Math.floor((dueDate - nowDate) / (1000 * 60 * 60 * 24));
    
    if (diffDays < 0) return 'Overdue';
    if (diffDays === 0) return 'Due Today';
    if (diffDays === 1) return 'Due Tomorrow';
    return `Due in ${diffDays} days`;
  }

  // Helper for color class
  function deadlineClass(daysFromNow) {
    if (daysFromNow === null || daysFromNow === undefined || daysFromNow === '') return '';
    const days = typeof daysFromNow === 'string' ? Number(daysFromNow) : daysFromNow;
    const today = new Date(now);
    today.setHours(0, 0, 0, 0);
    const dueDate = new Date(today);
    dueDate.setDate(today.getDate() + days);
    const nowDate = new Date(now);
    nowDate.setHours(0, 0, 0, 0);
    const diffDays = Math.floor((dueDate - nowDate) / (1000 * 60 * 60 * 24));
    if (diffDays < 0) return 'overdue';
    if (diffDays === 0) return 'due-today';
    if (diffDays === 1) return 'due-tomorrow';
    return '';
  }

  const sortedTasks = sortTasks(tasks);

  // Render function for sortable list
  const renderTask = (task) => (
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
          <span className={`task-deadline ${deadlineClass(task.dueDate)}`}>
            {formatDeadline(task.dueDate)}
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
            onChange={e => setNewTaskName(e.target.value)}
            onKeyDown={async e => {
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
            onChange={e => setNewTaskDeadline(e.target.value)}
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