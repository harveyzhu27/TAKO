import React, { useState, useRef, useEffect } from 'react';
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
}) {
    const [newTaskName, setTaskName] = useState("");
    const [newTaskDeadline, setTaskDeadline] = useState("");
    const [showAddTaskOptions, setShowAddTaskOption] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [editingName, setEditingName] = useState(false);
    const [nameBuffer, setNameBuffer] = useState(list.name);
    const nameInputRef = useRef(null);
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const taskInputRef = useRef(null);

    useEffect(() => {
        if (editingName && nameInputRef.current) {
            nameInputRef.current.focus();
        }
    }, [editingName]);

    useEffect(() => {
        function handleClick(e) {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setMenuOpen(false);
            }
        }
        if (menuOpen) {
            document.addEventListener('mousedown', handleClick);
        }
        return () => document.removeEventListener('mousedown', handleClick);
    }, [menuOpen]);


    useEffect(() => {
        if (!showAddTaskOptions) return;

        function handleClickOutside(e) {
            if (taskInputRef.current && !taskInputRef.current.contains(e.target)) {
                setShowAddTaskOption(false);
                setTaskName("");
                setTaskDeadline("");
                setErrorMessage("");
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [showAddTaskOptions]);

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
    if (list.isUniversal) {
        setErrorMessage("Cannot delete the universal Do Now list.");
        return;
    }
    if (listCount <= 2) {
        setErrorMessage("You must have at least one other list besides Do Now.");
        return;
    }
    if (
        window.confirm("Are you sure you want to delete this list? This cannot be undone.")
    ) {
        deleteList(projectId, list.id);
        setErrorMessage("");
    }
}


    function handleShift(direction) {
        moveList(projectId, list.id, direction);
        setMenuOpen(false);
    }

    return (
        <div className='list-container'>
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
                            !list.isUniversal && setEditingName(true)
                            console.log(list.tasks)
                        console.log(list.taskCount)
                    }}
                        className={list.isUniversal ? 'do-now-list-name' : ''}
                        style={{ cursor: list.isUniversal ? 'not-allowed' : 'pointer' }}
                        title={list.isUniversal ? "Can't rename Do Now list" : "Double-click to rename"}
                    >
                        {list.name}{' ('}{list.taskCount}{')'}
                    </span>
                )}
                <button className="list-menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
                    ⋮
                </button>
                {menuOpen && (
                    <div className="list-menu-row" ref={menuRef}>
                        <button
                            onClick={() => {
                                handleDelete
                                {console.log(listCount)}
                            }}
                            disabled={list.isUniversal || listCount <= 2}
                        >
                            Delete List
                        </button>
                        <button
                            onClick={() => handleShift('left')}
                            disabled={isLeftmost}
                        >
                            Shift Left
                        </button>
                        <button
                            onClick={() => handleShift('right')}
                            disabled={isRightmost}
                        >
                            Shift Right
                        </button>
                    </div>
                )}

            </div>
            <div className='task-list'>
                <TaskList
                    projectId={projectId}
                    listId={list.id}
                    tasks={list.tasks}
                    addTask={addTask}
                    deleteTask={deleteTask}
                    updateTask={updateTask}
                    addSubtask={addSubtask}
                    deleteSubtask={deleteSubtask}
                    updateSubtask={updateSubtask}
                />
                {
                    (showAddTaskOptions) ? (
                        <div className="task-input" ref={taskInputRef}>
                            <input
                                className='add-task-input'
                                autoFocus
                                placeholder='Add task...'
                                value={newTaskName}
                                onChange={(e) => setTaskName(e.target.value)}
                                onKeyDown={async (e) => {
                                    if (e.key === 'Enter') {
                                        e.preventDefault();
                                        const trimmedName = newTaskName.trim();
                                        if (!trimmedName) {
                                            setErrorMessage("Task name cannot be empty");
                                            return;
                                        }
                                        const deadline = newTaskDeadline.trim() === "" ? null : Number(newTaskDeadline);
                                        const success = await addTask(projectId, list.id, trimmedName, deadline);
                                        if (!success) {
                                            setErrorMessage("Task name already exists");
                                            return;
                                        }
                                        console.log(`Successfully added task ${trimmedName}`);
                                        setTaskName("");
                                        setTaskDeadline("");
                                        setShowAddTaskOption(false);
                                        setErrorMessage("");
                                    }
                                    if (e.key === 'Escape') {
                                        setTaskName("");
                                        setTaskDeadline("");
                                        setShowAddTaskOption(false);
                                        setErrorMessage("");
                                    }
                                }}
                            />
                            <input
                                className='add-task-deadline-input'
                                type="number"
                                min={0}
                                placeholder='0'
                                value={newTaskDeadline}
                                onChange={(e) => setTaskDeadline(e.target.value)}
                                onKeyDown={async (e) => {
                                    if (e.key === 'Enter') {
                                        e.preventDefault();
                                        const trimmedName = newTaskName.trim();
                                        if (!trimmedName) {
                                            setErrorMessage("Task name cannot be empty");
                                            return;
                                        }
                                        const deadline = newTaskDeadline.trim() === "" ? null : Number(newTaskDeadline);
                                        const success = await addTask(projectId, list.id, trimmedName, deadline);
                                        if (!success) {
                                            setErrorMessage("Task name already exists");
                                            return;
                                        }
                                        console.log(`Successfully added task ${trimmedName}`);
                                        setTaskName("");
                                        setTaskDeadline("");
                                        setShowAddTaskOption(false);
                                        setErrorMessage("");
                                    }
                                    if (e.key === 'Escape') {
                                        setTaskDeadline("");
                                        setShowAddTaskOption(false);
                                        setErrorMessage("");
                                    }
                                }}
                            />
                            {errorMessage && (
                                <div className='error-message'>{errorMessage}</div>
                            )}
                        </div>

                    ) : (
                        <button
                            autoFocus
                            className="add-task-block"
                            onClick={() => {
                                setShowAddTaskOption(true)
                            }
                            }>Add task...</button>
                    )
                }

            </div>
        </div>
    )
}

export default List;