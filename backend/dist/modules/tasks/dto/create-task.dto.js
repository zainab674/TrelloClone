"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTaskDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const task_schema_1 = require("../schema/task.schema");
class CreateTaskDto extends (0, swagger_1.PickType)(task_schema_1.TaskEntity, [
    "title",
    "description",
    "dueDate",
    "priority",
    "labels",
    "isCompleted",
    "project",
    "sharedWith",
]) {
}
exports.CreateTaskDto = CreateTaskDto;
//# sourceMappingURL=create-task.dto.js.map