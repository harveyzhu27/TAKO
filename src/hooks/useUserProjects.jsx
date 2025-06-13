// src/hooks/useUserProjects.js

import { useState, useEffect, useCallback } from "react";
import { doc, onSnapshot, setDoc, updateDoc } from "firebase/firestore";
import { useAuthContext } from "./useAuth";
import { db } from "../firebase";

/**
 * useUserProjects
 *
 * Custom hook to manage a user’s projects/tasks in Firestore.
 * Stores all data in a single document at `users/{uid}`:
 *   {
 *     projects: {
 *       Personal: [ { name, due, done, completedAt?, subtasks: [ { name, done } ] }, … ],
 *       Work: [ … ],
 *       …
 *     },
 *     currentProject: "Personal"
 *   }
 *
 * Returns:
 *   - projects: an object mapping projectName → array of task objects
 *   - currentProject: string
 *   - setCurrentProject(projectName)
 *   - addProject(projectName)
 *   - deleteProject(projectName)
 *   - addTask(taskObject)
 *   - deleteTask(taskName)
 *   - checkTask(taskName)
 *   - editTask(taskName, updatedFields)
 *   - addSubtask(taskName, subtaskObject)
 *   - checkSubtask(taskName, subtaskName)
 *   - deleteSubtask(taskName, subtaskName)
 *   - editSubtask(taskName, subtaskName, updatedFields)
 *   - loading: boolean (true while initial Firestore snapshot is loading)
 */

