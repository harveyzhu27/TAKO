import { useState, useCallback } from 'react';
import { retryOperation, validateProjectData } from '../utils/projectUtils.js';

/**
 * Custom hook for project operations with loading states and error handling
 */
const useProjectOperations = (projectActions) => {
  const [loadingStates, setLoadingStates] = useState(new Map());
  const [errors, setErrors] = useState(new Map());

  // Helper to set loading state
  const setLoading = useCallback((projectId, operation, isLoading) => {
    setLoadingStates(prev => {
      const newMap = new Map(prev);
      if (isLoading) {
        newMap.set(`${projectId}-${operation}`, {
          operation,
          projectId,
          timestamp: Date.now()
        });
      } else {
        newMap.delete(`${projectId}-${operation}`);
      }
      return newMap;
    });
  }, []);

  // Helper to set error state
  const setError = useCallback((projectId, operation, error) => {
    setErrors(prev => {
      const newMap = new Map(prev);
      if (error) {
        newMap.set(`${projectId}-${operation}`, error);
      } else {
        newMap.delete(`${projectId}-${operation}`);
      }
      return newMap;
    });
  }, []);

  // Optimistic project update
  const updateProjectOptimistic = useCallback(async (projectId, updates) => {
    const operationKey = 'update';
    console.log(`🔄 Starting optimistic update for project ${projectId}:`, updates);
    setLoading(projectId, operationKey, true);
    setError(projectId, operationKey, null);

    try {
      // Special handling for move operations (no validation needed)
      if (updates.move) {
        console.log(`📦 Processing move operation: ${updates.move}`);
        const result = await retryOperation(async () => {
          return await projectActions.updateProject(projectId, updates);
        });
        console.log(`✅ Move operation completed for project ${projectId}`);
        setLoading(projectId, operationKey, false);
        return result;
      }

      // Validate updates for name/description changes
      if (updates.name || updates.description) {
        console.log(`🔍 Validating project updates:`, updates);
        const validation = validateProjectData(updates);
        if (!validation.isValid) {
          throw new Error(validation.errors.join(', '));
        }
        console.log(`✅ Validation passed for project ${projectId}`);
      }

      const result = await retryOperation(async () => {
        return await projectActions.updateProject(projectId, updates);
      });

      console.log(`✅ Update operation completed for project ${projectId}`);
      setLoading(projectId, operationKey, false);
      return result;
    } catch (error) {
      console.error(`❌ Update operation failed for project ${projectId}:`, error.message);
      setLoading(projectId, operationKey, false);
      setError(projectId, operationKey, error.message);
      throw error;
    }
  }, [projectActions, setLoading, setError]);

  // Optimistic project deletion
  const deleteProjectOptimistic = useCallback(async (projectId) => {
    const operationKey = 'delete';
    console.log(`🗑️ Starting optimistic delete for project ${projectId}`);
    setLoading(projectId, operationKey, true);
    setError(projectId, operationKey, null);

    try {
      const result = await retryOperation(async () => {
        return await projectActions.deleteProject(projectId);
      });

      console.log(`✅ Delete operation completed for project ${projectId}`);
      setLoading(projectId, operationKey, false);
      return result;
    } catch (error) {
      console.error(`❌ Delete operation failed for project ${projectId}:`, error.message);
      setLoading(projectId, operationKey, false);
      setError(projectId, operationKey, error.message);
      throw error;
    }
  }, [projectActions, setLoading, setError]);

  // Optimistic project creation
  const createProjectOptimistic = useCallback(async (name) => {
    const operationKey = 'create';
    console.log(`➕ Starting optimistic create for project: ${name}`);
    setLoading('new', operationKey, true);
    setError('new', operationKey, null);

    try {
      // Validate project name
      const validation = validateProjectData({ name });
      if (!validation.isValid) {
        throw new Error(validation.errors.join(', '));
      }

      const result = await retryOperation(async () => {
        return await projectActions.addProject(validation.sanitized.name);
      });

      console.log(`✅ Create operation completed for project: ${name}`);
      setLoading('new', operationKey, false);
      return result;
    } catch (error) {
      console.error(`❌ Create operation failed for project: ${name}`, error.message);
      setLoading('new', operationKey, false);
      setError('new', operationKey, error.message);
      throw error;
    }
  }, [projectActions, setLoading, setError]);

  // Check if project is loading
  const isProjectLoading = useCallback((projectId, operation) => {
    return loadingStates.has(`${projectId}-${operation}`);
  }, [loadingStates]);

  // Get project error
  const getProjectError = useCallback((projectId, operation) => {
    return errors.get(`${projectId}-${operation}`);
  }, [errors]);

  // Clear project error
  const clearProjectError = useCallback((projectId, operation) => {
    setError(projectId, operation, null);
  }, [setError]);

  return {
    updateProjectOptimistic,
    deleteProjectOptimistic,
    createProjectOptimistic,
    isProjectLoading,
    getProjectError,
    clearProjectError,
    loadingStates,
    errors
  };
};

export default useProjectOperations; 