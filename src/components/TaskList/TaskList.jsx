import React, { useState, useRef, useEffect, useMemo } from 'react';
import { useCurrentTime } from '../../hooks/useCurrentTime.js';
import { useClickOutside } from '../../hooks/useClickOutside.js';
import { formatDeadline, getDeadlineClass } from '../../utils/dateUtils.js';
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
  loadingTasks = new Set(),
}) {
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editName, setEditName] = useState('');
  const [editDeadline, setEditDeadline] = useState('');
  const [menuOpenId, setMenuOpenId] = useState(null);
  // const [showSubtaskInput, setShowSubtaskInput] = useState(false);
  // const [newSubtaskName, setNewSubtaskName] = useState('');
  // const [newSubtaskDeadline, setNewSubtaskDeadline] = useState('');
  const currentTime = useCurrentTime(); // Use centralized time hook

  // Track which tasks have their subtasks collapsed
  const [collapsedTasks, setCollapsedTasks] = useState({});

  // Use custom hooks for click outside handling
  const menuRef = useClickOutside(() => setMenuOpenId(null));
  const editRef = useClickOutside(() => {
    setEditingTaskId(null);
    // setShowSubtaskInput(false);
  }, [editingTaskId]);



  // Memoized sorting function to prevent unnecessary re-computations
  const sortedTasks = useMemo(() => {
    return tasks
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
  }, [tasks]);

  // Memoized date calculations using utility functions
  const memoizedDateCalculations = useMemo(() => {
    return {
      formatDeadline: (daysFromNow) => formatDeadline(daysFromNow, currentTime),
      deadlineClass: (daysFromNow) => getDeadlineClass(daysFromNow, currentTime)
    };
  }, [currentTime]);

  return (sortedTasks ?? []).map(task => {
    const isCollapsed = !!collapsedTasks[task.id] || !!task.completedAt;
    const isTaskLoading = loadingTasks.has(task.id);
    
    return (
      <div className={`task-block ${isTaskLoading ? 'task-loading' : ''}`} key={`${listId}-${task.id}`}>
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
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
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
                  {/* {task.subtaskCount > 0 && (
                    <span className="subtask-count"> ({task.subtaskCount})</span>
                  )} */}
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
                      {/* <button
                        className="task-menu-item"
                        onClick={() => {
                          setCollapsedTasks(prev => ({
                            ...prev,
                            [task.id]: !prev[task.id],
                          }));
                          setMenuOpenId(null);
                        }}
                        role="menuitem"
                        aria-label={`${isCollapsed ? 'Expand' : 'Collapse'} subtasks for ${task.name}`}
                      >
                        {isCollapsed ? 'Expand Subtasks' : 'Collapse Subtasks'}
                      </button> */}
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
