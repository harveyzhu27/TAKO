import React, { useState, useEffect, useRef } from 'react';
import { validateProjectName } from '../../utils/validation.js';
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
  loadingProjects = new Set(),
  isProjectLoading,
  getProjectError,
  clearProjectError,
  loadingSidebar = false,
  loadingInitialData = false
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
      {loadingSidebar && (
        <div className="sidebar-loading-overlay">
          <div className="loading-spinner">⟳</div>
          <span>Loading sidebar...</span>
        </div>
      )}
      {loadingInitialData && (
        <div className="initial-data-loading">
          <div className="loading-spinner">⟳</div>
          <span>Loading projects...</span>
        </div>
      )}
      <button
        className={!currentProject ? 'active-home-tab' : 'home-tab'}
        onClick={() => {
          setCurrentProject(null);
          setShowAddOption(false);
        }}
        aria-label="Go to home page"
        aria-pressed={!currentProject}
        disabled={loadingSidebar || loadingInitialData}
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
                onKeyDown={async (e) => {
                  if (e.key === 'Enter') {
                    // Validate project name
                    const validation = validateProjectName(editNameBuffer);
                    if (!validation.isValid) {
                      setToastError(validation.error);
                      return;
                    }
                    try {
                      await updateProject(project.id, { name: validation.sanitized });
                      setForceEditProjectId(null);
                      setToastError("");
                    } catch (err) {
                      setToastError(err.message || 'Failed to update project name');
                    }
                  } else if (e.key === 'Escape') {
                    setForceEditProjectId(null);
                    setToastError("");
                  }
                }}
                onBlur={async () => {
                  // Validate project name
                  const validation = validateProjectName(editNameBuffer);
                  if (validation.isValid) {
                    try {
                      await updateProject(project.id, { name: validation.sanitized });
                    } catch (err) {
                      setToastError(err.message || 'Failed to update project name');
                    }
                  }
                  setForceEditProjectId(null);
                  setToastError("");
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
                aria-label={`${project.name} project`}
                aria-pressed={currentProject === project.id}
                aria-describedby={`project-status-${project.id}`}
                disabled={loadingSidebar || loadingInitialData}
              >
                {project.name}
                {loadingProjects && loadingProjects.has(project.id) && (
                  <span className="loading-indicator" title="Loading..." aria-label="Loading project">⏳</span>
                )}
                {projectData && projectData[project.id] && !loadingProjects?.has(project.id) && (
                  <span className="cache-indicator" title="Cached" aria-label="Project cached">💾</span>
                )}
                <span id={`project-status-${project.id}`} className="sr-only">
                  {loadingProjects && loadingProjects.has(project.id) ? 'Loading' : 
                   projectData && projectData[project.id] ? 'Cached' : 'Not cached'}
                </span>
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
                // Validate project name
                const validation = validateProjectName(newProjectName);
                if (!validation.isValid) {
                  setToastError(validation.error);
                  return;
                }
                
                try {
                  const success = await addProject(validation.sanitized);
                  if (!success) {
                    setToastError('Project name already exists');
                    return;
                  }
                  setProjectName("");
                  setShowAddOption(false);
                  setToastError("");
                } catch (err) {
                  setToastError(err.message || 'Failed to create project');
                }
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
          disabled={loadingSidebar || loadingInitialData}
        >
          Add
        </button>
      )}
    </div>
  );
}

export default ProjectTabs;
