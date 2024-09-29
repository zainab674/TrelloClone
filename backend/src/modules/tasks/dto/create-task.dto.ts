import { PickType } from "@nestjs/swagger";
import { TaskEntity } from "../schema/task.schema";

export class CreateTaskDto extends PickType(TaskEntity, [
    "title",
    "description",
    "dueDate",
    "priority",
    "labels",
    "isCompleted",
    "project",

    "sharedWith",




] as const) {
    userId: string;
}
