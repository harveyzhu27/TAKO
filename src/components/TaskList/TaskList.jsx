
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
  return (tasks ?? []).map(task => (
    <div className="task-block" key={task.id}>
      <div className="task-bar">
        {task.name}{task.id}
        <input
          type="checkbox"
          checked = {!!task.completedAt}
          onChange={() =>
            updateTask(projectId, listId, task.id, {
              completedAt: task.completedAt ? Date.now() : null
            })
          }
        />
      </div>
    </div>
  )
  )
}

export default TaskList

