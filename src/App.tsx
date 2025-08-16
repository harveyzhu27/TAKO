import React, { useState, useEffect, useRef, useCallback } from "react";
import { useAuthContext } from "./hooks/useAuth";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";

import ProjectTabs from "./components/ProjectTabs/ProjectTabs";
import useUserProjects from "./hooks/useUserProjects";
import useProjectOperations from "./hooks/useProjectOperations";
import HomePage from "./components/HomePage";
import ProjectContent from "./components/ProjectContent";
import ErrorBoundary from "./components/ErrorBoundary";

import { DragDropProvider } from "./components/DragDrop";
// import { ProjectSummary } from "../shared/models/ProjectModel.ts"

import "./App.css";

export default function App() {
  const { currentUser, logOut } = useAuthContext();
  const [toastError, setToastError] = useState<string | null>(null);

  
  const {
    projectSummaries,
    currentProject,
    setCurrentProject: originalSetCurrentProject,

    lists,
    fullProject,
    projectData,
    doNowTasks,
    doNowTaskCount,
    tasksCompletedToday,

    // Separate loading states for different sections
    loadingDoNow,
    loadingProjectContent,
    loadingSidebar,
    loadingTasks,
    loadingProjects,
    loadingInitialData,

    // project‐level actions
    addProject,
    updateProject,
    deleteProject,
    refreshProjectSummaries,

    // list‐level actions
    addList,
    updateList,
    deleteList,
    moveList,

    // task‐level actions
    addTask,
    updateTask,
    deleteTask,
    reorderTasks,

    // subtask‐level actions (commented out - subtasks disabled)
    // addSubtask,
    // updateSubtask,
    // deleteSubtask,
  } = useUserProjects();

  // Use optimistic project operations
  const projectActions = {
    addProject,
    updateProject,
    deleteProject
  };
  
  const {
    updateProjectOptimistic,
    deleteProjectOptimistic,
    createProjectOptimistic,
    isProjectLoading,
    getProjectError,
    clearProjectError
  } = useProjectOperations(projectActions);

  // Load home screen preference from localStorage
  useEffect(() => {
    if (currentUser) {
      const savedPreference = localStorage.getItem(`tako-home-screen-${currentUser.uid}`);
      console.log('🔍 Loading home screen preference:', savedPreference, 'for user:', currentUser.uid);
      if (savedPreference === 'true') {
        originalSetCurrentProject(null);
        console.log('🏠 Set to home screen based on saved preference');
      } else if (savedPreference === 'false') {
        console.log('📁 User prefers projects, will set to first project if available');
      }
    }
  }, [currentUser, originalSetCurrentProject]);

  // Save home screen preference to localStorage
  const handleSetCurrentProject = useCallback((projectId: string | null) => {
    originalSetCurrentProject(projectId);
    if (currentUser) {
      if (projectId === null) {
        // User is going to home screen
        localStorage.setItem(`tako-home-screen-${currentUser.uid}`, 'true');
        console.log('🏠 User going to home screen, saved preference');
      } else {
        // User is going to a project
        localStorage.setItem(`tako-home-screen-${currentUser.uid}`, 'false');
        console.log('📁 User going to project:', projectId, 'saved preference');
      }
    }
  }, [currentUser, originalSetCurrentProject]);

  const [showDescription, setShowDescription] = useState<boolean>(false);
  const [descBuffer, setDescBuffer] = useState<string>("");
  const [forceEditProjectId, setForceEditProjectId] = useState<string | null>(null);
  const descPopupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (fullProject?.description !== undefined) {
      setDescBuffer(fullProject.description);
    }
  }, [fullProject?.id, fullProject?.description]); // ← only when switching projects

  // Removed redundant effect that used `projects`

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (descPopupRef.current && !descPopupRef.current.contains(e.target as Node)) {
        if (currentProject) {
          const oldDesc = (fullProject?.description ?? "").trim();
          const newDesc = descBuffer.trim();
          if (newDesc !== oldDesc) {
            updateProjectOptimistic(currentProject, { description: newDesc }).catch(err => {
                                    setToastError((err as Error).message || "Failed to update project description");
            });
          }
        }
        setShowDescription(false);
      }
    };
    if (showDescription) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showDescription, descBuffer, currentProject, updateProjectOptimistic, fullProject?.description, setToastError]);

  if (!currentUser) {
    return (
      <div className="auth-container">
        <h1 className="auth-title">Welcome to TAKO</h1>
        <div className="auth-forms">
          <div className="auth-card">
            <h2 className="auth-card-title">Create an Account</h2>
            <SignUp />
          </div>
          <div className="auth-separator">OR</div>
          <div className="auth-card">
            <h2 className="auth-card-title">Log In</h2>
            <SignIn />
          </div>
        </div>
      </div>
    );
  }

  return (
    <ErrorBoundary>
      <DragDropProvider>
        <div className="app-wrapper">
          <div className={`app-content ${!currentProject ? 'home-screen' : ''}`}>
            <div className="sidebar">
              <div className="project-tab-list">
                <ProjectTabs
                  projects={[...projectSummaries].sort((a, b) => a.order - b.order)}
                  currentProject={currentProject}
                  setCurrentProject={handleSetCurrentProject}
                  addProject={createProjectOptimistic}
                  deleteProject={deleteProject}
                  updateProject={updateProjectOptimistic}
                  forceEditProjectId={forceEditProjectId}
                  setForceEditProjectId={setForceEditProjectId}
                  setToastError={setToastError}
                  projectData={projectData}
                  loadingProjects={loadingProjects}
                  isProjectLoading={isProjectLoading}
                  getProjectError={getProjectError}
                  clearProjectError={clearProjectError}
                  loadingSidebar={loadingSidebar}
                  loadingInitialData={loadingInitialData}
                />
              </div>
              <div className="user-info">
                Logged in as <strong>{currentUser.email}</strong>
                <button className="logout-button" onClick={logOut}>
                  Log Out
                </button>
              </div>
            </div>

            <div className="main-section">
              <main className="main-panel">
                {!currentProject ? (
                  <HomePage
                    projectSummaries={projectSummaries}
                    refreshProjectSummaries={refreshProjectSummaries}
                    doNowTasks={doNowTasks}
                    doNowTaskCount={doNowTaskCount}
                    tasksCompletedToday={tasksCompletedToday}
                    setCurrentProject={handleSetCurrentProject}
                    addTask={addTask}
                    deleteTask={deleteTask}
                    updateTask={updateTask}
                    loadingDoNow={loadingDoNow}
                    loadingTasks={loadingTasks}
                    loadingInitialData={loadingInitialData}
                  />
                ) : (
                  <ProjectContent
                    currentProject={currentProject}
                    lists={lists}
                    addList={addList}
                    deleteList={deleteList}
                    updateList={updateList}
                    moveList={moveList}
                    addTask={addTask}
                    deleteTask={deleteTask}
                    updateTask={updateTask}
                    reorderTasks={reorderTasks}
                    setToastError={setToastError}
                    loadingProjectContent={loadingProjectContent}
                    loadingTasks={loadingTasks}
                  />
                )}
              </main>
            </div>

          <div className="extra-taskbar">
            {currentProject && (
              <div className="project-actions">
                <button
                  title="Edit Name"
                  onClick={() => setForceEditProjectId(currentProject)}
                >
                  ✏️
                </button>

                <button
                  title="Edit Description"
                  onClick={() => setShowDescription(true)}
                >
                  📄
                </button>
                <button
                  title="Move Up"
                  disabled={isProjectLoading(currentProject, 'update')}
                  onClick={async () => {
                    try {
                      await updateProjectOptimistic(currentProject, { move: "up" });
                    } catch (err) {
                      setToastError((err as Error).message || "Failed to move project up");
                    }
                  }}
                  aria-label="Move project up"
                >
                  {isProjectLoading(currentProject, 'update') ? '⏳' : '⬆️'}
                </button>

                <button
                  title="Move Down"
                  disabled={isProjectLoading(currentProject, 'update')}
                  onClick={async () => {
                    try {
                      await updateProjectOptimistic(currentProject, { move: "down" });
                    } catch (err) {
                      setToastError((err as Error).message || "Failed to move project down");
                    }
                  }}
                  aria-label="Move project down"
                >
                  {isProjectLoading(currentProject, 'update') ? '⏳' : '⬇️'}
                </button>

                <button
                  title="Add List"
                  disabled={isProjectLoading(currentProject, 'update')}
                  onClick={() => addList(currentProject, "Untitled")}
                  aria-label="Add new list to project"
                >
                  ➕
                </button>
                <button
                  title="Delete Project"
                  disabled={isProjectLoading(currentProject, 'delete')}
                  onClick={async () => {
                    const currentIndex = projectSummaries.findIndex(p => p.id === currentProject);
                    const sorted = [...projectSummaries].sort((a, b) => a.order - b.order);
                    const nextProject = sorted[currentIndex + 1] || sorted[currentIndex - 1];

                    try {
                      await deleteProjectOptimistic(currentProject);
                      if (nextProject) handleSetCurrentProject(nextProject.id);
                      else handleSetCurrentProject(null);
                    } catch (err) {
                      setToastError((err as Error).message || "Failed to delete project");
                    }
                  }}
                  aria-label="Delete current project"
                >
                  {isProjectLoading(currentProject, 'delete') ? '⏳' : '🗑️'}
                </button>
              </div>
            )}

            {showDescription && (
              <div className="description-popup" ref={descPopupRef}>
                <textarea
                  autoFocus
                  value={descBuffer}
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setDescBuffer(e.target.value)}
                  onBlur={async () => {
                    if (
                      currentProject &&
                      descBuffer.trim() !== (fullProject?.description ?? "").trim()
                    ) {
                      try {
                        await updateProjectOptimistic(currentProject, { description: descBuffer });
                      } catch (err) {
                        setToastError((err as Error).message || "Failed to update project description");
                      }
                    }
                    setShowDescription(false);
                  }}
                  onKeyDown={(e: React.KeyboardEvent<HTMLTextAreaElement>) => {
                    if (e.key === 'Enter' && e.ctrlKey) {
                      e.preventDefault();
                      e.currentTarget.blur();
                    }
                    if (e.key === 'Escape') {
                      setShowDescription(false);
                    }
                  }}
                  placeholder="Enter project description..."
                  maxLength={1000}
                  aria-label="Project description"
                />
              </div>
            )}
          </div>
        </div>
        {toastError && (
          <div className="toast-error" onClick={() => setToastError(null)}>
            {toastError}
          </div>
        )}

      </div>
    </DragDropProvider>
    </ErrorBoundary>
  );
}

