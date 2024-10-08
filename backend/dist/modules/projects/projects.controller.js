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
exports.ProjectsController = void 0;
const common_1 = require("@nestjs/common");
const projects_service_1 = require("./projects.service");
const create_project_dto_1 = require("./dto/create-project.dto");
const update_project_dto_1 = require("./dto/update-project.dto");
const project_schema_1 = require("./schema/project.schema");
const swagger_1 = require("@nestjs/swagger");
const userRoles_1 = require("../../casl/userRoles");
const constants_1 = require("../../constants");
const decorators_1 = require("../../decorators");
const user_schema_1 = require("../user/user.schema");
let ProjectsController = class ProjectsController {
    constructor(projectsService) {
        this.projectsService = projectsService;
    }
    async create(user, createDto) {
        createDto.userId = user.id;
        return this.projectsService.create(createDto);
    }
    async update(id, updateDatato) {
        console.log("uuuu", updateDatato);
        return this.projectsService.update(id, updateDatato);
    }
    async getProjectMembers(id, user) {
        return this.projectsService.findByProjectId(id);
    }
    async getProject(id, user) {
        return this.projectsService.findById(id);
    }
    findall(page = 1, limit = 20) {
        return this.projectsService.findall(page, limit);
    }
    async findMy(user) {
        const id = user.id;
        return this.projectsService.findMy(id);
    }
    async findUP(id) {
        return this.projectsService.findMy(id);
    }
    async deletePost(id) {
        return this.projectsService.deletePost(id);
    }
};
exports.ProjectsController = ProjectsController;
__decorate([
    (0, decorators_1.Auth)(userRoles_1.Action.Create, "Project"),
    (0, common_1.Post)(),
    (0, decorators_1.ApiPageOkResponse)({
        description: "Create Project",
        type: project_schema_1.ProjectEntity,
    }),
    __param(0, (0, decorators_1.AuthUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_schema_1.User,
        create_project_dto_1.CreateProjectDto]),
    __metadata("design:returntype", Promise)
], ProjectsController.prototype, "create", null);
__decorate([
    (0, decorators_1.Auth)(userRoles_1.Action.Update, "Project"),
    (0, common_1.Put)(constants_1.constTexts.projectRoute.update),
    (0, decorators_1.ApiPageOkResponse)({
        description: "Update Project",
        type: project_schema_1.ProjectEntity,
    }),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_project_dto_1.UpdateProjectDto]),
    __metadata("design:returntype", Promise)
], ProjectsController.prototype, "update", null);
__decorate([
    (0, decorators_1.Auth)(userRoles_1.Action.Read, "Project"),
    (0, common_1.Get)(constants_1.constTexts.projectRoute.projectMembers),
    (0, decorators_1.ApiPageOkResponse)({
        description: "Get Project Members",
        type: project_schema_1.ProjectEntity,
    }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, decorators_1.AuthUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, user_schema_1.User]),
    __metadata("design:returntype", Promise)
], ProjectsController.prototype, "getProjectMembers", null);
__decorate([
    (0, decorators_1.Auth)(userRoles_1.Action.Read, "Project"),
    (0, common_1.Get)(constants_1.constTexts.projectRoute.details),
    (0, decorators_1.ApiPageOkResponse)({
        description: "Get Project ",
        type: project_schema_1.ProjectEntity,
    }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, decorators_1.AuthUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, user_schema_1.User]),
    __metadata("design:returntype", Promise)
], ProjectsController.prototype, "getProject", null);
__decorate([
    (0, common_1.Get)(constants_1.constTexts.projectRoute.getAllPosts),
    (0, decorators_1.ApiPageOkResponse)({
        description: "Get all List",
        type: project_schema_1.ProjectEntity,
    }),
    (0, swagger_1.ApiQuery)({ name: "page", required: false, type: Number }),
    (0, swagger_1.ApiQuery)({ name: "limit", required: false, type: Number }),
    __param(0, (0, common_1.Query)("page")),
    __param(1, (0, common_1.Query)("limit")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], ProjectsController.prototype, "findall", null);
__decorate([
    (0, decorators_1.Auth)(userRoles_1.Action.Read, "Post"),
    (0, common_1.Get)(constants_1.constTexts.projectRoute.my),
    (0, decorators_1.ApiPageOkResponse)({
        description: "Get My List",
        type: project_schema_1.ProjectEntity,
    }),
    __param(0, (0, decorators_1.AuthUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_schema_1.User]),
    __metadata("design:returntype", Promise)
], ProjectsController.prototype, "findMy", null);
__decorate([
    (0, common_1.Get)(constants_1.constTexts.projectRoute.users),
    (0, decorators_1.ApiPageOkResponse)({
        description: "Get Users List",
        type: project_schema_1.ProjectEntity,
    }),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProjectsController.prototype, "findUP", null);
__decorate([
    (0, common_1.Delete)(constants_1.constTexts.projectRoute.delete),
    (0, decorators_1.ApiPageOkResponse)({
        description: "Delete Post",
        type: project_schema_1.ProjectEntity,
    }),
    (0, decorators_1.Auth)(userRoles_1.Action.Update, "Post"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProjectsController.prototype, "deletePost", null);
exports.ProjectsController = ProjectsController = __decorate([
    (0, common_1.Controller)('Projects'),
    (0, swagger_1.ApiTags)('Projects'),
    __metadata("design:paramtypes", [projects_service_1.ProjectsService])
], ProjectsController);
//# sourceMappingURL=projects.controller.js.map