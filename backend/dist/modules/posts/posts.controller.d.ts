/// <reference types="multer" />
/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { PostsService } from "./posts.service";
import { PostEntity } from "./schema/post.schema";
import { User } from "../user/user.schema";
import { UpdatePostDto } from "./dto/updatePost.dto";
import { CreatePost } from "./dto/createPost.dto";
import { SearchDto } from "./dto/search.dto";
export declare class PostsController {
    private readonly postsService;
    constructor(postsService: PostsService);
    create(user: User, createDto: CreatePost): Promise<import("./schema/post.schema").PostDocument>;
    update(user: User, id: string, images: Array<Express.Multer.File>, updateDatato: UpdatePostDto): Promise<{
        data: import("mongoose").Document<unknown, {}, import("./schema/post.schema").PostDocument> & PostEntity & import("mongoose").Document<any, any, any> & {
            _id: import("mongoose").Types.ObjectId;
        };
    }>;
    findall(page?: number, limit?: number): Promise<{
        totalCount: number;
        totalPages: number;
        data: any[];
    }>;
    findMy(user: User): Promise<{
        data: (import("mongoose").Document<unknown, {}, import("./schema/post.schema").PostDocument> & PostEntity & import("mongoose").Document<any, any, any> & {
            _id: import("mongoose").Types.ObjectId;
        })[];
    }>;
    findUP(id: string): Promise<{
        data: (import("mongoose").Document<unknown, {}, import("./schema/post.schema").PostDocument> & PostEntity & import("mongoose").Document<any, any, any> & {
            _id: import("mongoose").Types.ObjectId;
        })[];
    }>;
    deletePost(id: string): Promise<import("mongoose").ModifyResult<import("mongoose").Document<unknown, {}, import("./schema/post.schema").PostDocument> & PostEntity & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>>;
    searchedPosts(searchDto: SearchDto): Promise<any>;
}
