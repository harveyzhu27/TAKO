// Input validation and sanitization utilities

/**
 * Sanitize text input to prevent XSS and other security issues
 * @param {string} input - Raw input string
 * @returns {string} Sanitized string
 */
export const sanitizeText = (input) => {
  if (typeof input !== 'string') return '';
  
  // Remove potentially dangerous characters
  return input
    .replace(/[<>]/g, '') // Remove < and > to prevent HTML injection
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+=/gi, '') // Remove event handlers
    .trim();
};

/**
 * Validate task name
 * @param {string} name - Task name to validate
 * @returns {object} Validation result with isValid and error message
 */
export const validateTaskName = (name) => {
  if (!name || typeof name !== 'string') {
    return { isValid: false, error: 'Task name is required' };
  }
  
  const sanitized = sanitizeText(name);
  
  if (sanitized.length === 0) {
    return { isValid: false, error: 'Task name cannot be empty' };
  }
  
  if (sanitized.length > 200) {
    return { isValid: false, error: 'Task name must be 200 characters or less' };
  }
  
  return { isValid: true, sanitized };
};

/**
 * Validate deadline input
 * @param {string|number} deadline - Deadline to validate
 * @returns {object} Validation result with isValid and error message
 */
export const validateDeadline = (deadline) => {
  if (!deadline || deadline === '') {
    return { isValid: true, sanitized: null };
  }
  
  const num = Number(deadline);
  
  if (isNaN(num)) {
    return { isValid: false, error: 'Deadline must be a number' };
  }
  
  if (num < 0) {
    return { isValid: false, error: 'Deadline cannot be negative' };
  }
  
  if (num > 365) {
    return { isValid: false, error: 'Deadline cannot be more than 365 days' };
  }
  
  return { isValid: true, sanitized: num };
};

/**
 * Validate habit name
 * @param {string} name - Habit name to validate
 * @returns {object} Validation result with isValid and error message
 */
export const validateHabitName = (name) => {
  if (!name || typeof name !== 'string') {
    return { isValid: false, error: 'Habit name is required' };
  }
  
  const sanitized = sanitizeText(name);
  
  if (sanitized.length === 0) {
    return { isValid: false, error: 'Habit name cannot be empty' };
  }
  
  if (sanitized.length > 50) {
    return { isValid: false, error: 'Habit name must be 50 characters or less' };
  }
  
  return { isValid: true, sanitized };
};

/**
 * Validate thoughts content
 * @param {string} thoughts - Thoughts content to validate
 * @returns {object} Validation result with isValid and error message
 */
export const validateThoughts = (thoughts) => {
  if (!thoughts || typeof thoughts !== 'string') {
    return { isValid: true, sanitized: '' };
  }
  
  const sanitized = sanitizeText(thoughts);
  
  if (sanitized.length > 5000) {
    return { isValid: false, error: 'Thoughts must be 5000 characters or less' };
  }
  
  return { isValid: true, sanitized };
};

/**
 * Validate project name
 * @param {string} name - Project name to validate
 * @returns {object} Validation result with isValid and error message
 */
export const validateProjectName = (name) => {
  if (!name || typeof name !== 'string') {
    return { isValid: false, error: 'Project name is required' };
  }
  
  const sanitized = sanitizeText(name);
  
  if (sanitized.length === 0) {
    return { isValid: false, error: 'Project name cannot be empty' };
  }
  
  if (sanitized.length > 100) {
    return { isValid: false, error: 'Project name must be 100 characters or less' };
  }
  
  return { isValid: true, sanitized };
}; 