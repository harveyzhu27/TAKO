"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProject = createProject;
const utils_1 = require("../../server/utils/utils");
function createProject({ id, uid, name, order, }) {
    const list1 = {
        id: (0, utils_1.getNewListId)(),
        uid,
        name: "Unnamed",
        projectId: id,
        order: 1,
        taskCount: 0,
        tasks: [],
    };
    return {
        id,
        uid,
        name,
        description: '',
        order,
        taskCount: 0,
        lists: [list1],
    };
}
