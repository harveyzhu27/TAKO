import React, { useEffect, useState, useCallback, useRef, Suspense } from 'react';
import HabitTracker from './HabitTracker.jsx';
import DoNowList from './DoNowList.jsx';
import NLP from './NLP.jsx';
import './HomePage.css';

const HomePageComponent = React.lazy(() => Promise.resolve({
  default: function HomePageComponent({ projectSummaries, refreshProjectSummaries, doNowTasks = [], doNowTaskCount = 0, tasksCompletedToday = 0, setCurrentProject, addTask, deleteTask, updateTask }) {
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
    // useEffect(() => {
    //   backgroundRefresh();

    //   const intervalId = setInterval(() => {
    //     backgroundRefresh();
    //   }, 30000);

    //   return () => {
    //     clearInterval(intervalId);
    //     if (refreshTimeout.current) {
    //       clearTimeout(refreshTimeout.current);
    //     }
    //   };
    // }, [backgroundRefresh, refreshTimeout]);

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

    // Persistent thoughts box state
    const [thoughts, setThoughts] = useState(() => {
      return localStorage.getItem('tako-thoughts') || '';
    });
    useEffect(() => {
      localStorage.setItem('tako-thoughts', thoughts);
    }, [thoughts]);

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

    // Calculate due today and due tomorrow counts from project summaries
    // This is much more efficient than filtering allTasks
    const dueTodayCount = projectSummaries.reduce((sum, project) => {
      return sum + (project.dueTodayCount || 0);
    }, 0);
    
    const dueTomorrowCount = projectSummaries.reduce((sum, project) => {
      return sum + (project.dueTomorrowCount || 0);
    }, 0);

    return (
      <div className="home-page">
        <div className="home-content">
          
          <div className="task-summary">
            <div className="task-counter">
              <div className="task-number">
                {remainingTasks}
                {isRefreshing && <span className="refresh-indicator" title="Updating...">⟳</span>}
              </div>
              <div className="task-label">Tasks Remaining</div>
              {/* <button 
                className="manual-refresh-btn"
                onClick={() => backgroundRefresh(true)}
                disabled={isRefreshing}
                title="Refresh project data"
              >
                Refresh
              </button> */}
            </div>
            
            <div className="task-stats">
              {/* <div className="stat-item">
                <div className="stat-number">{doNowTaskCount}</div>
                <div className="stat-label">Do Now</div>
              </div> */}
              <div className="stat-item">
                <div className="stat-number">{dueTodayCount}</div>
                <div className="stat-label">Due Today</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">{dueTomorrowCount}</div>
                <div className="stat-label">Due Tomorrow</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">{tasksCompletedToday}</div>
                <div className="stat-label">Completed Today</div>
              </div>
            </div>
          </div>
          
          {/* Flex row for Do Now and Thoughts */}
          <div className="do-now-thoughts-row">
            <div className="do-now-list-container">
              <DoNowList
                projectId="global"
                tasks={doNowTasks}
                addTask={addTask}
                deleteTask={deleteTask}
                updateTask={updateTask}
                addSubtask={() => {}}
                deleteSubtask={() => {}}
                updateSubtask={() => {}}
              />
            </div>
            <div className="thoughts-box-wrapper">
              <textarea
                className="thoughts-box"
                placeholder="Type your thoughts here..."
                value={thoughts}
                onChange={e => setThoughts(e.target.value)}
                rows={8}
              />
            </div>
          </div>
          <HabitTracker />
        </div>
      </div>
    );
  }
}));

function HomePage(props) {
  return (
    <Suspense fallback={<div className="home-page-loading">Loading home page...</div>}>
      <HomePageComponent {...props} />
    </Suspense>
  );
}

export default HomePage; 