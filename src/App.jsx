// src/App.jsx
import React from "react";
import { useAuthContext } from "./hooks/useAuth.jsx";
import SignUp from "./components/SignUp.jsx";
import SignIn from "./components/SignIn.jsx";

import ProjectTabs from "./components/ProjectTabs/ProjectTabs.jsx";
import TaskList from "./components/TaskList/TaskList.jsx";
import useUserProjects from "./hooks/useUserProjects.jsx";
import List from "./components/List/List.jsx";

import "./App.css";

export default function App() {
  const { currentUser, logOut } = useAuthContext();

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

  const {
    projects,
    currentProject,
    setCurrentProject,
    addProject,
    deleteProject,
    moveProjectUp,
    moveProjectDown,
    renameProject,
    addTask,
    deleteTask,
    checkTask,
    editTask,
    addSubtask,
    checkSubtask,
    deleteSubtask,
    editSubtask,
    lists,
    loading,
  } = useUserProjects();

  if (loading) {
    return (
      <div style={{ color: "white", textAlign: "center", marginTop: "2rem" }}>
        Loading…
      </div>
    );
  }

  return (
    <div className="app-wrapper">
      <header className="app-header">
        <div className="header-spacer" />
        <div className="user-info">
          Logged in as <strong>{currentUser.email}</strong>
          <button className="logout-button" onClick={logOut}>
            Log Out
          </button>
        </div>
      </header>

      <div className="app-content">
        <aside className="sidebar">
          <ProjectTabs
            projects={projects}
            currentProject={currentProject}
            setCurrentProject={setCurrentProject}
            addProject={addProject}
          />
        </aside>

        <div className="main-section">
          <main className="main-panel">
            <div className="list-task-container">
              {lists.map((list) => (
                <div key = {list.id} className = "list-wrapper">
                <List
                  list={list}
                  addTask={(taskName) =>
                    addTask(currentProject, list.id, taskName)
                  }
  
                />
                </div>
              ))}
              <TaskList
                projects={projects}
                currentProject={currentProject}
                addTask={addTask}
                checkTask={checkTask}
                deleteTask={deleteTask}
                editTask={editTask}
                addSubtask={addSubtask}
                checkSubtask={checkSubtask}
                deleteSubtask={deleteSubtask}
                editSubtask={editSubtask}
                moveProjectUp={moveProjectUp}
                moveProjectDown={moveProjectDown}
                renameProject={renameProject}
                deleteProject={deleteProject}
              />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
