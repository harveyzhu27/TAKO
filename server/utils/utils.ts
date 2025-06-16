// server/utils/utils.ts
import { randomUUID } from 'crypto'

const USE_SIMPLE_IDS = true
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
