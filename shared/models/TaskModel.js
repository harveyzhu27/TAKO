"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTask = createTask;
function createTask({ id, uid, name, projectId, listId, dueDate = null, tags = [], order, }) {
    return {
        id,
        uid,
        name,
        projectId,
        listId,
        dueDate,
        createdAt: Date.now(),
        completedAt: null,
        tags,
        order,
        subtaskCount: 0,
        subtasks: []
    };
}
