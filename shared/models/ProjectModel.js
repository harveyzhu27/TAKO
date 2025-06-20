"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProject = createProject;
const utils_1 = require("../../server/utils/utils");
function createProject({ id, uid, name, order, }) {
    const list1 = {
        id: (0, utils_1.getNewListId)(),
        uid,
        projectId: id,
        name: "Do Now",
        isUniversal: true,
        order: 0,
        taskCount: 0,
        tasks: [],
    };
    const list2 = {
        id: (0, utils_1.getNewListId)(),
        uid,
        name: "Unnamed",
        projectId: id,
        isUniversal: false,
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
        lists: [list1, list2],
    };
}
