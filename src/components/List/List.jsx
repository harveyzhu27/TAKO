import React, { useState, useRef, useEffect } from 'react';
import './List.css';
import SubtaskList from "../SubtaskList/SubtaskList";

import TaskList from './TaskList/TaskList';

function List ({
    list, addTask, addList, editList, deleteList
}) {
    const [newTaskName, setTaskName] = useState("");
    const [showAddTaskOptions, setShowAddTaskOption] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    return (
        <div className = 'list-container'>
            <h1 className = 'list-header'>{list.name}</h1>
            <div className = 'task-list'>
                {list.tasks.map((task) => {
                    return(
                        <div className = 'task-block' key={task.id} >
                            <span>
                                <div>{task.name}</div>
                                <div>{(task.dueDate) ? task.dueDate : ""}</div>
                            </span>
                        </div>
                    )
                })}
                
                {
                    (showAddTaskOptions) ? (
                        <div>
                       <input
                        className = 'add-task-block'
                        autoFocus
                        value = {newTaskName}
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
                            }}}/>
                            {errorMessage &&
                        <div className='error-message'>{errorMessage}</div>}
                        </div>
                    ) : (
                         <button 
                            autoFocus
                            className = "task-block"
                            onClick={() => 
                                setShowAddTaskOption(true)
                            }>Add task</button>
                    )
                }
                
            </div>
        </div>
    )
}

export default List;