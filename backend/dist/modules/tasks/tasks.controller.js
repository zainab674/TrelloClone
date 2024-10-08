"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksController = void 0;
const common_1 = require("@nestjs/common");
const tasks_service_1 = require("./tasks.service");
const create_task_dto_1 = require("./dto/create-task.dto");
const userRoles_1 = require("../../casl/userRoles");
const decorators_1 = require("../../decorators");
const user_schema_1 = require("../user/user.schema");
const task_schema_1 = require("./schema/task.schema");
const constants_1 = require("../../constants");
const swagger_1 = require("@nestjs/swagger");
const update_task_dto_1 = require("./dto/update-task.dto");
const mongoose_1 = require("mongoose");
const projects_service_1 = require("../projects/projects.service");
let TasksController = class TasksController {
    constructor(tasksService, projectService) {
        this.tasksService = tasksService;
        this.projectService = projectService;
    }
    async create(user, createDto) {
        createDto.userId = user.id;
        createDto.assignedBy = new mongoose_1.Types.ObjectId(user.id);
        const task = await this.tasksService.create(createDto);
        if (task.projectId) {
            await this.projectService.AddTaskInProject(task.projectId.toString(), task.id.toString());
        }
        else {
            throw new Error("Task must be associated with a project.");
        }
        return task;
    }
    async update(user, id, updateDatato) {
        updateDatato.assignedBy = new mongoose_1.Types.ObjectId(user.id);
        return this.tasksService.update(id, updateDatato);
    }
    findall(page = 1, limit = 20) {
        return this.tasksService.findall(page, limit);
    }
    async findMy(user) {
        const id = user.id;
        return this.tasksService.findMy(id);
    }
    async findUP(id) {
        return this.tasksService.findMy(id);
    }
    async findTasks(id) {
        return this.tasksService.findByProjectId(id);
    }
    async deletePost(taskId) {
        const task = await this.tasksService.findById(taskId);
        if (!task) {
            throw new Error('Task not found');
        }
        const projectId = task.projectId;
        await this.projectService.RemoveTaskFromProject(projectId.toString(), taskId);
        const deletedTask = await this.tasksService.deletePost(taskId);
        return deletedTask;
    }
};
exports.TasksController = TasksController;
__decorate([
    (0, decorators_1.Auth)(userRoles_1.Action.Create, "Task"),
    (0, common_1.Post)(),
    (0, decorators_1.ApiPageOkResponse)({
        description: "Create Task",
        type: task_schema_1.TaskEntity,
    }),
    __param(0, (0, decorators_1.AuthUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_schema_1.User,
        create_task_dto_1.CreateTaskDto]),
    __metadata("design:returntype", Promise)
], TasksController.prototype, "create", null);
__decorate([
    (0, decorators_1.Auth)(userRoles_1.Action.Update, "Task"),
    (0, common_1.Put)(constants_1.constTexts.taskRoute.update),
    (0, decorators_1.ApiPageOkResponse)({
        description: "Update Task",
        type: task_schema_1.TaskEntity,
    }),
    __param(0, (0, decorators_1.AuthUser)()),
    __param(1, (0, common_1.Param)("id")),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_schema_1.User, String, update_task_dto_1.UpdateTaskDto]),
    __metadata("design:returntype", Promise)
], TasksController.prototype, "update", null);
__decorate([
    (0, common_1.Get)(constants_1.constTexts.taskRoute.getAllPosts),
    (0, decorators_1.ApiPageOkResponse)({
        description: "Get all List",
        type: task_schema_1.TaskEntity,
    }),
    (0, swagger_1.ApiQuery)({ name: "page", required: false, type: Number }),
    (0, swagger_1.ApiQuery)({ name: "limit", required: false, type: Number }),
    __param(0, (0, common_1.Query)("page")),
    __param(1, (0, common_1.Query)("limit")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], TasksController.prototype, "findall", null);
__decorate([
    (0, decorators_1.Auth)(userRoles_1.Action.Read, "Post"),
    (0, common_1.Get)(constants_1.constTexts.taskRoute.my),
    (0, decorators_1.ApiPageOkResponse)({
        description: "Get My List",
        type: task_schema_1.TaskEntity,
    }),
    __param(0, (0, decorators_1.AuthUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_schema_1.User]),
    __metadata("design:returntype", Promise)
], TasksController.prototype, "findMy", null);
__decorate([
    (0, common_1.Get)(constants_1.constTexts.taskRoute.users),
    (0, decorators_1.ApiPageOkResponse)({
        description: "Get Users List",
        type: task_schema_1.TaskEntity,
    }),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TasksController.prototype, "findUP", null);
__decorate([
    (0, common_1.Get)(constants_1.constTexts.taskRoute.BYprojectID),
    (0, decorators_1.ApiPageOkResponse)({
        description: "Get Users List",
        type: task_schema_1.TaskEntity,
    }),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TasksController.prototype, "findTasks", null);
__decorate([
    (0, common_1.Delete)(constants_1.constTexts.taskRoute.delete),
    (0, decorators_1.ApiPageOkResponse)({
        description: "Delete Task",
        type: task_schema_1.TaskEntity,
    }),
    (0, decorators_1.Auth)(userRoles_1.Action.Update, "Post"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TasksController.prototype, "deletePost", null);
exports.TasksController = TasksController = __decorate([
    (0, common_1.Controller)('tasks'),
    (0, swagger_1.ApiTags)('tasks'),
    __metadata("design:paramtypes", [tasks_service_1.TasksService,
        projects_service_1.ProjectsService])
], TasksController);
//# sourceMappingURL=tasks.controller.js.map