// Project utility functions for efficient data management

interface List {
  id: string;
  order?: number;
  [key: string]: unknown;
}

interface Project {
  id?: string;
  name?: string;
  description?: string;
  move?: boolean;
  [key: string]: unknown;
}

interface ValidationResult {
  isValid: boolean;
  errors: string[];
  sanitized: Project;
}

interface LoadingState {
  operation: string;
  projectId: string;
  timestamp: number;
}

/**
 * Memoized sorting function for project lists
 * @param lists - Array of lists to sort
 * @returns Sorted lists
 */
export const sortProjectLists = (lists: List[] | null | undefined): List[] => {
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
 * @param updateFn - Function to update state
 * @param rollbackFn - Function to rollback on error
 * @param operation - Async operation to perform
 * @returns Result of operation
 */
export const optimisticUpdate = async <T>(
  updateFn: () => void,
  rollbackFn: () => void,
  operation: () => Promise<T>
): Promise<T> => {
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
 * @param func - Function to debounce
 * @param delay - Delay in milliseconds
 * @returns Debounced function
 */
export const debounce = <T extends (...args: unknown[]) => unknown>(
  func: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  let timeoutId: number;
  return (...args: Parameters<T>) => {
    window.clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => func.apply(null, args), delay);
  };
};

/**
 * Retry mechanism for failed operations
 * @param operation - Operation to retry
 * @param maxRetries - Maximum number of retries
 * @param delay - Delay between retries
 * @returns Result of operation
 */
export const retryOperation = async <T>(
  operation: () => Promise<T>,
  maxRetries: number = 3,
  delay: number = 1000
): Promise<T> => {
  let lastError: Error;
  
  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      const result = await operation();
      if (attempt > 0) {
        console.log(`✅ Operation succeeded after ${attempt + 1} attempts`);
      }
      return result;
    } catch (error) {
      lastError = error as Error;
      console.warn(`⚠️ Operation failed (attempt ${attempt + 1}/${maxRetries + 1}):`, (error as Error).message);
      
      if (attempt === maxRetries) {
        console.error(`❌ Operation failed after ${maxRetries + 1} attempts:`, (error as Error).message);
        throw error;
      }
      
      // Don't retry for validation errors or user errors
      if ((error as Error).message.includes('validation') || (error as Error).message.includes('required') || (error as Error).message.includes('invalid')) {
        throw error;
      }
      
      // Wait before retrying
      await new Promise(resolve => setTimeout(resolve, delay * (attempt + 1)));
    }
  }
  
  throw lastError!;
};

/**
 * Validate project data before operations
 * @param project - Project data to validate
 * @returns Validation result
 */
export const validateProjectData = (project: Project): ValidationResult => {
  const errors: string[] = [];
  
  if (!project) {
    errors.push('Project data is required');
    return { isValid: false, errors, sanitized: project };
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
 * @param operation - Operation being performed
 * @param projectId - Project ID
 * @returns Loading state object
 */
export const createLoadingState = (operation: string, projectId: string): LoadingState => ({
  operation,
  projectId,
  timestamp: Date.now()
});

/**
 * Check if loading state is stale
 * @param loadingState - Loading state to check
 * @param timeout - Timeout in milliseconds
 * @returns True if stale
 */
export const isStaleLoadingState = (loadingState: LoadingState | null | undefined, timeout: number = 30000): boolean => {
  if (!loadingState || !loadingState.timestamp) return true;
  return Date.now() - loadingState.timestamp > timeout;
};
