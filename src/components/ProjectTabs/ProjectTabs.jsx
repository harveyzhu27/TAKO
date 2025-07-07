import React, { useState, useEffect, useRef } from 'react';
import './ProjectTabs.css';

function ProjectTabs({
  projects,
  currentProject,
  addProject,
  setCurrentProject,
  deleteProject,
  updateProject,
  forceEditProjectId,
  setForceEditProjectId,
  setToastError
}) {
  const [newProjectName, setProjectName] = useState("");
  const [showAddOptions, setShowAddOption] = useState(false);
  const [showHomeScreen, setShowHomeScreen] = useState(false);
  const [editNameBuffer, setEditNameBuffer] = useState("");
  const inputRef = useRef(null);

  const sortedProjects = [...projects].sort((a, b) => a.order - b.order);

  useEffect(() => {
    const project = projects.find((p) => p.id === forceEditProjectId);
    setEditNameBuffer(project?.name || "");
  }, [forceEditProjectId, projects]);

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, [forceEditProjectId]);

  return (
    <div className="project-tabs-container">
      <button
        className={showHomeScreen ? 'active-home-tab' : 'home-tab'}
        onClick={() => {
          setShowHomeScreen(true);
          setCurrentProject("");
          setShowAddOption(false);
        }}
      >
        Home
      </button>

      {sortedProjects.map((project) => {
        const isEditing = project.id === forceEditProjectId;
        return (
          <div key={project.id} className="project-tab-item">
            {isEditing ? (
              <input
                ref={inputRef}
                className="edit-project-name-input"
                value={editNameBuffer}
                onChange={(e) => setEditNameBuffer(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    updateProject(project.id, { name: editNameBuffer });
                    setForceEditProjectId(null);
                  } else if (e.key === 'Escape') {
                    setForceEditProjectId(null);
                  }
                }}
                onBlur={() => {
                  updateProject(project.id, { name: editNameBuffer });
                  setForceEditProjectId(null);
                }}
              />
            ) : (
              <button
                onClick={() => {
                  setCurrentProject(project.id);
                  setShowHomeScreen(false);
                  setShowAddOption(false);
                }}
                className={currentProject === project.id ? 'active-tab' : 'basic-tab'}
              >
                {project.name}
              </button>
            )}
          </div>
        );
      })}

      {showAddOptions ? (
        <div className='show-add-options-block'>
          <input
            className='add-project-box'
            autoFocus
            value={newProjectName}
            onChange={(e) => setProjectName(e.target.value)}
            onKeyDown={async (e) => {
              if (e.key === 'Enter') {
                const success = await addProject(newProjectName.trim());
                if (!success) {
                  setToastError('Project name already exists');
                  return;
                }
                setProjectName("");
                setShowAddOption(false);
                setToastError("");
              }
              if (e.key === 'Escape') {
                setProjectName("");
                setShowAddOption(false);
                setToastError("");
              }
            }}
          />
        </div>
      ) : (
        <button
          className='add-project-button'
          onClick={() => {
            setCurrentProject("");
            setShowAddOption(true);
            setShowHomeScreen(false);
          }}
        >
          Add
        </button>
      )}
    </div>
  );
}

export default ProjectTabs;
