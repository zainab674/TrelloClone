import { ProjectEntity } from "../schema/project.schema";
declare const CreateProjectDto_base: import("@nestjs/common").Type<Pick<ProjectEntity, "title" | "description" | "dueDate" | "isCompleted" | "members" | "tasks">>;
export declare class CreateProjectDto extends CreateProjectDto_base {
    userId: string;
}
export {};
