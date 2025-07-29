// Project utility functions for efficient data management

/**
 * Memoized sorting function for project lists
 * @param {Array} lists - Array of lists to sort
 * @returns {Array} Sorted lists
 */
export const sortProjectLists = (lists) => {
  if (!lists || !Array.isArray(lists)) return [];
  
  return [...lists].sort((a, b) => {
    // Handle undefined order values
    const orderA = a.order ?? 0;
    const orderB = b.order ?? 0;
    return orderA - orderB;
  });
};

/**
 * Optimistic update for project operations
 * @param {Function} updateFn - Function to update state
 * @param {Function} rollbackFn - Function to rollback on error
 * @param {Function} operation - Async operation to perform
 * @returns {Promise} Result of operation
 */
export const optimisticUpdate = async (updateFn, rollbackFn, operation) => {
  try {
    // Apply optimistic update immediately
    updateFn();
    
    // Perform the actual operation
    const result = await operation();
    
    return result;
  } catch (error) {
    // Rollback on error
    rollbackFn();
    throw error;
  }
};

/**
 * Debounced function to prevent excessive API calls
 * @param {Function} func - Function to debounce
 * @param {number} delay - Delay in milliseconds
 * @returns {Function} Debounced function
 */
export const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(null, args), delay);
  };
};

/**
 * Retry mechanism for failed operations
 * @param {Function} operation - Operation to retry
 * @param {number} maxRetries - Maximum number of retries
 * @param {number} delay - Delay between retries
 * @returns {Promise} Result of operation
 */
export const retryOperation = async (operation, maxRetries = 3, delay = 1000) => {
  let lastError;
  
  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      const result = await operation();
      if (attempt > 0) {
        console.log(`✅ Operation succeeded after ${attempt + 1} attempts`);
      }
      return result;
    } catch (error) {
      lastError = error;
      console.warn(`⚠️ Operation failed (attempt ${attempt + 1}/${maxRetries + 1}):`, error.message);
      
      if (attempt === maxRetries) {
        console.error(`❌ Operation failed after ${maxRetries + 1} attempts:`, error.message);
        throw error;
      }
      
      // Don't retry for validation errors or user errors
      if (error.message.includes('validation') || error.message.includes('required') || error.message.includes('invalid')) {
        throw error;
      }
      
      // Wait before retrying
      await new Promise(resolve => setTimeout(resolve, delay * (attempt + 1)));
    }
  }
  
  throw lastError;
};

/**
 * Validate project data before operations
 * @param {Object} project - Project data to validate
 * @returns {Object} Validation result
 */
export const validateProjectData = (project) => {
  const errors = [];
  
  if (!project) {
    errors.push('Project data is required');
    return { isValid: false, errors };
  }
  
  // Handle move operations (no validation needed)
  if (project.move) {
    return {
      isValid: true,
      errors: [],
      sanitized: project
    };
  }
  
  // Validate name if provided
  if (project.name !== undefined) {
    if (typeof project.name !== 'string') {
      errors.push('Project name must be a string');
    } else if (project.name.trim().length === 0) {
      errors.push('Project name cannot be empty');
    } else if (project.name.length > 100) {
      errors.push('Project name must be 100 characters or less');
    }
  }
  
  // Validate description if provided
  if (project.description !== undefined) {
    if (typeof project.description !== 'string') {
      errors.push('Project description must be a string');
    } else if (project.description.length > 1000) {
      errors.push('Project description must be 1000 characters or less');
    }
  }
  
  return {
    isValid: errors.length === 0,
    errors,
    sanitized: {
      ...project,
      name: project.name?.trim() || project.name,
      description: project.description?.trim() || project.description
    }
  };
};

/**
 * Create loading state for project operations
 * @param {string} operation - Operation being performed
 * @param {string} projectId - Project ID
 * @returns {Object} Loading state object
 */
export const createLoadingState = (operation, projectId) => ({
  operation,
  projectId,
  timestamp: Date.now()
});

/**
 * Check if loading state is stale
 * @param {Object} loadingState - Loading state to check
 * @param {number} timeout - Timeout in milliseconds
 * @returns {boolean} True if stale
 */
export const isStaleLoadingState = (loadingState, timeout = 30000) => {
  if (!loadingState || !loadingState.timestamp) return true;
  return Date.now() - loadingState.timestamp > timeout;
}; 