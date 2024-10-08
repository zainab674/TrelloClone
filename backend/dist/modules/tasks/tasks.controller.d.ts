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
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { User } from '../user/user.schema';
import { TaskEntity } from './schema/task.schema';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Types } from 'mongoose';
import { ProjectsService } from '../projects/projects.service';
export declare class TasksController {
    private readonly tasksService;
    private readonly projectService;
    constructor(tasksService: TasksService, projectService: ProjectsService);
    create(user: User, createDto: CreateTaskDto): Promise<import("./schema/task.schema").TaskDocument>;
    update(user: User, id: string, updateDatato: UpdateTaskDto): Promise<{
        data: import("mongoose").Document<unknown, {}, import("./schema/task.schema").TaskDocument> & TaskEntity & import("mongoose").Document<any, any, any> & {
            _id: Types.ObjectId;
        };
    }>;
    findall(page?: number, limit?: number): Promise<{
        totalCount: number;
        totalPages: number;
        data: any[];
    }>;
    findMy(user: User): Promise<{
        data: (import("mongoose").Document<unknown, {}, import("./schema/task.schema").TaskDocument> & TaskEntity & import("mongoose").Document<any, any, any> & {
            _id: Types.ObjectId;
        })[];
    }>;
    findUP(id: string): Promise<{
        data: (import("mongoose").Document<unknown, {}, import("./schema/task.schema").TaskDocument> & TaskEntity & import("mongoose").Document<any, any, any> & {
            _id: Types.ObjectId;
        })[];
    }>;
    findTasks(id: string): Promise<any>;
    deletePost(taskId: string): Promise<import("mongoose").ModifyResult<import("mongoose").Document<unknown, {}, import("./schema/task.schema").TaskDocument> & TaskEntity & import("mongoose").Document<any, any, any> & {
        _id: Types.ObjectId;
    }>>;
}
