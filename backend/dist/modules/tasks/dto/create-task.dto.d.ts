import { TaskEntity } from "../schema/task.schema";
declare const CreateTaskDto_base: import("@nestjs/common").Type<Pick<TaskEntity, "title" | "description" | "dueDate" | "priority" | "labels" | "isCompleted" | "project" | "sharedWith">>;
export declare class CreateTaskDto extends CreateTaskDto_base {
    userId: string;
}
export {};
