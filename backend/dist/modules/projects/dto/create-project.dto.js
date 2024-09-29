"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProjectDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const project_schema_1 = require("../schema/project.schema");
class CreateProjectDto extends (0, swagger_1.PartialType)(project_schema_1.ProjectEntity) {
}
exports.CreateProjectDto = CreateProjectDto;
//# sourceMappingURL=create-project.dto.js.map