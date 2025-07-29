import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useClickOutside } from '../../hooks/useClickOutside.js';
import { validateTaskName, validateDeadline } from '../../utils/validation.js';
import './List.css';
import TaskList from '../TaskList/TaskList';

function List({
    projectId,
    list,
    lists,
    addList,
    deleteList,
    updateList,
    moveList,
    addTask,
    deleteTask,
    updateTask,
    addSubtask,
    deleteSubtask,
    updateSubtask,
    listCount,
    isLeftmost,
    isRightmost,
    setToastError,
    isDoNowList = false,
}) {
    const [newTaskName, setTaskName] = useState("");
    const [newTaskDeadline, setTaskDeadline] = useState("");
    const [showAddTaskOptions, setShowAddTaskOption] = useState(false);
    const [editingName, setEditingName] = useState(false);
    const [nameBuffer, setNameBuffer] = useState(list.name);
    const nameInputRef = useRef(null);
    const [menuOpen, setMenuOpen] = useState(false);
    
    // Use custom hooks for click outside handling
    const menuRef = useClickOutside(() => setMenuOpen(false), [menuOpen]);
    const taskInputRef = useClickOutside(() => {
      setShowAddTaskOption(false);
      setTaskName("");
      setTaskDeadline("");
      setToastError("");
    }, [showAddTaskOptions]);

    useEffect(() => {
        if (editingName && nameInputRef.current) {
            nameInputRef.current.focus();
        }
    }, [editingName]);



    function saveName() {
        if (nameBuffer.trim() && nameBuffer.trim() !== list.name) {
            updateList(projectId, list.id, nameBuffer.trim());
        }
        setEditingName(false);
    }

    function cancelEdit() {
        setNameBuffer(list.name);
        setEditingName(false);
    }

    function handleDelete() {
        if (listCount <= 1) {
            setToastError("You must have at least one other list.");
            return;
        }
        if (
            window.confirm("Are you sure you want to delete this list? This cannot be undone.")
        ) {
            deleteList(projectId, list.id);
            setToastError("");
        }
    }

    function handleClearTasks() {
        const completedTasks = (list.tasks || []).filter(task => task.completedAt);
        if (completedTasks.length === 0) return;
        if (
            window.confirm("Are you sure you want to clear all completed tasks in this list? This cannot be undone.")
        ) {
            completedTasks.forEach(task => deleteTask(projectId, list.id, task.id));
            setMenuOpen(false);
            setToastError("");
        }
    }

    function handleShift(direction) {
        moveList(projectId, list.id, direction);
        setMenuOpen(false);
    }

    const hasCompleted = (list.tasks || []).some(task => task.completedAt);

    return (
        <div className={`list-container ${isDoNowList ? 'do-now-list' : ''}`}>
            <div className='list-header'>
                {editingName ? (
                    <input
                        ref={nameInputRef}
                        value={nameBuffer}
                        onChange={e => setNameBuffer(e.target.value)}
                        onBlur={saveName}
                        onKeyDown={e => {
                            if (e.key === 'Enter') saveName();
                            if (e.key === 'Escape') cancelEdit();
                        }}
                        className='edit-list-input'
                    />
                ) : (
                    <span
                        onDoubleClick={() => {
                            if (!isDoNowList) {
                                setEditingName(true);
                            }
                        }}
                        className="list-name"
                        style={{ cursor: isDoNowList ? 'default' : 'pointer' }}
                        title={isDoNowList ? "Do Now list cannot be renamed" : "Double-click to rename"}
                        role="button"
                        tabIndex={isDoNowList ? -1 : 0}
                        onKeyDown={(e) => {
                            if (!isDoNowList && (e.key === 'Enter' || e.key === ' ')) {
                                e.preventDefault();
                                setEditingName(true);
                            }
                        }}
                        aria-label={isDoNowList ? `${list.name} list (${list.taskCount} tasks)` : `${list.name} list (${list.taskCount} tasks) - double-click to rename`}
                    >
                        {list.name} ({list.taskCount})
                    </span>
                )}
                {!isDoNowList && (
                    <button 
                        className="list-menu-btn" 
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label={`${list.name} list menu`}
                        aria-expanded={menuOpen}
                        aria-haspopup="true"
                    >
                        ⋮
                    </button>
                )}
                {menuOpen && (
                    <div className="list-menu-row" ref={menuRef} role="menu" aria-label={`${list.name} list options`}>
                        <button
                            onClick={handleDelete}
                            disabled={listCount <= 1}
                            role="menuitem"
                            aria-label={`Delete ${list.name} list`}
                        >
                            Delete List
                        </button>
                        <button
                            onClick={handleClearTasks}
                            disabled={!hasCompleted}
                            role="menuitem"
                            aria-label={`Clear completed tasks in ${list.name} list`}
                        >
                            Clear Completed Tasks
                        </button>
                        <button
                            onClick={() => handleShift('left')}
                            disabled={isLeftmost}
                            role="menuitem"
                            aria-label={`Move ${list.name} list left`}
                        >
                            Shift Left
                        </button>
                        <button
                            onClick={() => handleShift('right')}
                            disabled={isRightmost}
                            role="menuitem"
                            aria-label={`Move ${list.name} list right`}
                        >
                            Shift Right
                        </button>
                    </div>
                )}

            </div>
            <div className='task-list'>
                <TaskList
                    projectId={projectId}
                    listId={isDoNowList ? 'do-now' : list.id}
                    tasks={list.tasks}
                    addTask={addTask}
                    deleteTask={deleteTask}
                    updateTask={updateTask}
                    addSubtask={addSubtask}
                    deleteSubtask={deleteSubtask}
                    updateSubtask={updateSubtask}
                    setToastError={setToastError}
                />
                {
                    showAddTaskOptions ? (
                        <div className="task-input" ref={taskInputRef}>
                            <textarea
                                className='add-task-input'
                                autoFocus
                                placeholder='Add task...'
                                value={newTaskName}
                                ref={taskInputRef}
                                onInput={e => {
                                    e.target.style.height = 'auto';
                                    e.target.style.height = e.target.scrollHeight + 'px';
                                }}
                                onChange={e => setTaskName(e.target.value)}
                                onKeyDown={async e => {
                                    if (e.key === 'Enter' && !e.shiftKey) {
                                        e.preventDefault();
                                        
                                        // Validate task name
                                        const nameValidation = validateTaskName(newTaskName);
                                        if (!nameValidation.isValid) {
                                            setToastError(nameValidation.error);
                                            return;
                                        }
                                        
                                        // Validate deadline
                                        const deadlineValidation = validateDeadline(newTaskDeadline);
                                        if (!deadlineValidation.isValid) {
                                            setToastError(deadlineValidation.error);
                                            return;
                                        }
                                        
                                        const success = await addTask(projectId, isDoNowList ? 'do-now' : list.id, nameValidation.sanitized, deadlineValidation.sanitized);
                                        if (!success) {
                                            setToastError("Task name already exists");
                                            return;
                                        }
                                        setTaskName("");
                                        setTaskDeadline("");
                                        setShowAddTaskOption(false);
                                        setToastError("");
                                    }
                                    if (e.key === 'Escape') {
                                        setTaskName("");
                                        setTaskDeadline("");
                                        setShowAddTaskOption(false);
                                        setToastError("");
                                    }
                                }}
                                rows={1}
                                style={{overflow: 'hidden', resize: 'none'}}
                            />
                            <input
                                className='add-task-deadline-input'
                                type="number"
                                min="0"
                                placeholder='0'
                                value={newTaskDeadline}
                                onChange={e => setTaskDeadline(e.target.value)}
                                onKeyDown={async e => {
                                    if (e.key === 'Enter') {
                                        e.preventDefault();
                                        
                                        // Validate task name
                                        const nameValidation = validateTaskName(newTaskName);
                                        if (!nameValidation.isValid) {
                                            setToastError(nameValidation.error);
                                            return;
                                        }
                                        
                                        // Validate deadline
                                        const deadlineValidation = validateDeadline(newTaskDeadline);
                                        if (!deadlineValidation.isValid) {
                                            setToastError(deadlineValidation.error);
                                            return;
                                        }
                                        
                                        const success = await addTask(projectId, isDoNowList ? 'do-now' : list.id, nameValidation.sanitized, deadlineValidation.sanitized);
                                        if (!success) {
                                            setToastError("Task name already exists");
                                            return;
                                        }
                                        setTaskName("");
                                        setTaskDeadline("");
                                        setShowAddTaskOption(false);
                                        setToastError("");
                                    }
                                    if (e.key === 'Escape') {
                                        setTaskDeadline("");
                                        setShowAddTaskOption(false);
                                        setToastError("");
                                    }
                                }}
                            />
                        </div>

                    ) : (
                        <button
                            autoFocus
                            className="add-task-block"
                            onClick={() => setShowAddTaskOption(true)}
                            aria-label={`Add task to ${list.name} list`}
                        >Add task...</button>
                    )
                }

            </div>
        </div>
    );
}

export default List;
