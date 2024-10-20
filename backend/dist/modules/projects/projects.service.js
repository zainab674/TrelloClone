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
exports.ProjectsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const project_schema_1 = require("./schema/project.schema");
const exceptions_1 = require("../../exceptions");
let ProjectsService = class ProjectsService {
    constructor(schemaModel) {
        this.schemaModel = schemaModel;
    }
    async create(createProjectDto) {
        const create = new this.schemaModel(createProjectDto);
        return await create.save().catch((err) => {
            throw new common_1.HttpException(err.message, exceptions_1.ResponseCode.BAD_REQUEST);
        });
    }
    async AddTaskInProject(projectid, taskId) {
        const project = await this.schemaModel.findById(projectid).exec();
        if (project) {
            const updatedProject = await this.schemaModel.findByIdAndUpdate(projectid, { $push: { tasks: taskId } }, { new: true }).exec();
            return updatedProject;
        }
        else {
            throw new Error('Project not found');
        }
    }
    async AddMembersInProject(projectid, membersId) {
        const project = await this.schemaModel.findById(projectid).exec();
        if (project) {
            const updatedProject = await this.schemaModel.findByIdAndUpdate(projectid, { $push: { members: membersId } }, { new: true }).exec();
            return updatedProject;
        }
        else {
            throw new Error('Project not found');
        }
    }
    async RemoveTaskFromProject(projectId, taskId) {
        const project = await this.schemaModel.findById(projectId).exec();
        if (project) {
            const updatedProject = await this.schemaModel.findByIdAndUpdate(projectId, { $pull: { tasks: taskId } }, { new: true }).exec();
            return updatedProject;
        }
        else {
            throw new Error('Project not found');
        }
    }
    async findByProjectId(id) {
        const project = await this.schemaModel.findById(id)
            .populate({
            path: 'members',
            select: 'id displayName',
        })
            .exec();
        if (!project) {
            throw new common_1.NotFoundException(`Project with ID ${id} not found.`);
        }
        return project.members;
    }
    async findall(page = 1, limit = 20) {
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
        const totalCount = await this.schemaModel.find().exec();
        const totalPages = Math.ceil(totalCount.length / limit);
        const data = await this.schemaModel
            .aggregate([
            {
                $skip: startIndex,
            },
            {
                $limit: endIndex,
            },
        ])
            .exec()
            .catch((err) => {
            throw new common_1.HttpException(err.message, exceptions_1.ResponseCode.BAD_REQUEST);
        });
        return {
            totalCount: totalCount.length,
            totalPages: totalPages,
            data: data,
        };
    }
    async findById(id) {
        return this.schemaModel
            .findById(id).exec();
    }
    async update(id, updateDataDto) {
        try {
            const verify = await this.schemaModel.findById(id);
            if (!verify) {
                throw new common_1.HttpException('Post not found', exceptions_1.ResponseCode.NOT_FOUND);
            }
            const updateData = await this.schemaModel
                .findByIdAndUpdate(id, updateDataDto, { new: true })
                .exec();
            return { data: updateData };
        }
        catch (err) {
            throw new common_1.HttpException(err.message, exceptions_1.ResponseCode.BAD_REQUEST);
        }
    }
    async findMy(id) {
        try {
            const data = await this.schemaModel.find({ userId: id }).exec();
            return {
                data,
            };
        }
        catch (err) {
            throw new common_1.HttpException(err.message, exceptions_1.ResponseCode.BAD_REQUEST);
        }
    }
    async deletePost(id) {
        return await this.schemaModel
            .findByIdAndDelete(id)
            .exec()
            .catch((err) => {
            throw new common_1.HttpException(err.message, exceptions_1.ResponseCode.BAD_REQUEST);
        });
    }
    async findByUserId(id) {
        const post = await this.schemaModel.find({ userId: id }).exec();
        return post;
    }
    async findByMemberId(id) {
        const projects = await this.schemaModel
            .find({
            members: id
        })
            .populate({
            path: 'members',
            select: 'id displayName photoURL  ',
        })
            .select('title isCompleted members dueDate ')
            .exec();
        return projects;
    }
};
exports.ProjectsService = ProjectsService;
exports.ProjectsService = ProjectsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(project_schema_1.ProjectEntity.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ProjectsService);
//# sourceMappingURL=projects.service.js.map