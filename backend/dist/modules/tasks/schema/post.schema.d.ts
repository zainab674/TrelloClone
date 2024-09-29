/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import mongoose, { Document } from "mongoose";
export type TaskDocument = TaskEntity & Document;
export declare class TaskEntity {
    id: string;
    title: string;
    description: string;
    dueDate: Date;
    priority: number;
    labels: string[];
    isCompleted: boolean;
    project: mongoose.Types.ObjectId;
    owner: mongoose.Types.ObjectId;
    sharedWith: mongoose.Types.ObjectId[];
}
declare const TaskSchema: mongoose.Schema<TaskEntity, mongoose.Model<TaskEntity, any, any, any, mongoose.Document<unknown, any, TaskEntity> & TaskEntity & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, TaskEntity, mongoose.Document<unknown, {}, mongoose.FlatRecord<TaskEntity>> & mongoose.FlatRecord<TaskEntity> & {
    _id: mongoose.Types.ObjectId;
}>;
export { TaskSchema };
export declare const userJsonSchema: Record<string, import("openapi3-ts").SchemaObject>;
