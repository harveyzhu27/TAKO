import React, { useState, useRef, useEffect } from 'react';
import './List.css';
import TaskList from '../TaskList/TaskList';

function List({
    projectId,
    list,
    addList,
    deleteList,
    updateList,
    addTask,
    deleteTask,
    updateTask,
    addSubtask,
    deleteSubtask,
    updateSubtask,
}) {
    const [newTaskName, setTaskName] = useState("");
    const [showAddTaskOptions, setShowAddTaskOption] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    return (
        <div className='list-container'>
            <div className='list-header'>{list.name}</div>
            <div className='task-list'>
                <TaskList
                    projectId = {projectId}
                    listId = {list.id}
                    tasks={list.tasks}
                    addTask={addTask}
                    deleteTask={deleteTask}
                    updateTask={updateTask}
                    addSubtask={addSubtask}
                    deleteSubtask={deleteSubtask}
                    updateSubtask={deleteSubtask}
                />
                {
                    (showAddTaskOptions) ? (
                        <div>
                            <input
                                className='add-task-input'
                                autoFocus
                                value={newTaskName}
                                onChange={(e) => setTaskName(e.target.value)}
                                onKeyDown={async (e) => {
                                    if (e.key === 'Enter') {
                                        const success = await addTask(newTaskName.trim())
                                        if (!success) {
                                            setErrorMessage('Task name already exists')
                                            return;
                                        }
                                        console.log(`Successfully added task ${newTaskName.trim()}`)
                                        setTaskName("");
                                        setShowAddTaskOption(false);
                                        setErrorMessage("");
                                    }
                                    if (e.key === 'Escape') {
                                        console.log(`Escape was pressed`);
                                        setTaskName("");
                                        setShowAddTaskOption(false);
                                        setErrorMessage("");
                                    }
                                }} />
                            {errorMessage &&
                                <div className='error-message'>{errorMessage}</div>}
                        </div>
                    ) : (
                        <button
                            autoFocus
                            className="add-task-block"
                            onClick={() => {
                                setShowAddTaskOption(true)
                            }
                            }>Add task</button>
                    )
                }

            </div>
        </div>
    )
}

export default List;