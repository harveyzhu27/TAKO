// SubtaskList.jsx
import React, { useState } from 'react';
import './SubtaskList.css';

function SubtaskList({
  projectId,
  listId,
  taskId,
  subtasks = [],
  addSubtask,
  checkSubtask,
  deleteSubtask,
  editSubtask,
}) {
  const [editingSubtask, setEditingSubtask] = useState(null);
  const [subtaskNameEdit, setSubtaskNameEdit] = useState('');
  const [subtaskDeadlineEdit, setSubtaskDeadlineEdit] = useState('');

  function handleSave(subId) {
    const trimmedName = subtaskNameEdit.trim();
    if (trimmedName === '') return;

    const duplicate = subtasks.some(
      (t) =>
        t.name.trim().toLowerCase() === trimmedName.toLowerCase() &&
        t.id !== subId
    );
    if (duplicate) {
      alert('Another subtask with that name already exists.');
      return;
    }

    editSubtask(projectId, listId, taskId, subId, {
      name: trimmedName,
      dueDate: subtaskDeadlineEdit === '' ? null : Number(subtaskDeadlineEdit),
    });
    setEditingSubtask(null);
  }

  function dateDisplay(number) {
    if (number === null || number === undefined || number === '') return '';
    if (number === 0) return 'Due Today';
    if (number === 1) return 'Due Tomorrow';
    return `Due in ${number} days`;
  }

  const sortedSubtasks = [...subtasks].sort((a, b) => {
    const aDone = !!a.completedAt;
    const bDone = !!b.completedAt;
    if (aDone !== bDone) return aDone ? 1 : -1;
    const aDue = a.dueDate === null ? Infinity : Number(a.dueDate);
    const bDue = b.dueDate === null ? Infinity : Number(b.dueDate);
    return aDue - bDue;
  });

  return (
    <div className="subtask-list">
      {sortedSubtasks.map((subtask) => (
        <div
          key={subtask.id}
          className="subtask-container"
          tabIndex={0}
          onBlur={(e) => {
            if (
              editingSubtask === subtask.id &&
              !e.currentTarget.contains(e.relatedTarget)
            ) {
              handleSave(subtask.id);
            }
          }}
        >
          <div className="subtask-block">
            <div className="subtask-main">
              <input
                type="checkbox"
                checked={!!subtask.completedAt}
                onChange={(e) => {
                  e.stopPropagation();
                  checkSubtask(projectId, listId, taskId, subtask.id, {
                    completedAt: subtask.completedAt ? null : Date.now(),
                  });
                }}
              />
              {editingSubtask === subtask.id ? (
                <div className="subtask-name-deadline-edit">
                  <input
                    className="subtask-name-edit"
                    value={subtaskNameEdit}
                    autoFocus
                    onChange={(e) => setSubtaskNameEdit(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') handleSave(subtask.id);
                      if (e.key === 'Escape') {
                        setEditingSubtask(null);
                      }
                    }}
                  />
                  <input
                    className="subtask-date-edit"
                    type="number"
                    value={subtaskDeadlineEdit}
                    placeholder="Due in..."
                    onChange={(e) => setSubtaskDeadlineEdit(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') handleSave(subtask.id);
                      if (e.key === 'Escape') {
                        setEditingSubtask(null);
                      }
                    }}
                  />
                  <button
                    className="subtask-delete-btn"
                    onClick={() => {
                      deleteSubtask(projectId, listId, taskId, subtask.id);
                      setEditingSubtask(null);
                    }}
                  >
                    X
                  </button>
                </div>
              ) : (
                <div className="subtask-name-deadline">
                  <span
                    className={`subtask-name ${subtask.completedAt ? 'done-subtask' : ''}`}
                    onClick={() => {
                      setEditingSubtask(subtask.id);
                      setSubtaskNameEdit(subtask.name);
                      setSubtaskDeadlineEdit(subtask.dueDate ?? '');
                    }}
                  >
                    {subtask.name}
                  </span>
                  <span className="subtask-deadline">
                    {dateDisplay(subtask.dueDate)}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default React.memo(SubtaskList);
