import { useState, useEffect, useCallback } from 'react';

/**
 * Custom hook for managing current time with efficient updates
 * Only triggers re-renders when the minute changes, not every second
 */
export const useCurrentTime = (updateInterval = 60000) => {
  const [currentTime, setCurrentTime] = useState(Date.now());

  const updateTime = useCallback(() => {
    setCurrentTime(Date.now());
  }, []);

  useEffect(() => {
    // Update immediately
    updateTime();
    
    // Set up interval for periodic updates
    const interval = setInterval(updateTime, updateInterval);
    
    return () => clearInterval(interval);
  }, [updateTime, updateInterval]);

  return currentTime;
};

/**
 * Hook for getting current time that only updates when needed
 * Useful for components that need current time but don't want frequent re-renders
 */
export const useCurrentTimeMemo = () => {
  const [currentTime, setCurrentTime] = useState(Date.now());

  useEffect(() => {
    const updateTime = () => {
      const now = Date.now();
      setCurrentTime(now);
    };

    // Update immediately
    updateTime();
    
    // Update every minute
    const interval = setInterval(updateTime, 60000);
    
    return () => clearInterval(interval);
  }, []);

  return currentTime;
}; 