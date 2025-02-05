import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,

  HttpException,

  HttpStatus,
  Param,
  Post,
} from "@nestjs/common";
import { UseGuards } from "@nestjs/common/decorators/core/use-guards.decorator";
import { ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { getCharacterString } from "../../common/utils";
import { Action } from "../../casl/userRoles";
import { constTexts } from "../../constants";
import { Auth, AuthUser, Public } from "../../decorators";
import { User } from "../user/user.schema";
import { UserService } from "../user/user.service";
import { IsUserUnique } from "./../../decorators/user-signup.decorator";
import { AuthService } from "./auth.service";
import { UserLoginDto } from "./dto/user.login.dto";
import { TokenPayloadDto } from "./dto/TokenPayloadDto";

import { UserSignupDto } from "./dto/user.signup.dto";
import { TasksService } from "../tasks/tasks.service";
import { ProjectsService } from "../projects/projects.service";
import { SocketService } from "../socket/socket.service";
// import { PostsService } from "../posts/posts.service";
// import { AssignedTasksService } from "../assigned-tasks/assigned-tasks.service";

@Controller(constTexts.authRoute.name)
@ApiTags(constTexts.authRoute.name)
export class AuthController {
  // loggerService: any;
  constructor(
    private userService: UserService,
    private authService: AuthService,
    private tasksService: TasksService,
    private projectService: ProjectsService,
    private socketService: SocketService,
  ) { }

  async generateString(length) {
    let result = "";
    const characters = getCharacterString();
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }





  ////////////////////////////////////LOGIN
  @Public()
  @Post(constTexts.authRoute.login)
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({
    type: TokenPayloadDto,
    description: "User info with access token",
  })
  async userLogin(
    @Body() userLoginDto: UserLoginDto
  ): Promise<TokenPayloadDto> {
    const userEntity: User = await this.authService.validateUser(userLoginDto);
    // console.log(userEntity)

    const token: TokenPayloadDto =
      await this.authService.createAccessToken(userEntity);
    return token;

  }


  ////////////////////////////////////////////////////SignUp
  @Public()
  @Post(constTexts.authRoute.signUp)
  @HttpCode(HttpStatus.CREATED)
  @ApiOkResponse({ type: User, description: "Successfully Registered" })
  @UseGuards(IsUserUnique)
  async userRegister(
    @Body() userRegisterDto: UserSignupDto
  ): Promise<UserSignupDto> {
    return await this.userService.createUser(userRegisterDto);
  }

  /////////////////////MY PROFILE
  @Get(constTexts.authRoute.me)
  @HttpCode(HttpStatus.OK)
  @Auth(Action.Read, "User")
  @ApiOkResponse({ type: User, description: "current user info" })
  async getCurrentUser(@AuthUser() user: User) {
    const [profileData, tasks, projects, sharedProjects, notify] = await Promise.all([
      this.userService.getProfileData(user.id),
      this.tasksService.findByUserId(user.id),
      this.projectService.findByUserId(user.id),
      this.projectService.findByMemberId(user.id),
      this.socketService.getAll(user.id),

    ]);

    return {
      profile: profileData,
      tasks: tasks,
      projects: projects,
      sharedProjects: sharedProjects,
      notify: notify,

    };
  }


  @Delete(constTexts.authRoute.delete)
  @HttpCode(HttpStatus.OK)
  @Auth(Action.Read, "User")
  async delete(
    @AuthUser() user: User,
    @Param("id") pid: string
  ) {
    try {

      const project = await this.projectService.findById(pid);


      if (!project || project.userId.toString() !== user.id) {
        throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
      }


      await this.tasksService.deleteByProjectId(pid);


      await this.projectService.deletePost(pid);

      return { message: 'Project and its tasks deleted successfully' };
    } catch (error) {

      throw new HttpException(error.message || 'Error deleting project', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }



}
