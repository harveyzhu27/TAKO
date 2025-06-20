"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createList = createList;
function createList({ id, uid, name, projectId, isUniversal, order, }) {
    return {
        id,
        uid,
        name,
        projectId,
        isUniversal,
        order,
        taskCount: 0,
        tasks: [],
    };
}
