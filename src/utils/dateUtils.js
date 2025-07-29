// Date utility functions for consistent date calculations across components

/**
 * Calculate days from now for a given due date
 * @param {number|string} dueDate - The due date timestamp or days from now
 * @param {number} now - Current timestamp (for consistent calculations)
 * @returns {number|null} Days from now, or null if no due date
 */
export const calculateDaysFromNow = (dueDate, now = Date.now()) => {
  if (!dueDate) return null;
  
  const today = new Date(now);
  today.setHours(0, 0, 0, 0);
  const due = new Date(dueDate);
  due.setHours(0, 0, 0, 0);
  return Math.floor((due - today) / (1000 * 60 * 60 * 24));
};

/**
 * Format deadline using days from now with real-time tracking
 * @param {number|string} daysFromNow - Days from now
 * @param {number} now - Current timestamp
 * @returns {string} Formatted deadline string
 */
export const formatDeadline = (daysFromNow, now = Date.now()) => {
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

/**
 * Get CSS class for deadline styling
 * @param {number|string} daysFromNow - Days from now
 * @param {number} now - Current timestamp
 * @returns {string} CSS class name
 */
export const getDeadlineClass = (daysFromNow, now = Date.now()) => {
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

/**
 * Check if a date is today
 * @param {Date} date - Date to check
 * @returns {boolean} True if date is today
 */
export const isToday = (date) => {
  const today = new Date();
  return date.toDateString() === today.toDateString();
};

/**
 * Format date for display
 * @param {Date} date - Date to format
 * @returns {string} Formatted date string
 */
export const formatDate = (date) => {
  return date.toLocaleDateString('en-US', { 
    month: 'short', 
    day: 'numeric' 
  });
}; 