export default function useUserProjects() {
  const { currentUser } = useAuthContext();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Subscribe to Firestore document for this user
  useEffect(() => {
    if (!currentUser) {
      setUserData(null);
      setLoading(false);
      return;
    }

    setLoading(true);
    const userDocRef = doc(db, "users", currentUser.uid);

    // Listener
    const unsubscribe = onSnapshot(
      userDocRef, (snapshot) => {
        if (snapshot.exists()) {
          setUserData(snapshot.data());
          setLoading(false);
        } else {
          // If no document yet, create with default structure
          const initialData = {
            projects: {
              Home: {
                tasks: [],
                createdAt: Date.now()
              }
            },
            currentProject: "Home",
          };
          setDoc(userDocRef, initialData)
            .then(() => {
              setUserData(initialData);
              setLoading(false);
            })
            .catch((error) => {
              console.error("Error initializing user data:", error);
              setLoading(false);
            });
        }
      },
      (error) => {
        console.error("Error fetching user document:", error);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, [currentUser]);

  // Helper to update user document
  const writeUserData = useCallback(
    async (newFields) => {
      if (!currentUser) return;
      const userDocRef = doc(db, "users", currentUser.uid);
      try {
        await updateDoc(userDocRef, newFields);
      } catch (error) {
        console.error("Error updating user data:", error);
      }
    },
    [currentUser]
  );

  // Add a new project
  const addProject = useCallback(
    async (projectName) => {
      if (!userData) return false;
      const trimmed = projectName.trim();
      if (trimmed === "" || userData.projects.hasOwnProperty(trimmed)) return false;

      const updatedProjects = {
        ...userData.projects,
        [trimmed]: {
          tasks: [], 
          createdAt: Date.now()},
      };
      // id
      // order id
      // tasks

      await writeUserData({
        projects: updatedProjects,
        currentProject: trimmed,
      });
      return true;
    },
    [userData, writeUserData]
  );

  // Delete an existing project
  const deleteProject = useCallback(
    async (projectName) => {
      if (!userData) return;
      if (!userData.projects.hasOwnProperty(projectName)) return;

      let allProjects = { ...userData.projects };
      delete allProjects[projectName];

      let newCurrent = userData.currentProject;
      if (userData.currentProject === projectName) {
        const remainingKeys = Object.keys(allProjects);
        if (remainingKeys.length > 0) {
          newCurrent = remainingKeys[0];
        } else {
          newCurrent = "Home";
          allProjects = { Home: { tasks: [], createdAt: Date.now() } };
        }
      }

      await writeUserData({
        projects: allProjects,
        currentProject: newCurrent,
      });
    },
    [userData, writeUserData]
  );

  // Change the selected project
  const setCurrentProject = useCallback(
    async (projectName) => {
      if (!userData) return;
      if (!userData.projects.hasOwnProperty(projectName)) return;
      await writeUserData({ currentProject: projectName });
    },
    [userData, writeUserData]
  );

  // Add a new task to the current project
  const addTask = useCallback(
    async (taskObj) => {
      if (!userData) return;
      const cp = userData.currentProject;
      if (!cp) return;

const existingTasks = userData.projects[cp]?.tasks || [];      
const updatedTasks = [...existingTasks, taskObj];

      const updatedProjects = {
        ...userData.projects,
        [cp]: updatedTasks,
      };
      await writeUserData({ projects: updatedProjects });
    },
    [userData, writeUserData]
  );

  // Delete a task by name
  const deleteTask = useCallback(
    async (taskName) => {
      if (!userData) return;
      const cp = userData.currentProject;
      if (!cp) return;
      const existingTasks = userData.projects[cp] || [];
      const filtered = existingTasks.filter((t) => t.name !== taskName);

      const updatedProjects = {
        ...userData.projects,
        [cp]: filtered,
      };
      await writeUserData({ projects: updatedProjects });
    },
    [userData, writeUserData]
  );

  // Toggle done/undone for a task
  const checkTask = useCallback(
    async (taskName) => {
      if (!userData) return;
      const cp = userData.currentProject;
      if (!cp) return;
      const existingTasks = userData.projects[cp] || [];

      const updatedTasks = existingTasks.map((t) => {
        if (t.name === taskName) {
          const now = new Date().toISOString();
          if (!t.done) {
            return { ...t, done: true, completedAt: now };
          } else {
            const { completedAt, ...rest } = t;
            return { ...rest, done: false };
          }
        }
        return t;
      });

      const updatedProjects = {
        ...userData.projects,
        [cp]: updatedTasks,
      };
      await writeUserData({ projects: updatedProjects });
    },
    [userData, writeUserData]
  );

  // Edit a task’s fields
  const editTask = useCallback(
    async (taskName, updatedFields) => {
      if (!userData) return;
      const cp = userData.currentProject;
      if (!cp) return;
      const existingTasks = userData.projects[cp] || [];

      const updatedTasks = existingTasks.map((t) =>
        t.name === taskName ? { ...t, ...updatedFields } : t
      );

      const updatedProjects = {
        ...userData.projects,
        [cp]: updatedTasks,
      };
      await writeUserData({ projects: updatedProjects });
    },
    [userData, writeUserData]
  );

  // Add a subtask to a task
  const addSubtask = useCallback(
    async (taskName, subtaskObj) => {
      if (!userData) return;
      const cp = userData.currentProject;
      if (!cp) return;
      const existingTasks = userData.projects[cp] || [];

      const updatedTasks = existingTasks.map((t) => {
        if (t.name === taskName) {
          const existingSubs = t.subtasks || [];
          if (
            existingSubs.some(
              (s) =>
                s.name.trim().toLowerCase() ===
                subtaskObj.name.trim().toLowerCase()
            )
          ) {
            return t;
          }
          return { ...t, subtasks: [...existingSubs, subtaskObj] };
        }
        return t;
      });

      const updatedProjects = {
        ...userData.projects,
        [cp]: updatedTasks,
      };
      await writeUserData({ projects: updatedProjects });
    },
    [userData, writeUserData]
  );

  // Toggle done/undone for a subtask
  const checkSubtask = useCallback(
    async (taskName, subtaskName) => {
      if (!userData) return;
      const cp = userData.currentProject;
      if (!cp) return;
      const existingTasks = userData.projects[cp] || [];

      const updatedTasks = existingTasks.map((t) => {
        if (t.name === taskName) {
          const existingSubs = t.subtasks || [];
          const newSubs = existingSubs.map((s) =>
            s.name === subtaskName ? { ...s, done: !s.done } : s
          );
          return { ...t, subtasks: newSubs };
        }
        return t;
      });

      const updatedProjects = {
        ...userData.projects,
        [cp]: updatedTasks,
      };
      await writeUserData({ projects: updatedProjects });
    },
    [userData, writeUserData]
  );

  // Delete a subtask
  const deleteSubtask = useCallback(
    async (taskName, subtaskName) => {
      if (!userData) return;
      const cp = userData.currentProject;
      if (!cp) return;
      const existingTasks = userData.projects[cp] || [];

      const updatedTasks = existingTasks.map((t) => {
        if (t.name === taskName) {
          const filteredSubs = (t.subtasks || []).filter(
            (s) => s.name !== subtaskName
          );
          return { ...t, subtasks: filteredSubs };
        }
        return t;
      });

      const updatedProjects = {
        ...userData.projects,
        [cp]: updatedTasks,
      };
      await writeUserData({ projects: updatedProjects });
    },
    [userData, writeUserData]
  );

  // Edit a subtask’s fields
  const editSubtask = useCallback(
    async (taskName, subtaskName, updates) => {
      if (!userData) return;
      const cp = userData.currentProject;
      if (!cp) return;
      const existingTasks = userData.projects[cp] || [];

      const updatedTasks = existingTasks.map((t) => {
        if (t.name === taskName) {
          const existingSubs = t.subtasks || [];
          const newSubs = existingSubs.map((s) =>
            s.name === subtaskName ? { ...s, ...updates } : s
          );
          return { ...t, subtasks: newSubs };
        }
        return t;
      });

      const updatedProjects = {
        ...userData.projects,
        [cp]: updatedTasks,
      };
      await writeUserData({ projects: updatedProjects });
    },
    [userData, writeUserData]
  );

  return {
    projects: userData?.projects || {},
    currentProject: userData?.currentProject || "Personal",
    setCurrentProject,
    addProject,
    deleteProject,
    addTask,
    deleteTask,
    checkTask,
    editTask,
    addSubtask,
    checkSubtask,
    deleteSubtask,
    editSubtask,
    loading,
  };
}
