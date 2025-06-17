import React, { useState, useRef, useEffect } from 'react';
import './TaskList.css';
import SubtaskList from "../SubtaskList/SubtaskList";

function TaskList({
  projects,
  currentProject,
  addTask,
  checkTask,
  deleteTask,
  editTask,
  addSubtask,
  checkSubtask,
  deleteSubtask,
  editSubtask,

  // ─── Project‐level actions (passed in from App.jsx) ───
  moveProjectUp,
  moveProjectDown,
  renameProject,
  deleteProject,
}) {
  // If no project selected (or currentProject key missing), render nothing
  if (!currentProject || !projects[currentProject]) return null;

  // ─── Project Header State ───
  const [projectMenuOpen, setProjectMenuOpen] = useState(false);
  const [renamingProject, setRenamingProject] = useState(false);
  const [tempProjectName, setTempProjectName] = useState(currentProject);

  // ─── Task Creation / Editing State ───
  const [taskName, setTaskName] = useState("");
  const [taskDeadline, setTaskDeadline] = useState("");
  const [editingTask, setEditingTask] = useState(null);

  const [taskNameEdit, setTaskNameEdit] = useState("");
  const [taskDeadlineEdit, setTaskDeadlineEdit] = useState("");

  // ─── Subtask State ───
  const [showSubtaskInput, setShowSubtaskInput] = useState(false);
  const [newSubtaskName, setNewSubtaskName] = useState("");
  const [newSubtaskDeadline, setNewSubtaskDeadline] = useState("");

  // ─── Hover/Menu/Collapse State for Tasks ───
  const [hoveredTask, setHoveredTask] = useState(null);
  const [menuOpenTask, setMenuOpenTask] = useState(null);
  const [collapsedTasks, setCollapsedTasks] = useState({}); 
  // collapsedTasks = { "Task A": true, "Task B": false, ... }

  // ─── Derived Data ───
const tasks = (projects[currentProject]?.tasks) || [];

  // Helper: sort tasks by done‐status, due date, creation index
  function sortTasks(arr) {
    return arr
      .map((t, idx) => ({ ...t, _creationIndex: idx }))
      .sort((a, b) => {
        // 1) incomplete before done
        if (a.done !== b.done) return a.done ? 1 : -1;

        // 2) compare due dates if both have a deadline
        const aHasDue = a.deadline !== "";
        const bHasDue = b.deadline !== "";
        if (aHasDue && bHasDue) {
          const aDueNum = Number(a.deadline);
          const bDueNum = Number(b.deadline);
          return aDueNum - bDueNum;
        }
        if (aHasDue !== bHasDue) {
          return aHasDue ? -1 : 1;
        }

        // 3) otherwise preserve original order
        return a._creationIndex - b._creationIndex;
      });
  }

  // Format completed date into “Done Today/Yesterday/N days ago”
  function doneDisplay(isoString) {
    if (!isoString) return "";
    const completedDate = new Date(isoString);
    const today = new Date();
    // zero out time:
    completedDate.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);
    const diffMs = today - completedDate;
    const diffDays = Math.round(diffMs / (1000 * 60 * 60 * 24));
    if (diffDays === 0) return "Done Today";
    if (diffDays === 1) return "Done Yesterday";
    return `Done ${diffDays} days ago`;
  }

  // Format deadline number into “Due Today/Tomorrow/N days”
  function dateDisplay(num) {
    if (num === "") return "";
    if (num === "0") return "Due Today";
    if (num === "1") return "Due Tomorrow";
    return `Due in ${num} days`;
  }

  const sortedTasks = sortTasks(tasks);

  // ─── Handlers: Add / Edit / Save Task ───
  function handleSubmit(e) {
    e.preventDefault();
    const trimmedName = taskName.trim();
    if (trimmedName === "") return;

    // Prevent duplicate names
    const duplicate = tasks.some(
      t => t.name.trim().toLowerCase() === trimmedName.toLowerCase()
    );
    if (duplicate) {
      alert("Task with that name already exists.");
      return;
    }

    addTask({
      name: trimmedName,
      deadline: taskDeadline,
      done: false,
      subtasks: []
    });
    setTaskName("");
    setTaskDeadline("");
  }

  function handleDone(taskName) {
    checkTask(taskName);
  }

  function handleSaveTask(oldName) {
    const trimmed = taskNameEdit.trim();
    const currentTask = tasks.find(t => t.name === oldName);
    if (trimmed === "") return;

    // Prevent renaming to an existing name
    const duplicate = tasks.some(
      t =>
        t.name.trim().toLowerCase() === trimmed.toLowerCase() &&
        t.name !== oldName
    );
    if (duplicate) {
      alert("Another task with that name already exists.");
      return;
    }

    // If nothing changed, just exit edit mode
    if (
      trimmed === oldName &&
      taskDeadlineEdit === currentTask.deadline
    ) {
      setEditingTask(null);
      return;
    }

    // Otherwise apply edits
    editTask(oldName, {
      name: trimmed,
      deadline: taskDeadlineEdit
    });
    setEditingTask(null);
  }

  // ─── Handlers: Add Subtask ───
  function handleAddSubtask(taskName) {
    const trimmed = newSubtaskName.trim();
    if (trimmed === "") return;

    addSubtask(taskName, {
      name: trimmed,
      deadline: newSubtaskDeadline,
      done: false
    });
    setNewSubtaskName("");
    setNewSubtaskDeadline("");
    // keep the subtask input open for multiple additions
  }

  // ─── Close menus when clicking outside ───
  const projectMenuRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(e) {
      if (
        projectMenuOpen &&
        projectMenuRef.current &&
        !projectMenuRef.current.contains(e.target)
      ) {
        setProjectMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [projectMenuOpen]);

  const taskMenuRef = useRef(null);
  useEffect(() => {
    function handleClickOutsideTask(e) {
      if (
        menuOpenTask &&
        taskMenuRef.current &&
        !taskMenuRef.current.contains(e.target)
      ) {
        setMenuOpenTask(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutsideTask);
    return () => document.removeEventListener("mousedown", handleClickOutsideTask);
  }, [menuOpenTask]);

  // ─── Project Header Handlers ───
  function handleRenameProject() {
    const trimmed = tempProjectName.trim();
    if (trimmed === "" || trimmed === currentProject) {
      setRenamingProject(false);
      return;
    }
    // Prevent duplicate project name
    if (Object.keys(projects).some(key => key.toLowerCase() === trimmed.toLowerCase())) {
      alert("A project with that name already exists.");
      return;
    }
    renameProject(currentProject, trimmed);
    setRenamingProject(false);
  }

  function handleDeleteProject() {
    if (currentProject === "Home") {
      alert("You cannot delete the Home project.");
      return;
    }
    if (window.confirm(`Delete project "${currentProject}"? This cannot be undone.`)) {
      deleteProject(currentProject);
    }
    setProjectMenuOpen(false);
    setRenamingProject(false);
  }

  function handleMoveUpProject() {
    moveProjectUp(currentProject);
    setProjectMenuOpen(false);
  }

  function handleMoveDownProject() {
    moveProjectDown(currentProject);
    setProjectMenuOpen(false);
  }

  // Determine if current project is first/last in order
  const projectKeys = Object.keys(projects);
  // “Home” should always be first; sort the rest by createdAt
  const homeKey = "Home";
  const otherKeys = projectKeys
    .filter(key => key !== homeKey)
    .sort((a, b) => projects[a].createdAt - projects[b].createdAt);
  const orderedKeys = projectKeys.includes(homeKey) ? [homeKey, ...otherKeys] : otherKeys;
  const currentIndex = orderedKeys.indexOf(currentProject);
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === orderedKeys.length - 1;

  return (
    <div className="task-list-wrapper">
      {/* ─── Project Header ─── */}
      <div className="tasklist-header">
        {renamingProject ? (
          <input
            className="project-title-input"
            value={tempProjectName}
            onChange={e => setTempProjectName(e.target.value)}
            onKeyDown={e => {
              if (e.key === "Enter") handleRenameProject();
              if (e.key === "Escape") {
                setRenamingProject(false);
                setTempProjectName(currentProject);
              }
            }}
            autoFocus
          />
        ) : (
          <h2 className="project-title">{currentProject}</h2>
        )}

        <button
          className="project-menu-button"
          type="button"
          onClick={() => setProjectMenuOpen(prev => !prev)}
        >
          ⋮
        </button>

        {projectMenuOpen && (
          <div className="project-menu-dropdown" ref={projectMenuRef}>
            <button
              className="project-menu-item"
              type="button"
              onClick={handleMoveUpProject}
              disabled={isFirst}
            >
              Move Up
            </button>
            <button
              className="project-menu-item"
              type="button"
              onClick={handleMoveDownProject}
              disabled={isLast}
            >
              Move Down
            </button>
            <button
              className="project-menu-item"
              type="button"
              onClick={() => {
                setRenamingProject(true);
                setTempProjectName(currentProject);
                setProjectMenuOpen(false);
              }}
            >
              Rename
            </button>
            <button
              className="project-menu-item"
              type="button"
              onClick={handleDeleteProject}
              disabled={currentProject === "Home"}
            >
              Delete Project
            </button>
          </div>
        )}
      </div>

      {/* ─── Add New Task Form ─── */}
      <form className="task-input" onSubmit={handleSubmit}>
        <button className="add-task-button" type="submit">
          Add
        </button>
        <input
          type="text"
          placeholder="Task name"
          value={taskName}
          onChange={e => setTaskName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Due in ..."
          min={0}
          value={taskDeadline}
          onChange={e => setTaskDeadline(e.target.value)}
        />
      </form>

      {/* ─── Task List ─── */}
      {sortedTasks.map(task => (
        <div
          key={task.name}
          className="task-container"
          tabIndex={0}
          onBlur={e => {
            // If we’re editing this task and focus leaves, save
            if (
              editingTask === task.name &&
              !e.currentTarget.contains(e.relatedTarget)
            ) {
              handleSaveTask(task.name);
            }
          }}
          onMouseEnter={() => setHoveredTask(task.name)}
          onMouseLeave={() => setHoveredTask(null)}
        >
          <div className={`task-block ${hoveredTask === task.name ? "hovered" : ""}`}>
            <div className="task-main">
              <input
                type="checkbox"
                checked={task.done}
                onChange={() => handleDone(task.name)}
              />

              {editingTask === task.name ? (
                /* ─── Edit Mode ─── */
                <div className="task-name-deadline-edit">
                  <input
                    className="task-name-edit"
                    value={taskNameEdit}
                    autoFocus
                    onChange={e => setTaskNameEdit(e.target.value || task.name)}
                    onKeyDown={e => {
                      if (e.key === 'Enter') handleSaveTask(task.name);
                      if (e.key === 'Escape') setEditingTask(null);
                    }}
                  />
                  <input
                    className="task-date-edit"
                    type="number"
                    placeholder="Due in ..."
                    min={0}
                    value={taskDeadlineEdit}
                    onChange={e => setTaskDeadlineEdit(e.target.value)}
                    onKeyDown={e => {
                      if (e.key === 'Enter') handleSaveTask(task.name);
                      if (e.key === 'Escape') setEditingTask(null);
                    }}
                  />
                </div>
              ) : (
                /* ─── Normal Mode ─── */
                <div className="task-name-date-row">
                  <div className="task-name-deadline">
                    <span
                      className={`task-name ${task.done ? "done-task" : ""}`}
                      onClick={() => {
                        setEditingTask(task.name);
                        setTaskNameEdit(task.name);
                        setTaskDeadlineEdit(task.deadline);
                        setShowSubtaskInput(false);
                        setNewSubtaskName("");
                        setNewSubtaskDeadline("");
                      }}
                    >
                      {task.name}
                    </span>
                    <span className="task-deadline">
                      {task.done
                        ? doneDisplay(task.completedAt)
                        : dateDisplay(task.deadline)}
                    </span>
                  </div>

                  {/* ─── Three‐dots Task Menu Button (on hover) ─── */}
                  {hoveredTask === task.name && editingTask !== task.name && (
                    <button
                      className="task-more-btn"
                      type="button"
                      onClick={() =>
                        setMenuOpenTask(prev =>
                          prev === task.name ? null : task.name
                        )
                      }
                    >
                      ⋮
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* ─── Task‐level Menu Dropdown ─── */}
          {menuOpenTask === task.name && (
            <div className="task-menu-dropdown" ref={taskMenuRef}>
              <button
                className="task-menu-item"
                type="button"
                onClick={() => {
                  if (window.confirm(`Delete task "${task.name}"?`)) {
                    deleteTask(task.name);
                    setMenuOpenTask(null);
                    setEditingTask(null);
                  }
                }}
              >
                Delete Task
              </button>
              <button
                className="task-menu-item"
                type="button"
                onClick={() => {
                  setCollapsedTasks(prev => ({
                    ...prev,
                    [task.name]: !prev[task.name],
                  }));
                  setMenuOpenTask(null);
                }}
              >
                {collapsedTasks[task.name] ? "Expand Subtasks" : "Collapse Subtasks"}
              </button>
              <button
                className="task-menu-item"
                type="button"
                onClick={() => {
                  alert("Star feature coming soon!");
                  setMenuOpenTask(null);
                }}
              >
                Star (Coming Soon)
              </button>
              <button
                className="task-menu-item"
                type="button"
                onClick={() => {
                  alert("Move List feature coming soon!");
                  setMenuOpenTask(null);
                }}
              >
                Move List (Coming Soon)
              </button>
              <button
                className="task-menu-item"
                type="button"
                onClick={() => {
                  alert("AI feature coming soon!");
                  setMenuOpenTask(null);
                }}
              >
                AI (Coming Soon)
              </button>
            </div>
          )}

          {/* ─── “Add Subtask” Input (in edit mode) ─── */}
          {editingTask === task.name && (
            showSubtaskInput ? (
              <div
                className="subtask-block add-subtask-input"
                tabIndex={0}
                onBlur={() => {
                  const trimmed = newSubtaskName.trim();
                  if (trimmed !== "") {
                    handleAddSubtask(task.name);
                  } else {
                    setShowSubtaskInput(false);
                  }
                }}
              >
                <input
                  className="subtask-new-input"
                  type="text"
                  value={newSubtaskName}
                  placeholder="Subtask name"
                  autoFocus
                  onChange={e => setNewSubtaskName(e.target.value)}
                  onKeyDown={e => {
                    if (e.key === 'Enter') {
                      const trimmed = newSubtaskName.trim();
                      if (trimmed !== "") {
                        handleAddSubtask(task.name);
                      }
                    }
                    if (e.key === 'Escape') {
                      setShowSubtaskInput(false);
                      setNewSubtaskName("");
                      setNewSubtaskDeadline("");
                    }
                  }}
                />
                <input
                  className="subtask-date-edit"
                  type="number"
                  min={0}
                  placeholder="Due in ..."
                  value={newSubtaskDeadline}
                  onChange={e => setNewSubtaskDeadline(e.target.value)}
                  onKeyDown={e => {
                    if (e.key === 'Enter') {
                      const trimmed = newSubtaskName.trim();
                      if (trimmed !== "") {
                        handleAddSubtask(task.name);
                      }
                    }
                    if (e.key === 'Escape') {
                      setShowSubtaskInput(false);
                      setNewSubtaskName("");
                      setNewSubtaskDeadline("");
                    }
                  }}
                />
              </div>
            ) : (
              <div
                className="subtask-block add-subtask-button"
                onClick={() => setShowSubtaskInput(true)}
              >
                + Add Subtask
              </div>
            )
          )}

          {/* ─── Subtask List (if not collapsed) ─── */}
          {!collapsedTasks[task.name] &&
            task.subtasks &&
            task.subtasks.length > 0 && (
              <div className="subtask-list-outer">
                <SubtaskList
                  subtasks={task.subtasks}
                  taskName={task.name}
                  addSubtask={addSubtask}
                  checkSubtask={checkSubtask}
                  deleteSubtask={deleteSubtask}
                  editSubtask={editSubtask}
                />
              </div>
            )}
        </div>
      ))}
    </div>
  );
}

export default TaskList;
