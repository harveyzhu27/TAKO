import React, { useState, useRef, useEffect } from 'react';
import './List.css';

function List ({
    list, addTask, addList, editList, deleteList
}) {
    const [newTaskName, setTaskName] = useState("");
    const [showAddTaskOptions, setShowAddTaskOption] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    return (
        <div className = 'list-container'>
            <div className = 'list-header'>{list.name}</div>
            <div className = 'task-list'>
                {list.tasks.map((task) => {
                    
                    {console.log(task)}
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
                            onClick={() => {
                                console.log(list.tasks)
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