import React, { useState, useRef, useEffect } from 'react';
import './TaskList.css';
// import SubtaskList from '../SubtaskList/SubtaskList';

function TaskList({
  projectId,
  listId,
  tasks,
  addTask,
  deleteTask,
  updateTask,
  // addSubtask,
  // deleteSubtask,
  // updateSubtask,
}) {
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editName, setEditName] = useState('');
  const [editDeadline, setEditDeadline] = useState('');
  const [menuOpenId, setMenuOpenId] = useState(null);
  // const [showSubtaskInput, setShowSubtaskInput] = useState(false);
  // const [newSubtaskName, setNewSubtaskName] = useState('');
  // const [newSubtaskDeadline, setNewSubtaskDeadline] = useState('');
  const [now, setNow] = useState(Date.now()); // For live updates

  // Track which tasks have their subtasks collapsed
  const [collapsedTasks, setCollapsedTasks] = useState({});

  const menuRef = useRef(null);
  const editRef = useRef(null);

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
        setShowSubtaskInput(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutsideEdit);
    return () => document.removeEventListener('mousedown', handleClickOutsideEdit);
  }, [editingTaskId]);

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
    
    // Debug logging for testing
    console.log(`formatDeadline: daysFromNow=${daysFromNow} (type: ${typeof daysFromNow}), days=${days}, diffDays=${diffDays}, now=${new Date(now).toDateString()}`);
    
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

  return (sortedTasks ?? []).map(task => {
    const isCollapsed = !!collapsedTasks[task.id] || !!task.completedAt;
    return (
      <div className="task-block" key={`${listId}-${task.id}`}>
        <div className="task-bar">
          <input
            className="task-checkbox"
            type="checkbox"
            checked={!!task.completedAt}
            onChange={() => {
              const completedAt = task.completedAt ? null : Date.now();
              updateTask(projectId, listId, task.id, { completedAt })
                .then(() => console.log('[TaskCheckbox] updateTask resolved'))
                .catch(err => console.error('[TaskCheckbox] updateTask failed:', err));
            }}
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
                  min="0"
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
                {/* Subtask input section commented out - subtasks disabled
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
                              newSubtaskDeadline === ''
                                ? null
                                : Number(newSubtaskDeadline)
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
                      min="0"
                      placeholder="0"
                      value={newSubtaskDeadline}
                      onChange={e => setNewSubtaskDeadline(e.target.value)}
                    />
                  </div>
                ) : (
                  <button
                    className="add-subtask-button"
                    onClick={() => setShowSubtaskInput(true)}
                  >
                    ↳
                  </button>
                )}
                */}
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
                >
                  {task.name}
                  {/* {task.subtaskCount > 0 && (
                    <span className="subtask-count"> ({task.subtaskCount})</span>
                  )} */}
                </span>
                {task.dueDate ? (
                  <span className={`task-deadline ${deadlineClass(task.dueDate)}`}>
                    {formatDeadline(task.dueDate)}
                  </span>
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
                          setCollapsedTasks(prev => ({
                            ...prev,
                            [task.id]: !prev[task.id],
                          }));
                          setMenuOpenId(null);
                        }}
                      >
                        {isCollapsed ? 'Expand Subtasks' : 'Collapse Subtasks'}
                      </button>
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

        {/* Show subtasks - commented out - subtasks disabled
        {!isCollapsed && task.subtasks?.length > 0 && (
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
        */}
      </div>
    );
  });
}



export default React.memo(TaskList);
