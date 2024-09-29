"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePost = void 0;
const swagger_1 = require("@nestjs/swagger");
const post_schema_1 = require("../schema/post.schema");
class CreatePost extends (0, swagger_1.PickType)(post_schema_1.PostEntity, [
    "title",
    "description",
]) {
}
exports.CreatePost = CreatePost;
//# sourceMappingURL=createPost.dto.js.map