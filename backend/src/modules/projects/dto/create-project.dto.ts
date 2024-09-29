import { PickType } from "@nestjs/swagger";
import { ProjectEntity } from "../schema/project.schema";

export class CreateProjectDto extends PickType(ProjectEntity, [
    "title",
    "description",
    "dueDate",
    "isCompleted",
    "members",
    "tasks",





] as const) {
    userId: string;

}
