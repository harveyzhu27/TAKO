"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSubtask = createSubtask;
function createSubtask({ id, uid, name, dueDate = null, order, projectId, listId, taskId }) {
    return {
        id,
        uid,
        name,
        projectId,
        listId,
        taskId,
        dueDate,
        createdAt: Date.now(),
        completedAt: null,
        order,
    };
}
