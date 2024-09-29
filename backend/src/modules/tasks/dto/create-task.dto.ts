import { PickType } from "@nestjs/swagger";
import { TaskEntity } from "../schema/task.schema";

export class CreateTaskDto extends PickType(TaskEntity, [
    "taskName",
    "description",
    "dueDate",
    "priority",
    "status",
    "isCompleted",
    "projectId",

    "assignedTo",




] as const) {
    userId: string;
}
