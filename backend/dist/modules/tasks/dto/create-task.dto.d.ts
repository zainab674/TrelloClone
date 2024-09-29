import { TaskEntity } from "../schema/task.schema";
declare const CreateTaskDto_base: import("@nestjs/common").Type<Pick<TaskEntity, "taskName" | "description" | "dueDate" | "priority" | "isCompleted" | "status" | "projectId" | "assignedTo">>;
export declare class CreateTaskDto extends CreateTaskDto_base {
    userId: string;
}
export {};
