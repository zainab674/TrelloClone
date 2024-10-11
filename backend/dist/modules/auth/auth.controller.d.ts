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
import { User } from "../user/user.schema";
import { UserService } from "../user/user.service";
import { AuthService } from "./auth.service";
import { UserLoginDto } from "./dto/user.login.dto";
import { TokenPayloadDto } from "./dto/TokenPayloadDto";
import { UserSignupDto } from "./dto/user.signup.dto";
import { TasksService } from "../tasks/tasks.service";
import { ProjectsService } from "../projects/projects.service";
export declare class AuthController {
    private userService;
    private authService;
    private tasksService;
    private projectService;
    constructor(userService: UserService, authService: AuthService, tasksService: TasksService, projectService: ProjectsService);
    generateString(length: any): Promise<string>;
    userLogin(userLoginDto: UserLoginDto): Promise<TokenPayloadDto>;
    userRegister(userRegisterDto: UserSignupDto): Promise<UserSignupDto>;
    getCurrentUser(user: User): Promise<{
        profile: import("mongoose").Document<unknown, {}, import("../user/user.schema").UserDocument> & User & import("mongoose").Document<any, any, any> & {
            _id: import("mongoose").Types.ObjectId;
        };
        tasks: any;
        projects: any;
        sharedProjects: any;
    }>;
    delete(user: User, pid: string): Promise<{
        message: string;
    }>;
}
