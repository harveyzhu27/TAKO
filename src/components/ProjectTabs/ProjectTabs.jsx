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
  setToastError,
  projectData = {},
  loadingProjects = new Set()
}) {
  const [newProjectName, setProjectName] = useState("");
  const [showAddOptions, setShowAddOption] = useState(false);
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
        className={!currentProject ? 'active-home-tab' : 'home-tab'}
        onClick={() => {
          setCurrentProject(null);
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
                  setShowAddOption(false);
                }}
                className={currentProject === project.id ? 'active-tab' : 'basic-tab'}
                title={projectData && projectData[project.id] ? 'Cached - Fast load' : 'Not cached - Will load from server'}
              >
                {project.name}
                {loadingProjects && loadingProjects.has(project.id) && (
                  <span className="loading-indicator" title="Loading...">⏳</span>
                )}
                {projectData && projectData[project.id] && !loadingProjects?.has(project.id) && (
                  <span className="cache-indicator" title="Cached">💾</span>
                )}
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
            setCurrentProject(null);
            setShowAddOption(true);
          }}
        >
          Add
        </button>
      )}
    </div>
  );
}

export default ProjectTabs;
