import { useEffect, useRef } from 'react';

/**
 * Custom hook for handling click outside events
 * Prevents memory leaks by properly cleaning up event listeners
 */
export const useClickOutside = (callback, dependencies = []) => {
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    // Add event listener
    document.addEventListener('mousedown', handleClickOutside);
    
    // Cleanup function
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [callback, ...dependencies]);

  return ref;
};

/**
 * Hook for handling click outside with immediate cleanup
 * Useful for components that mount/unmount frequently
 */
export const useClickOutsideImmediate = (callback) => {
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    // Add event listener
    document.addEventListener('mousedown', handleClickOutside);
    
    // Cleanup function
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [callback]);

  return ref;
}; 