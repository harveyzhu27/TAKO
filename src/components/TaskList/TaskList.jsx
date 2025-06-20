import React, { useState, useRef, useEffect } from 'react';
import './TaskList.css';

function TaskList({
  projectId,
  listId,
  tasks,
  addTask,
  deleteTask,
  updateTask,
  addSubtask,
  deleteSubtask,
  updateSubtask,
}) {
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editName, setEditName] = useState('');
  const [editDeadline, setEditDeadline] = useState('');
  const [menuOpenId, setMenuOpenId] = useState(null);

  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpenId(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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

  function formatDeadline(num) {
    if (num === null || num === "" || num === undefined) return "";
    if (num === "0" || num === 0) return "Due Today";
    if (num === "1" || num === 1) return "Due Tomorrow";
    return `Due in ${num} days`;
  }

  const sortedTasks = sortTasks(tasks);

  return (sortedTasks ?? []).map(task => (
    <div className="task-block" key={`${listId}-${task.id}`}>
      <div className="task-bar">
        <input
            type="checkbox"
            checked={!!task.completedAt}
            onChange={() => {
              const completedAt = task.completedAt ? null : Date.now();
              updateTask(projectId, listId, task.id, { completedAt });
            }}
          />
        <div className="task-name-deadline">
          {editingTaskId === task.id ? (
            <>
              <input
                className="task-name-edit"
                value={editName}
                autoFocus
                onChange={e => setEditName(e.target.value)}
                onKeyDown={e => {
                  if (e.key === 'Enter') {
                    updateTask(projectId, listId, task.id, {
                      name: editName,
                      deadline: editDeadline === '' ? null : Number(editDeadline),
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
                min={0}
                value={editDeadline}
                onChange={e => setEditDeadline(e.target.value)}
                onKeyDown={e => {
                  if (e.key === 'Enter') {
                    updateTask(projectId, listId, task.id, {
                      name: editName,
                      deadline: editDeadline === '' ? null : Number(editDeadline),
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
                  setEditDeadline(task.deadline ?? '');
                }}
              >
                
                {task.name}
              </span>
              {task.deadline ? (
                <span className="task-deadline">{formatDeadline(task.deadline)}</span>
              ) : null}
              <div className="task-controls">
          
          <button
            className="task-more-btn"
            onClick={() =>
              setMenuOpenId(prev => (prev === task.id ? null : task.id))
            }
          >
            ⋮
          </button>
          {menuOpenId === task.id && (
            <div className="task-menu-dropdown" ref={menuRef}>
              <button
                className="task-menu-item"
                onClick={() => {
                  deleteTask(projectId, listId, task.id);
                  setMenuOpenId(null);
                }}
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
  ));
}

export default TaskList;
