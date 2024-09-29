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
Object.defineProperty(exports, "__esModule", { value: true });
exports.userJsonSchema = exports.TaskSchema = exports.TaskEntity = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_validator_jsonschema_1 = require("class-validator-jsonschema");
const mongoose_2 = require("mongoose");
let TaskEntity = class TaskEntity {
};
exports.TaskEntity = TaskEntity;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ description: "Title of the task" }),
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], TaskEntity.prototype, "taskName", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ description: "Description of the task" }),
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], TaskEntity.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ description: "Due date of the task" }),
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], TaskEntity.prototype, "dueDate", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(3),
    (0, swagger_1.ApiProperty)({ description: "Priority of the task", minimum: 1, maximum: 3, default: 3 }),
    (0, mongoose_1.Prop)({ type: Number, default: 3 }),
    __metadata("design:type", Number)
], TaskEntity.prototype, "priority", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    (0, swagger_1.ApiProperty)({ description: "Completion status of the task", default: false }),
    (0, mongoose_1.Prop)({ type: Boolean, default: false }),
    __metadata("design:type", Boolean)
], TaskEntity.prototype, "isCompleted", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ description: "current status of the task", default: false }),
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], TaskEntity.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, description: "Project reference ID" }),
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.Types.ObjectId, ref: 'ProjectEntity' }),
    __metadata("design:type", mongoose_2.default.Types.ObjectId)
], TaskEntity.prototype, "projectId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: String, description: "user reference ID" }),
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.Types.ObjectId, ref: 'User' }),
    __metadata("design:type", mongoose_2.default.Types.ObjectId)
], TaskEntity.prototype, "userId", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ description: "Users with whom the task is shared", type: [String] }),
    (0, mongoose_1.Prop)({ type: [mongoose_2.default.Schema.Types.ObjectId], ref: 'User', default: [] }),
    __metadata("design:type", Array)
], TaskEntity.prototype, "assignedTo", void 0);
exports.TaskEntity = TaskEntity = __decorate([
    (0, mongoose_1.Schema)({
        toJSON: {
            getters: true,
            virtuals: true,
        },
        timestamps: true,
    })
], TaskEntity);
const TaskSchema = mongoose_1.SchemaFactory.createForClass(TaskEntity);
exports.TaskSchema = TaskSchema;
TaskSchema.index({ location: "2dsphere" });
TaskSchema.virtual("id").get(function () {
    return this._id.toString();
});
exports.userJsonSchema = (0, class_validator_jsonschema_1.validationMetadatasToSchemas)();
//# sourceMappingURL=task.schema.js.map