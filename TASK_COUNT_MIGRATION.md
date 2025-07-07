# TaskCount Migration Guide

This document explains the taskCount functionality that has been added to store task counts in the backend for both lists and projects.

## Overview

The taskCount field tracks the number of incomplete tasks (tasks where `completedAt` is null) in:
- **Lists**: Number of incomplete tasks in that specific list
- **Projects**: Total number of incomplete tasks across all lists in the project

## Backend Changes

### New Utility Functions

1. **`recalculateTaskCount(projectId, listId)`** - Updates the taskCount for a specific list
2. **`recalculateProjectTaskCount(projectId)`** - Updates the taskCount for a project by summing all list taskCounts

### Updated Controllers

The following controllers now automatically update taskCount when relevant operations occur:

- **Task Controller**: Updates taskCount when tasks are created, updated (completion status), or deleted
- **Subtask Controller**: Updates taskCount when subtasks are created or deleted (may affect task completion)
- **List Controller**: Updates project taskCount when lists are created or deleted
- **Project Controller**: Initializes taskCount when projects are created

### API Changes

- **GET /projects/summaries** now includes `taskCount` in the response
- **GET /projects/:id/lists** now includes `taskCount` for each list

## Frontend Changes

- The frontend now uses the backend's taskCount instead of calculating it locally
- Project summaries are refreshed after task operations that affect taskCount
- Manual taskCount updates have been removed from the frontend

## Migration

To update existing projects and lists with the correct taskCount values:

1. Build the server:
   ```bash
   cd server
   npm run build
   ```

2. Run the migration:
   ```bash
   npm run migrate-task-count
   ```

This will:
- Recalculate taskCount for all existing lists
- Recalculate taskCount for all existing projects
- Update the database with the correct values

## Usage

After migration, taskCount will be automatically maintained by the backend:

- Creating a task → Updates list and project taskCount
- Completing a task → Updates list and project taskCount  
- Deleting a task → Updates list and project taskCount
- Creating/deleting subtasks → Updates taskCount (may affect task completion)
- Creating/deleting lists → Updates project taskCount

The frontend will automatically display the correct taskCount values without any additional changes needed.

## Notes

- taskCount only includes incomplete tasks (where `completedAt` is null)
- The migration is safe to run multiple times
- taskCount is updated in real-time as operations occur
- No manual intervention is required after the initial migration