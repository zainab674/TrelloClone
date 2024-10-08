import { TaskEntity } from "../schema/task.schema";
declare const CreateTaskDto_base: import("@nestjs/common").Type<Pick<TaskEntity, "taskName" | "description" | "dueDate" | "priority" | "status" | "projectId" | "assignedBy" | "assignedTo">>;
export declare class CreateTaskDto extends CreateTaskDto_base {
    userId: string;
}
export {};
