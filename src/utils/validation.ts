// Input validation and sanitization utilities

interface ValidationResult {
  isValid: boolean;
  error?: string;
  sanitized: string | number | null;
}

/**
 * Sanitize text input to prevent XSS and other security issues
 * @param input - Raw input string
 * @returns Sanitized string
 */
export const sanitizeText = (input: string): string => {
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
 * @param name - Task name to validate
 * @returns Validation result with isValid and error message
 */
export const validateTaskName = (name: string): ValidationResult => {
  if (!name || typeof name !== 'string') {
    return { isValid: false, error: 'Task name is required', sanitized: '' };
  }
  
  const sanitized = sanitizeText(name);
  
  if (sanitized.length === 0) {
    return { isValid: false, error: 'Task name cannot be empty', sanitized: '' };
  }
  
  if (sanitized.length > 200) {
    return { isValid: false, error: 'Task name must be 200 characters or less', sanitized: '' };
  }
  
  return { isValid: true, sanitized };
};

/**
 * Validate deadline input
 * @param deadline - Deadline to validate
 * @returns Validation result with isValid and error message
 */
export const validateDeadline = (deadline: string | number): ValidationResult => {
  if (!deadline || deadline === '') {
    return { isValid: true, sanitized: null };
  }
  
  const num = Number(deadline);
  
  if (isNaN(num)) {
    return { isValid: false, error: 'Deadline must be a number', sanitized: null };
  }
  
  if (num < 0) {
    return { isValid: false, error: 'Deadline cannot be negative', sanitized: null };
  }
  
  if (num > 365) {
    return { isValid: false, error: 'Deadline cannot be more than 365 days', sanitized: null };
  }
  
  return { isValid: true, sanitized: num };
};

/**
 * Validate habit name
 * @param name - Habit name to validate
 * @returns Validation result with isValid and error message
 */
export const validateHabitName = (name: string): ValidationResult => {
  if (!name || typeof name !== 'string') {
    return { isValid: false, error: 'Habit name is required', sanitized: '' };
  }
  
  const sanitized = sanitizeText(name);
  
  if (sanitized.length === 0) {
    return { isValid: false, error: 'Habit name cannot be empty', sanitized: '' };
  }
  
  if (sanitized.length > 50) {
    return { isValid: false, error: 'Habit name must be 50 characters or less', sanitized: '' };
  }
  
  return { isValid: true, sanitized };
};

/**
 * Validate thoughts content
 * @param thoughts - Thoughts content to validate
 * @returns Validation result with isValid and error message
 */
export const validateThoughts = (thoughts: string): ValidationResult => {
  if (!thoughts || typeof thoughts !== 'string') {
    return { isValid: true, sanitized: '' };
  }
  
  const sanitized = sanitizeText(thoughts);
  
  if (sanitized.length > 5000) {
    return { isValid: false, error: 'Thoughts must be 5000 characters or less', sanitized: '' };
  }
  
  return { isValid: true, sanitized };
};

/**
 * Validate project name
 * @param name - Project name to validate
 * @returns Validation result with isValid and error message
 */
export const validateProjectName = (name: string): ValidationResult => {
  if (!name || typeof name !== 'string') {
    return { isValid: false, error: 'Project name is required', sanitized: '' };
  }
  
  const sanitized = sanitizeText(name);
  
  if (sanitized.length === 0) {
    return { isValid: false, error: 'Project name cannot be empty', sanitized: '' };
  }
  
  if (sanitized.length > 100) {
    return { isValid: false, error: 'Project name must be 100 characters or less', sanitized: '' };
  }
  
  return { isValid: true, sanitized };
};
