import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { SortableList } from './DragDrop.jsx';
import { useCurrentTime } from '../hooks/useCurrentTime.js';
import { useClickOutside } from '../hooks/useClickOutside.js';
import { formatDeadline, getDeadlineClass } from '../utils/dateUtils.js';
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
  const currentTime = useCurrentTime(); // Use custom hook for efficient time updates

  // Use custom hooks for click outside handling
  const menuRef = useClickOutside(() => setMenuOpenId(null));
  const editRef = useClickOutside(() => setEditingTaskId(null), [editingTaskId]);
  const taskInputRef = useClickOutside(() => {
    setShowAddTaskOption(false);
    setNewTaskName("");
    setNewTaskDeadline("");
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

  // Memoized date calculations using utility functions
  const memoizedDateCalculations = useMemo(() => {
    return {
      formatDeadline: (daysFromNow) => formatDeadline(daysFromNow, currentTime),
      deadlineClass: (daysFromNow) => getDeadlineClass(daysFromNow, currentTime)
    };
  }, [currentTime]);

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