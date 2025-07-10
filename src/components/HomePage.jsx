import React, { useEffect, useState, useCallback, useRef } from 'react';
import './HomePage.css';

function HomePage({ projectSummaries, refreshProjectSummaries, doNowTasks = [], doNowTaskCount = 0, tasksCompletedToday = 0, allTasks = [] }) {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [lastRefreshTime, setLastRefreshTime] = useState(Date.now());
  const [now, setNow] = useState(Date.now()); // For live updates
  const refreshTimeout = useRef(null);

  // Debounced background refresh function
  const backgroundRefresh = useCallback(async (immediate = false) => {
    if (isRefreshing) return; // Prevent multiple simultaneous refreshes

    // Clear any pending timeout
    if (refreshTimeout.current) {
      clearTimeout(refreshTimeout.current);
      refreshTimeout.current = null;
    }
    
    // If not immediate, debounce the refresh
    if (!immediate) {
      refreshTimeout.current = setTimeout(() => {
        backgroundRefresh(true);
      }, 2000); // 2 second debounce
      return;
    }
    
    try {
      setIsRefreshing(true);
      await refreshProjectSummaries();
      setLastRefreshTime(Date.now());
    } catch (error) {
      console.error('Background refresh failed:', error);
    } finally {
      setIsRefreshing(false);
    }
  }, [refreshProjectSummaries, isRefreshing, refreshTimeout]);

  // Set up automatic background refresh
  useEffect(() => {
    backgroundRefresh();

    const intervalId = setInterval(() => {
      backgroundRefresh();
    }, 30000);

    return () => {
      clearInterval(intervalId);
      if (refreshTimeout.current) {
        clearTimeout(refreshTimeout.current);
      }
    };
  }, [backgroundRefresh, refreshTimeout]);

  // Also refresh when user becomes visible (tab becomes active)
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        const timeSinceLastRefresh = Date.now() - lastRefreshTime;
        if (timeSinceLastRefresh > 5000) {
          backgroundRefresh(true);
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, [backgroundRefresh, lastRefreshTime]);

  // Timer to update 'now' every minute for live due date updates
  useEffect(() => {
    const interval = setInterval(() => setNow(Date.now()), 60000);
    return () => clearInterval(interval);
  }, []);

  // Calculate remaining tasks across all projects
  // taskCount already represents incomplete tasks (where completedAt is null)
  const remainingTasks = projectSummaries.reduce((sum, project) => {
    return sum + (project.taskCount || 0);
  }, 0);

  // Helper function to calculate days from now for a given due date
  const calculateDaysFromNow = (dueDate) => {
    if (!dueDate) return null;
    const today = new Date(now);
    today.setHours(0, 0, 0, 0);
    const due = new Date(dueDate);
    due.setHours(0, 0, 0, 0);
    return Math.floor((due - today) / (1000 * 60 * 60 * 24));
  };

  // Format deadline using days from now with real-time tracking
  const formatDeadline = (daysFromNow) => {
    if (daysFromNow === null || daysFromNow === undefined || daysFromNow === '') return '';
    
    // Ensure daysFromNow is a number
    const days = typeof daysFromNow === 'string' ? Number(daysFromNow) : daysFromNow;
    
    // Calculate the actual due date based on days from now
    const today = new Date(now);
    today.setHours(0, 0, 0, 0);
    const dueDate = new Date(today);
    dueDate.setDate(today.getDate() + days);
    
    // Calculate days difference from today
    const nowDate = new Date(now);
    nowDate.setHours(0, 0, 0, 0);
    const diffDays = Math.floor((dueDate - nowDate) / (1000 * 60 * 60 * 24));
    
    if (diffDays < 0) return 'Overdue';
    if (diffDays === 0) return 'Due Today';
    if (diffDays === 1) return 'Due Tomorrow';
    return `Due in ${diffDays} days`;
  };

  // Helper for color class
  const deadlineClass = (daysFromNow) => {
    if (daysFromNow === null || daysFromNow === undefined || daysFromNow === '') return '';
    const days = typeof daysFromNow === 'string' ? Number(daysFromNow) : daysFromNow;
    const today = new Date(now);
    today.setHours(0, 0, 0, 0);
    const dueDate = new Date(today);
    dueDate.setDate(today.getDate() + days);
    const nowDate = new Date(now);
    nowDate.setHours(0, 0, 0, 0);
    const diffDays = Math.floor((dueDate - nowDate) / (1000 * 60 * 60 * 24));
    if (diffDays < 0) return 'overdue';
    if (diffDays === 0) return 'due-today';
    if (diffDays === 1) return 'due-tomorrow';
    return '';
  };

  // Calculate due today and due tomorrow tasks from allTasks
  const dueTodayTasks = allTasks.filter(task => {
    if (task.completedAt) return false; // Skip completed tasks
    if (task.dueDate === null || task.dueDate === undefined) return false;
    
    const today = new Date(now);
    today.setHours(0, 0, 0, 0);
    const dueDate = new Date(today);
    dueDate.setDate(today.getDate() + task.dueDate);
    const dueDateTimestamp = dueDate.getTime();
    
    return dueDateTimestamp === today.getTime();
  });

  const dueTomorrowTasks = allTasks.filter(task => {
    if (task.completedAt) return false; // Skip completed tasks
    if (task.dueDate === null || task.dueDate === undefined) return false;
    
    const today = new Date(now);
    today.setHours(0, 0, 0, 0);
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    const dueDate = new Date(today);
    dueDate.setDate(today.getDate() + task.dueDate);
    const dueDateTimestamp = dueDate.getTime();
    
    return dueDateTimestamp === tomorrow.getTime();
  });

  const dueTodayCount = dueTodayTasks.length;
  const dueTomorrowCount = dueTomorrowTasks.length;

  return (
    <div className="home-page">
      <div className="home-content">
        <h1 className="home-title">Welcome to TAKO</h1>
        
        <div className="task-summary">
          <div className="task-counter">
            <div className="task-number">
              {remainingTasks}
              {isRefreshing && <span className="refresh-indicator" title="Updating...">⟳</span>}
            </div>
            <div className="task-label">Tasks Remaining</div>
            <button 
              className="manual-refresh-btn"
              onClick={() => backgroundRefresh(true)}
              disabled={isRefreshing}
              title="Refresh task counts"
            >
              {isRefreshing ? '⟳' : '↻'}
            </button>
            <div className="last-updated">
              Last updated: {new Date(lastRefreshTime).toLocaleTimeString()}
            </div>
          </div>
          
          <div className="completed-today-counter">
            <div className="completed-number">
              {tasksCompletedToday}
            </div>
            <div className="completed-label">Completed Today</div>
          </div>
          
          <div className="task-breakdown">
            <div className="breakdown-item">
              <span className="breakdown-number">{projectSummaries.length}</span>
              <span className="breakdown-label">Projects</span>
            </div>
            <div className="breakdown-item">
              <span className="breakdown-number">{projectSummaries.filter(p => (p.taskCount || 0) > 0).length}</span>
              <span className="breakdown-label">Active Projects</span>
            </div>
          </div>
        </div>

        <div className="due-tasks-section">
          <div className="due-today-card">
            <h3>Due Today</h3>
            <div className="due-count">{dueTodayCount}</div>
            <div className="due-tasks-list">
              {dueTodayTasks.length === 0 ? (
                <p className="no-tasks">No tasks due today</p>
              ) : (
                dueTodayTasks.slice(0, 5).map(task => (
                  <div key={task.id} className="due-task-item">
                    <span className="task-name">{task.name}</span>
                    <span className="task-project">{projectSummaries.find(p => p.id === task.projectId)?.name || 'Unknown Project'}</span>
                  </div>
                ))
              )}
              {dueTodayTasks.length > 5 && (
                <p className="more-tasks">+{dueTodayTasks.length - 5} more tasks</p>
              )}
            </div>
          </div>
          
          <div className="due-tomorrow-card">
            <h3>Due Tomorrow</h3>
            <div className="due-count">{dueTomorrowCount}</div>
            <div className="due-tasks-list">
              {dueTomorrowTasks.length === 0 ? (
                <p className="no-tasks">No tasks due tomorrow</p>
              ) : (
                dueTomorrowTasks.slice(0, 5).map(task => (
                  <div key={task.id} className="due-task-item">
                    <span className="task-name">{task.name}</span>
                    <span className="task-project">{projectSummaries.find(p => p.id === task.projectId)?.name || 'Unknown Project'}</span>
                  </div>
                ))
              )}
              {dueTomorrowTasks.length > 5 && (
                <p className="more-tasks">+{dueTomorrowTasks.length - 5} more tasks</p>
              )}
            </div>
          </div>
        </div>

        <div className="do-now-section">
          <h2>🚀 Do Now</h2>
          <div className="do-now-tasks">
            {doNowTasks.length === 0 ? (
              <p className="no-tasks">No Do Now tasks yet. Add some immediate priorities!</p>
            ) : (
              doNowTasks.slice(0, 5).map(task => (
                <div key={task.id} className="do-now-task-item">
                  <span className={`task-name ${task.completedAt ? "completed" : ""}`}>
                    {task.name}
                  </span>
                  {task.dueDate && (
                    <span className={`task-deadline ${deadlineClass(task.dueDate)}`}>
                      {formatDeadline(task.dueDate)}
                    </span>
                  )}
                </div>
              ))
            )}
            {doNowTasks.length > 5 && (
              <p className="more-tasks">+{doNowTasks.length - 5} more tasks</p>
            )}
          </div>
        </div>

        <div className="project-overview">
          <h2>Your Projects</h2>
          {projectSummaries.length === 0 ? (
            <p className="no-projects">No projects yet. Create your first project to get started!</p>
          ) : (
            <div className="project-list">
              {projectSummaries.map((project) => (
                <div key={project.id} className="project-item">
                  <div className="project-name">{project.name}</div>
                  <div className="project-task-count">
                    {project.taskCount || 0} remaining
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default HomePage; 