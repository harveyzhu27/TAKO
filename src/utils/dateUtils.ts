// Date utility functions for consistent date calculations across components

/**
 * Calculate days from now for a given due date
 * @param dueDate - The due date timestamp or days from now
 * @param now - Current timestamp (for consistent calculations)
 * @returns Days from now, or null if no due date
 */
export const calculateDaysFromNow = (dueDate: number | string | null | undefined, now: number = Date.now()): number | null => {
  if (!dueDate) return null;
  
  const today = new Date(now);
  today.setHours(0, 0, 0, 0);
  const due = new Date(dueDate);
  due.setHours(0, 0, 0, 0);
  return Math.floor((due.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
};

/**
 * Format deadline using days from now with real-time tracking
 * @param daysFromNow - Days from now
 * @param now - Current timestamp
 * @returns Formatted deadline string
 */
export const formatDeadline = (daysFromNow: number | string | null | undefined, now: number = Date.now()): string => {
  if (daysFromNow === null || daysFromNow === undefined || daysFromNow === '') return '';
  
  // Ensure daysFromNow is a number
  const days = typeof daysFromNow === 'string' ? Number(daysFromNow) : daysFromNow;
  
  // Handle due today (0) case explicitly
  if (days === 0) return 'Due Today';
  
  // Calculate the actual due date based on days from now
  const today = new Date(now);
  today.setHours(0, 0, 0, 0);
  const dueDate = new Date(today);
  dueDate.setDate(today.getDate() + days);
  
  // Calculate days difference from today
  const nowDate = new Date(now);
  nowDate.setHours(0, 0, 0, 0);
  const diffDays = Math.floor((dueDate.getTime() - nowDate.getTime()) / (1000 * 60 * 60 * 24));
  
  if (diffDays < 0) return 'Overdue';
  if (diffDays === 0) return 'Due Today';
  if (diffDays === 1) return 'Due Tomorrow';
  return `Due in ${diffDays} days`;
};

/**
 * Get CSS class for deadline styling
 * @param daysFromNow - Days from now
 * @param now - Current timestamp
 * @returns CSS class name
 */
export const getDeadlineClass = (daysFromNow: number | string | null | undefined, now: number = Date.now()): string => {
  if (daysFromNow === null || daysFromNow === undefined || daysFromNow === '') return '';
  
  const days = typeof daysFromNow === 'string' ? Number(daysFromNow) : daysFromNow;
  const today = new Date(now);
  today.setHours(0, 0, 0, 0);
  const dueDate = new Date(today);
  dueDate.setDate(today.getDate() + days);
  const nowDate = new Date(now);
  nowDate.setHours(0, 0, 0, 0);
  const diffDays = Math.floor((dueDate.getTime() - nowDate.getTime()) / (1000 * 60 * 60 * 24));
  
  if (diffDays < 0) return 'overdue';
  if (diffDays === 0) return 'due-today';
  if (diffDays === 1) return 'due-tomorrow';
  return '';
};

/**
 * Check if a date is today
 * @param date - Date to check
 * @returns True if date is today
 */
export const isToday = (date: Date): boolean => {
  const today = new Date();
  return date.toDateString() === today.toDateString();
};

/**
 * Format date for display
 * @param date - Date to format
 * @returns Formatted date string
 */
export const formatDate = (date: Date): string => {
  return date.toLocaleDateString('en-US', { 
    month: 'short', 
    day: 'numeric' 
  });
};
