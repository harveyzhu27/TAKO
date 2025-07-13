import React, { useState, useEffect, useRef, useCallback } from "react";
import { useAuthContext } from "./hooks/useAuth.jsx";
import SignUp from "./components/SignUp.jsx";
import SignIn from "./components/SignIn.jsx";

import ProjectTabs from "./components/ProjectTabs/ProjectTabs.jsx";
import useUserProjects from "./hooks/useUserProjects.jsx";
import HomePage from "./components/HomePage.jsx";
import ProjectContent from "./components/ProjectContent.jsx";

import { DragDropProvider } from "./components/DragDrop.jsx";
// import { ProjectSummary } from "../shared/models/ProjectModel.ts"

import "./App.css";

export default function App() {
  const { currentUser, logOut } = useAuthContext();
  const [toastError, setToastError] = useState(null);
  const [wasOnHomeScreen, setWasOnHomeScreen] = useState(false);
  
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
    allTasks,

    // loading & error
    loading,
    loadingProjects,
    error,

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

    // subtask‐level actions (commented out - subtasks disabled)
    // addSubtask,
    // updateSubtask,
    // deleteSubtask,
  } = useUserProjects();

  // Load home screen preference from localStorage
  useEffect(() => {
    if (currentUser) {
      const savedPreference = localStorage.getItem(`tako-home-screen-${currentUser.uid}`);
      console.log('🔍 Loading home screen preference:', savedPreference, 'for user:', currentUser.uid);
      if (savedPreference === 'true') {
        setWasOnHomeScreen(true);
        originalSetCurrentProject(null);
        console.log('🏠 Set to home screen based on saved preference');
      } else if (savedPreference === 'false') {
        setWasOnHomeScreen(false);
        console.log('📁 User prefers projects, will set to first project if available');
      }
    }
  }, [currentUser, originalSetCurrentProject]);

  // Save home screen preference to localStorage
  const handleSetCurrentProject = useCallback((projectId) => {
    originalSetCurrentProject(projectId);
    if (currentUser) {
      if (projectId === null) {
        // User is going to home screen
        localStorage.setItem(`tako-home-screen-${currentUser.uid}`, 'true');
        setWasOnHomeScreen(true);
        console.log('🏠 User going to home screen, saved preference');
      } else {
        // User is going to a project
        localStorage.setItem(`tako-home-screen-${currentUser.uid}`, 'false');
        setWasOnHomeScreen(false);
        console.log('📁 User going to project:', projectId, 'saved preference');
      }
    }
  }, [currentUser, originalSetCurrentProject]);

  const [showDescription, setShowDescription] = useState(false);
  const [descBuffer, setDescBuffer] = useState("");
  const [forceEditProjectId, setForceEditProjectId] = useState(null);
  const descPopupRef = useRef(null);

  useEffect(() => {
    if (fullProject?.description !== undefined) {
      setDescBuffer(fullProject.description);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [fullProject?.id]); // ← only when switching projects

  // Removed redundant effect that used `projects`

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (descPopupRef.current && !descPopupRef.current.contains(e.target)) {
        if (currentProject) {
          const oldDesc = (fullProject?.description ?? "").trim();
          const newDesc = descBuffer.trim();
          if (newDesc !== oldDesc) {
            updateProject(currentProject, { description: newDesc });
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
  }, [showDescription, descBuffer, currentProject, updateProject]);

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

  if (loading) {
    return <div className="loading">Loading…</div>;
  }

  return (
    <DragDropProvider>
      <div className="app-wrapper">
        <div className={`app-content ${!currentProject ? 'home-screen' : ''}`}>
          <div className="sidebar">
            <div className="project-tab-list">
              <ProjectTabs
                projects={[...projectSummaries].sort((a, b) => a.order - b.order)}
                currentProject={currentProject}
                setCurrentProject={handleSetCurrentProject}
                addProject={addProject}
                deleteProject={deleteProject}
                updateProject={updateProject}
                forceEditProjectId={forceEditProjectId}
                setForceEditProjectId={setForceEditProjectId}
                setToastError={setToastError}
                projectData={projectData}
                loadingProjects={loadingProjects}
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
                  setToastError={setToastError}
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
                  onClick={async () => {
                    try {
                      await updateProject(currentProject, { move: "up" });
                    } catch (err) {
                      console.error("Failed to move project up", err);
                    }
                  }}
                >
                  ⬆️
                </button>

                <button
                  title="Move Down"
                  onClick={async () => {
                    try {
                      await updateProject(currentProject, { move: "down" });
                    } catch (err) {
                      console.error("Failed to move project down", err);
                    }
                  }}
                >
                  ⬇️
                </button>

                <button
                  title="Add List"
                  onClick={() => addList(currentProject, "Untitled")}
                >
                  ➕
                </button>
                <button
                  title="Delete Project"
                  onClick={() => {
                    const currentIndex = projectSummaries.findIndex(p => p.id === currentProject);
                    const sorted = [...projectSummaries].sort((a, b) => a.order - b.order);
                    const nextProject = sorted[currentIndex + 1] || sorted[currentIndex - 1];

                    deleteProject(currentProject).then(() => {
                      if (nextProject) handleSetCurrentProject(nextProject.id);
                      else handleSetCurrentProject(null);
                    });
                  }}
                >
                  🗑️
                </button>
              </div>
            )}

            {showDescription && (
              <div className="description-popup" ref={descPopupRef}>
                <textarea
                  autoFocus
                  value={descBuffer}
                  onChange={(e) => setDescBuffer(e.target.value)}
                  onBlur={() => {
                    if (
                      currentProject &&
                      descBuffer.trim() !== (fullProject?.description ?? "").trim()
                    ) {
                      updateProject(currentProject, { description: descBuffer });
                    }
                    setShowDescription(false);
                  }}
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
  );
}
