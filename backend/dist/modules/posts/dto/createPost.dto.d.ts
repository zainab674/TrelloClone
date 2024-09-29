import { PostEntity } from "../schema/post.schema";
declare const CreatePost_base: import("@nestjs/common").Type<Pick<PostEntity, "title" | "description">>;
export declare class CreatePost extends CreatePost_base {
    userId: string;
}
export {};
