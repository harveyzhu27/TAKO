"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTask = createTask;
function createTask({ id, uid, name, projectId, listId, dueDate = null, tags = [], isUniversal = false, order, }) {
    return {
        id,
        uid,
        name,
        projectId,
        listId,
        dueDate,
        createdAt: Date.now(),
        completedAt: null,
        tags: isUniversal ? ['DoNow'] : tags,
        order,
        subtaskCount: 0,
        subtasks: []
    };
}
