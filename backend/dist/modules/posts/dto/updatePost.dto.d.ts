import { PostEntity } from "../schema/post.schema";
declare const UpdatePostDto_base: import("@nestjs/common").Type<Partial<Pick<PostEntity, "title" | "description" | "isCompleted">>>;
export declare class UpdatePostDto extends UpdatePostDto_base {
}
export {};
