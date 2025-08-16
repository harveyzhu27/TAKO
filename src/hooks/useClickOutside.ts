import { useEffect, useRef, RefObject } from 'react';

/**
 * Custom hook for handling click outside events
 * Prevents memory leaks by properly cleaning up event listeners
 */
export const useClickOutside = (
  callback: () => void,
  dependencies: unknown[] = []
): RefObject<HTMLElement> => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    // Add event listener
    document.addEventListener('mousedown', handleClickOutside);
    
    // Cleanup function
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [callback, dependencies]);

  return ref;
};

/**
 * Hook for handling click outside with immediate cleanup
 * Useful for components that mount/unmount frequently
 */
export const useClickOutsideImmediate = (callback: () => void): RefObject<HTMLElement> => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
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
