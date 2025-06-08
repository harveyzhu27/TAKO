// SubtaskList.jsx
import React, { useState } from 'react';
import './SubtaskList.css';

function SubtaskList({
  subtasks = [],
  taskName,
  addSubtask,
  checkSubtask,
  deleteSubtask,
  editSubtask,
}) {
  const [subtaskName, setSubtaskName] = useState("");
  const [subtaskDeadline, setSubtaskDeadline] = useState("");

  const [editingSubtask, setEditingSubtask] = useState(null);
  const [subtaskNameEdit, setSubtaskNameEdit] = useState("");
  const [subtaskDeadlineEdit, setSubtaskDeadlineEdit] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const newSubtask = {
      name: subtaskName,
      deadline: subtaskDeadline,
      done: false
    };

    const duplicate = subtasks.some(
      (t) => t.name.trim().toLowerCase() === subtaskName.trim().toLowerCase()
    );
    if (duplicate) {
      alert("Subtask with that name already exists.");
      return;
    }

    addSubtask(taskName, newSubtask);
    setSubtaskName("");
    setSubtaskDeadline("");
  }

  function handleDone(name, e) {
    e.stopPropagation();
    checkSubtask(taskName, name);
  }

  function handleSave(name) {
    const trimmedName = subtaskNameEdit.trim();
    if (trimmedName === "") return;

    const duplicate = subtasks.some(
      (t) =>
        t.name.trim().toLowerCase() === trimmedName.toLowerCase() &&
        t.name !== name
    );
    if (duplicate) {
      alert("Another subtask with that name already exists.");
      return;
    }

    editSubtask(taskName, name, {
      name: trimmedName,
      deadline: subtaskDeadlineEdit,
    });
    setEditingSubtask(null);
  }

  function dateDisplay(number) {
    if (number === "") return "";
    if (number === "0") return "Due Today";
    if (number === "1") return "Due Tomorrow";
    return `Due in ${number} days`;
  }

  const sortedSubtasks = [...subtasks].sort((a, b) => {
    if (a.done !== b.done) return a.done ? 1 : -1;
    const aDue = a.deadline === "" ? Infinity : Number(a.deadline);
    const bDue = b.deadline === "" ? Infinity : Number(b.deadline);
    return aDue - bDue;
  });

  return (
    <div className="subtask-list">
      {sortedSubtasks.map((subtask) => (
        <div
          key={subtask.name}
          className="subtask-container"
          tabIndex={0}
          onBlur={(e) => {
            if (
              editingSubtask === subtask.name &&
              !e.currentTarget.contains(e.relatedTarget)
            ) {
              handleSave(subtask.name);
            }
          }}
        >
          <div className="subtask-block">
            <div className="subtask-main">
              <input
                type="checkbox"
                checked={subtask.done}
                onChange={(e) => handleDone(subtask.name, e)}
              />
              {editingSubtask === subtask.name ? (
                <div className="subtask-name-deadline-edit">
                  <input
                    className="subtask-name-edit"
                    value={subtaskNameEdit}
                    autoFocus
                    onChange={(e) => setSubtaskNameEdit(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') handleSave(subtask.name);
                      if (e.key === 'Escape') {
                        setEditingSubtask(null);
                      }
                    }}
                  />
                  <input
                    className="subtask-date-edit"
                    type="number"
                    value={subtaskDeadlineEdit}
                    onChange={(e) => setSubtaskDeadlineEdit(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') handleSave(subtask.name);
                      if (e.key === 'Escape') {
                        setEditingSubtask(null);
                      }
                    }}
                  />
                  {/* Subtask “Delete” button in edit‐mode */}
                  <button
                    className="subtask-delete-btn"
                    onClick={() => {
                      deleteSubtask(taskName, subtask.name);
                      setEditingSubtask(null);
                    }}
                  >
                    X
                  </button>
                </div>
              ) : (
                <div className="subtask-name-deadline">
                  <span
                    className={`subtask-name ${subtask.done ? "done-subtask" : ""}`}
                    onClick={() => {
                      setEditingSubtask(subtask.name);
                      setSubtaskNameEdit(subtask.name);
                      setSubtaskDeadlineEdit(subtask.deadline);
                    }}
                  >
                    {subtask.name}
                  </span>
                  <span className="subtask-deadline">{dateDisplay(subtask.deadline)}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SubtaskList;
