const { randomUUID } = require('crypto');

const USE_SIMPLE_IDS = true;
let simpleProjId = 1, simpleListId = 1, simpleTaskId = 1, simpleSubtaskId = 1;

function getNewProjId() {
  return USE_SIMPLE_IDS ? String(simpleProjId++) : randomUUID();
}

function getNewListId() {
  return USE_SIMPLE_IDS ? String(simpleListId++) : randomUUID();
}

function getNewTaskId() {
  return USE_SIMPLE_IDS ? String(simpleTaskId++) : randomUUID();
}

function getNewSubtaskId() {
  return USE_SIMPLE_IDS ? String(simpleSubtaskId++) : randomUUID();
}

function validateName(name) {
  if (typeof name !== 'string') return null;
  const trimmed = name.trim();
  if (!trimmed || /^\d+$/.test(trimmed)) return null;
  return trimmed;
}

module.exports = {
  getNewProjId,
  getNewListId,
  getNewTaskId,
  getNewSubtaskId,
  validateName,
};
