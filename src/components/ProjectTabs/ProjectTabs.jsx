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
  const [errorMessage, setErrorMessage] = useState("");

  // Force Home to be first; sort the rest by createdAt
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
            setErrorMessage("");
          }}
        >
          {projectName}
        </button>
      ))}

      {showAddOptions ? (
        <div className="project-add-input-wrapper">
          <input
            className="project-name-input"
            value={newProjectName}
            placeholder="New project…"
            onChange={(e) => {
              setProjectName(e.target.value);
              setErrorMessage(""); // clear error on change
            }}
            onKeyDown={async (e) => {
              if (e.key === "Enter" && newProjectName.trim() !== "") {
                const success = await addProject(newProjectName.trim());
                if (!success) {
                  setErrorMessage("Project name already exists");
                  return;
                }
                setProjectName("");
                setShowAddOptions(false);
                setErrorMessage("");
              }
              if (e.key === "Escape") {
                setProjectName("");
                setShowAddOptions(false);
                setErrorMessage("");
              }
            }}
            autoFocus
          />
          {errorMessage && (
            <div className="error-message">{errorMessage}</div>
          )}
        </div>
      ) : (
        <button
          className="add-button-off"
          onClick={() => {
            setShowAddOptions(true);
            setCurrentProject(null);
            setErrorMessage("");
          }}
        >
          Add
        </button>
      )}
    </div>
  );
}

export default ProjectTabs;
