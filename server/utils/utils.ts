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

// Migrate existing tasks to have order fields
export async function migrateTaskOrders() {
  try {
    console.log('🔄 Starting task order migration...');
    
    // Get all projects
    const projectsSnap = await db.collection('projects').get();
    let totalMigrated = 0;
    
    for (const projectDoc of projectsSnap.docs) {
      const projectId = projectDoc.id;
      const projectData = projectDoc.data();
      
      // Get all lists in this project
      const listsSnap = await db.collection('projects').doc(projectId).collection('lists').get();
      
      for (const listDoc of listsSnap.docs) {
        const listId = listDoc.id;
        
        // Get all tasks in this list, ordered by creation time
        const tasksSnap = await db.collection('projects').doc(projectId)
          .collection('lists').doc(listId)
          .collection('tasks')
          .orderBy('createdAt', 'asc')
          .get();
        
        if (tasksSnap.empty) continue;
        
        // Update each task with an order field
        const batch = db.batch();
        tasksSnap.docs.forEach((taskDoc, index) => {
          const taskRef = taskDoc.ref;
          batch.update(taskRef, { order: index });
        });
        
        await batch.commit();
        totalMigrated += tasksSnap.docs.length;
        
        console.log(`✅ Migrated ${tasksSnap.docs.length} tasks in project ${projectId}, list ${listId}`);
      }
    }
    
    console.log(`🎉 Task order migration completed! Total tasks migrated: ${totalMigrated}`);
    return totalMigrated;
  } catch (error) {
    console.error('❌ Error during task order migration:', error);
    throw error;
  }
}