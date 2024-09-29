import { PartialType } from "@nestjs/swagger";
import { ProjectEntity } from "../schema/project.schema";

export class CreateProjectDto extends PartialType(ProjectEntity) {

}
