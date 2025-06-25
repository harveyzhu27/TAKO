import React, { useState, useEffect, useRef } from "react";
import { useAuthContext } from "./hooks/useAuth.jsx";
import SignUp from "./components/SignUp.jsx";
import SignIn from "./components/SignIn.jsx";

import ProjectTabs from "./components/ProjectTabs/ProjectTabs.jsx";
import TaskList from "./components/TaskList/TaskList.jsx";
import useUserProjects from "./hooks/useUserProjects.jsx";
import List from "./components/List/List.jsx";
// import { ProjectSummary } from "../shared/models/ProjectModel.ts"

import "./App.css";

export default function App() {
  const { currentUser, logOut } = useAuthContext();

  const {
    projectSummaries,
    currentProject,
    setCurrentProject,

    lists,
    fullProject,           // Project|null, or null if none selected

    // loading & error
    loading,
    error,

    // project‐level actions
    addProject,
    updateProject,
    deleteProject,

    // list‐level actions
    addList,
    updateList,
    deleteList,
    moveList,

    // task‐level actions
    addTask,
    updateTask,
    deleteTask,

    // subtask‐level actions
    addSubtask,
    updateSubtask,
    deleteSubtask,
  } = useUserProjects();

  const [showDescription, setShowDescription] = useState(false);
  const [descBuffer, setDescBuffer] = useState("");
  const [forceEditProjectId, setForceEditProjectId] = useState(null);
  const descPopupRef = useRef(null);

  useEffect(() => {
    setDescBuffer(fullProject?.description || "");
  }, [fullProject]);

  // Removed redundant effect that used `projects`

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (descPopupRef.current && !descPopupRef.current.contains(e.target)) {
        if (currentProject) {
          updateProject(currentProject, { description: descBuffer });
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
    <div className="app-wrapper">
      <div className="app-content">
        <div className="sidebar">
          <div className="project-tab-list">
            <ProjectTabs
              projects={[...projectSummaries].sort((a, b) => a.order - b.order)} 
              currentProject={currentProject}
              setCurrentProject={setCurrentProject}
              addProject={addProject}
              deleteProject={deleteProject}
              updateProject={updateProject}
              forceEditProjectId={forceEditProjectId}
              setForceEditProjectId={setForceEditProjectId}
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
            <div className="list-task-container">
              {lists
                .slice()  // copy before sort
                .sort((a, b) => a.order - b.order)
                .map((list, idx) => (
                  <div key={list.id} className="list-wrapper">
                    <List
                      projectId={currentProject}
                      list={list}
                      lists={lists}
                      addList={addList}
                      deleteList={deleteList}
                      updateList={updateList}
                      moveList={moveList}
                      addTask={addTask}
                      deleteTask={deleteTask}
                      updateTask={updateTask}
                      addSubtask={addSubtask}
                      deleteSubtask={deleteSubtask}
                      updateSubtask={updateSubtask}
                      listCount={lists.length}
                      isLeftmost={idx === 0}
                      isRightmost={idx === lists.length - 1}
                    />
                  </div>
                ))}

            </div>
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
                    if (nextProject) setCurrentProject(nextProject.id);
                    else setCurrentProject(null);
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
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
