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
exports.TasksService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const task_schema_1 = require("./schema/task.schema");
const exceptions_1 = require("../../exceptions");
let TasksService = class TasksService {
    constructor(schemaModel) {
        this.schemaModel = schemaModel;
    }
    async create(createTaskDto) {
        const create = new this.schemaModel(createTaskDto);
        return await create.save().catch((err) => {
            throw new common_1.HttpException(err.message, exceptions_1.ResponseCode.BAD_REQUEST);
        });
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
    async findById(postId) {
        return this.schemaModel
            .findById(postId).exec();
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
        const post = await this.schemaModel.find({ userId: id })
            .populate({
            path: 'projectId',
            select: 'id title',
        })
            .exec();
        return post;
    }
    async findByProjectId(id) {
        if (!mongoose_2.Types.ObjectId.isValid(id)) {
            throw new Error('Invalid projectId');
        }
        const post = await this.schemaModel.find({ projectId: id }).exec();
        return post;
    }
};
exports.TasksService = TasksService;
exports.TasksService = TasksService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(task_schema_1.TaskEntity.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], TasksService);
//# sourceMappingURL=tasks.service.js.map