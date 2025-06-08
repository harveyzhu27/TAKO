// src/components/ProjectTabs/ProjectTabs.jsx
import React, { useState } from 'react';
import './ProjectTabs.css';

function ProjectTabs({
  projects,
  currentProject,
  setCurrentProject,
  addProject
}) {
  const [newProjectName, setProjectName] = useState("");
  const [showAddOptions, setShowAddOptions] = useState(false);

  // Force “Home” to be first; sort the rest by createdAt
  const homeKey = "Home";
  const allKeys = Object.keys(projects);
  const otherKeys = allKeys
    .filter((key) => key !== homeKey)
    .sort((a, b) => projects[a].createdAt - projects[b].createdAt);
  const orderedKeys = allKeys.includes(homeKey)
    ? [homeKey, ...otherKeys]
    : otherKeys;

  return (
    <div className="project-tabs-container">
      {orderedKeys.map((projectName) => (
        <button
          key={projectName}
          className={
            projectName === currentProject ? "active-tab" : "basic-tab"
          }
          onClick={() => {
            setCurrentProject(projectName);
            setShowAddOptions(false);
          }}
        >
          {projectName}
        </button>
      ))}

      {showAddOptions ? (
        <input
          className="project-name-input"
          value={newProjectName}
          placeholder="New project…"
          onChange={(e) => {
            setProjectName(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter" && newProjectName.trim() !== "") {
              addProject(newProjectName.trim());
              setProjectName("");
              setShowAddOptions(false);
            }
            if (e.key === "Escape") {
              setProjectName("");
              setShowAddOptions(false);
            }
          }}
          autoFocus
        />
      ) : (
        <button
          className="add-button-off"
          onClick={() => {
            setShowAddOptions(true);
            setCurrentProject(null);
          }}
        >
          Add
        </button>
      )}
    </div>
  );
}

export default ProjectTabs;
