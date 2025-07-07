// server/utils/utils.ts
import { randomUUID } from 'crypto'

const USE_SIMPLE_IDS = false
let simpleProjId = 1
let simpleListId = 1
let simpleTaskId = 1
let simpleSubtaskId = 1
/** Generate a new project ID. */
export function getNewProjId(): string {
  return USE_SIMPLE_IDS ? String(simpleProjId++) : randomUUID()
}

/** Generate a new list ID. */
export function getNewListId(): string {
  return USE_SIMPLE_IDS ? String(simpleListId++) : randomUUID()
}

/** Generate a new task ID. */
export function getNewTaskId(): string {
  return USE_SIMPLE_IDS ? String(simpleTaskId++) : randomUUID()
}

/** Generate a new subtask ID. */
export function getNewSubtaskId(): string {
  return USE_SIMPLE_IDS ? String(simpleSubtaskId++) : randomUUID()
}

/**
 * Trim and validate a name.
 * Rejects non-strings, empty or all-digits names.
 */
export function validateName(name: unknown): string | null {
  if (typeof name !== 'string') return null
  const trimmed = name.trim()
  if (!trimmed || /^\d+$/.test(trimmed)) return null
  return trimmed
}


import { db } from '../firebase';

export async function recalculateTaskCount(projectId: string, listId: string) {
  const tasksSnap = await db
    .collection('projects').doc(projectId)
    .collection('lists').doc(listId)
    .collection('tasks')
    .where('completedAt', '==', null)
    .get();
  const incompleteCount = tasksSnap.size;
  await db
    .collection('projects').doc(projectId)
    .collection('lists').doc(listId)
    .update({ taskCount: incompleteCount });
}

export async function recalculateProjectTaskCount(projectId: string) {
  const listsSnap = await db
    .collection('projects').doc(projectId)
    .collection('lists')
    .get();
  
  let totalTaskCount = 0;
  for (const listDoc of listsSnap.docs) {
    const tasksSnap = await listDoc.ref
      .collection('tasks')
      .where('completedAt', '==', null)
      .get();
    totalTaskCount += tasksSnap.size;
  }
  
  await db
    .collection('projects').doc(projectId)
    .update({ taskCount: totalTaskCount });
}

export async function migrateTaskCounts() {
  console.log('Starting taskCount migration...');
  
  try {
    // Get all projects
    const projectsSnap = await db.collection('projects').get();
    
    for (const projectDoc of projectsSnap.docs) {
      const projectId = projectDoc.id;
      console.log(`Processing project: ${projectId}`);
      
      // Get all lists in this project
      const listsSnap = await projectDoc.ref.collection('lists').get();
      
      for (const listDoc of listsSnap.docs) {
        const listId = listDoc.id;
        console.log(`  Processing list: ${listId}`);
        
        // Recalculate taskCount for this list
        await recalculateTaskCount(projectId, listId);
      }
      
      // Recalculate project taskCount
      await recalculateProjectTaskCount(projectId);
    }
    
    console.log('TaskCount migration completed successfully!');
  } catch (error) {
    console.error('Error during taskCount migration:', error);
    throw error;
  }
}