import React, { useState, useRef, useEffect } from 'react';
import './TaskList.css';
import SubtaskList from '../SubtaskList/SubtaskList';

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
  const [showSubtaskInput, setShowSubtaskInput] = useState(false);
  const [newSubtaskName, setNewSubtaskName] = useState('');
  const [newSubtaskDeadline, setNewSubtaskDeadline] = useState('');

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
                min={0}
                value={editDeadline}
                placeholder="0"
                onChange={e => setEditDeadline(e.target.value)}
                onKeyDown={e => {
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
              {showSubtaskInput ? (
                <div className="subtask-input-block">
                  <input
                    className="subtask-name-input"
                    type="text"
                    placeholder="Subtask name"
                    value={newSubtaskName}
                    onChange={e => setNewSubtaskName(e.target.value)}
                    onKeyDown={e => {
                      if (e.key === 'Enter') {
                        const trimmed = newSubtaskName.trim();
                        if (trimmed !== '') {
                          addSubtask(
                            projectId,
                            listId,
                            task.id,
                            trimmed,
                            newSubtaskDeadline === '' ? null : Number(newSubtaskDeadline)
                          );
                          setNewSubtaskName('');
                          setNewSubtaskDeadline('');
                        }
                      }
                      if (e.key === 'Escape') {
                        setShowSubtaskInput(false);
                        setNewSubtaskName('');
                        setNewSubtaskDeadline('');
                      }
                    }}
                  />
                  <input
                    className="subtask-date-input"
                    type="number"
                    min={0}
                    placeholder="Due in..."
                    value={newSubtaskDeadline}
                    onChange={e => setNewSubtaskDeadline(e.target.value)}
                  />
                </div>
              ) : (
                <button className="add-subtask-button" onClick={() => setShowSubtaskInput(true)}>
                  + Add Subtask
                </button>
              )}
            </>
          ) : (
            <>
              <span
                className={`task-name ${task.completedAt ? "done-task" : ""}`}
                onClick={() => {
                  setEditingTaskId(task.id);
                  setEditName(task.name);
                  setEditDeadline(task.dueDate ?? '');
                }}
              >
                {task.name}
              </span>
              {task.dueDate ? (
                <span className="task-deadline">{formatDeadline(task.dueDate)}</span>
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

      {/* Show subtasks */}
      {(task.subtasks ?? []).length > 0 && (
        <div className="subtask-wrapper">
          <SubtaskList
            projectId={projectId}
            listId={listId}
            taskId={task.id}
            subtasks={task.subtasks}
            addSubtask={addSubtask}
            checkSubtask={updateSubtask}
            deleteSubtask={deleteSubtask}
            editSubtask={updateSubtask}
          />
        </div>
      )}
    </div>
  ));
}

export default React.memo(TaskList);
