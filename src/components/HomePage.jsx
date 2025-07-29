import React, { useEffect, useState, useCallback, useRef, Suspense, useMemo } from 'react';
import HabitTracker from './HabitTracker.jsx';
import DoNowList from './DoNowList.jsx';
import NLP from './NLP.jsx';
import { useCurrentTime } from '../hooks/useCurrentTime.js';
import { formatDeadline, getDeadlineClass } from '../utils/dateUtils.js';
import { validateThoughts } from '../utils/validation.js';
import './HomePage.css';

const HomePageComponent = React.lazy(() => Promise.resolve({
  default: function HomePageComponent({ projectSummaries, refreshProjectSummaries, doNowTasks = [], doNowTaskCount = 0, tasksCompletedToday = 0, setCurrentProject, addTask, deleteTask, updateTask }) {
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [lastRefreshTime, setLastRefreshTime] = useState(Date.now());
    const currentTime = useCurrentTime(); // Use custom hook for efficient time updates
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



    // Persistent thoughts box state with validation
    const [thoughts, setThoughts] = useState(() => {
      const saved = localStorage.getItem('tako-thoughts');
      if (saved) {
        const validation = validateThoughts(saved);
        return validation.isValid ? validation.sanitized : '';
      }
      return '';
    });
    
    const handleThoughtsChange = useCallback((e) => {
      const newValue = e.target.value;
      const validation = validateThoughts(newValue);
      
      if (validation.isValid) {
        setThoughts(validation.sanitized);
      }
      // If invalid, don't update state (prevents invalid input)
    }, []);
    
    useEffect(() => {
      localStorage.setItem('tako-thoughts', thoughts);
    }, [thoughts]);

    // Calculate remaining tasks across all projects
    // taskCount already represents incomplete tasks (where completedAt is null)
    const remainingTasks = projectSummaries.reduce((sum, project) => {
      return sum + (project.taskCount || 0);
    }, 0);

    // Memoized date calculations using utility functions
    const memoizedDateCalculations = useMemo(() => {
      return {
        formatDeadline: (daysFromNow) => formatDeadline(daysFromNow, currentTime),
        deadlineClass: (daysFromNow) => getDeadlineClass(daysFromNow, currentTime)
      };
    }, [currentTime]);

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
          
          <div className="task-summary" role="region" aria-label="Task summary">
            <div className="task-counter">
              <div className="task-number" aria-live="polite">
                {remainingTasks}
                {isRefreshing && <span className="refresh-indicator" title="Updating..." aria-label="Updating data">⟳</span>}
              </div>
              <div className="task-label">Tasks Remaining</div>
              {/* <button 
                className="manual-refresh-btn"
                onClick={() => backgroundRefresh(true)}
                disabled={isRefreshing}
                title="Refresh project data"
                aria-label="Refresh project data"
              >
                Refresh
              </button> */}
            </div>
            
            <div className="task-stats" role="group" aria-label="Task statistics">
              {/* <div className="stat-item">
                <div className="stat-number">{doNowTaskCount}</div>
                <div className="stat-label">Do Now</div>
              </div> */}
              <div className="stat-item" role="group" aria-label="Due today tasks">
                <div className="stat-number" aria-live="polite">{dueTodayCount}</div>
                <div className="stat-label">Due Today</div>
              </div>
              <div className="stat-item" role="group" aria-label="Due tomorrow tasks">
                <div className="stat-number" aria-live="polite">{dueTomorrowCount}</div>
                <div className="stat-label">Due Tomorrow</div>
              </div>
              <div className="stat-item" role="group" aria-label="Tasks completed today">
                <div className="stat-number" aria-live="polite">{tasksCompletedToday}</div>
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
                onChange={handleThoughtsChange}
                rows={8}
                maxLength={5000}
                aria-label="Thoughts and notes"
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