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
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Model, Types } from 'mongoose';
import { TaskEntity, TaskDocument } from './schema/task.schema';
export declare class TasksService {
    private schemaModel;
    constructor(schemaModel: Model<TaskDocument>);
    create(createTaskDto: CreateTaskDto): Promise<TaskDocument>;
    findall(page?: number, limit?: number): Promise<{
        totalCount: number;
        totalPages: number;
        data: any[];
    }>;
    findById(postId: string): Promise<TaskDocument>;
    update(id: string, updateDataDto: UpdateTaskDto): Promise<{
        data: import("mongoose").Document<unknown, {}, TaskDocument> & TaskEntity & import("mongoose").Document<any, any, any> & {
            _id: Types.ObjectId;
        };
    }>;
    findMy(id: string): Promise<{
        data: (import("mongoose").Document<unknown, {}, TaskDocument> & TaskEntity & import("mongoose").Document<any, any, any> & {
            _id: Types.ObjectId;
        })[];
    }>;
    deletePost(id: string): Promise<import("mongoose").ModifyResult<import("mongoose").Document<unknown, {}, TaskDocument> & TaskEntity & import("mongoose").Document<any, any, any> & {
        _id: Types.ObjectId;
    }>>;
    findByUserId(id: string): Promise<any>;
    findByProjectId(id: string): Promise<any>;
}
