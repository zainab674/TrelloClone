import { Controller, Get, Post, Body, Param, Delete, Put, Query } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { ProjectEntity } from './schema/project.schema';
import { ApiTags, ApiQuery } from '@nestjs/swagger';
import { Action } from 'src/casl/userRoles';
import { constTexts } from 'src/constants';
import { Auth, ApiPageOkResponse, AuthUser } from 'src/decorators';
import { User } from '../user/user.schema';



@Controller('Projects')
@ApiTags('Projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) { }

  ////////////////////////////CREATE Project
  @Auth(Action.Create, "Project")
  @Post()
  @ApiPageOkResponse({
    description: "Create Project",
    type: ProjectEntity,
  })
  async create(
    @AuthUser() user: User,

    @Body() createDto: CreateProjectDto
  ) {


    createDto.userId = user.id
    // console.log(createDto)
    return this.projectsService.create(createDto);
  }

  ///////////////////////////////////Update
  @Auth(Action.Update, "Project")
  @Put(constTexts.projectRoute.update)

  @ApiPageOkResponse({
    description: "Update Project",
    type: ProjectEntity,
  })

  async update(
    @Param("id") id: string,
    @Body() updateDatato: UpdateProjectDto
  ) {
    console.log("uuuu", updateDatato)

    return this.projectsService.update(id, updateDatato);
  }




  ///////////////////get Project Members
  @Auth(Action.Read, "Project")
  @Get(constTexts.projectRoute.projectMembers)
  @ApiPageOkResponse({
    description: "Get Project Members",
    type: ProjectEntity,
  })
  async getProjectMembers(@Param('id') id: string, @AuthUser() user: User) {
    return this.projectsService.findByProjectId(id);
  }

  ///////////////////GET Project Details
  @Auth(Action.Read, "Project")
  @Get(constTexts.projectRoute.details)
  @ApiPageOkResponse({
    description: "Get Project ",
    type: ProjectEntity,
  })
  async getProject(@Param('id') id: string, @AuthUser() user: User) {
    return this.projectsService.findById(id);
  }


  ///////////////////GET ALL Projects
  @Get(constTexts.projectRoute.getAllPosts)
  @ApiPageOkResponse({
    description: "Get all List",
    type: ProjectEntity,
  })
  @ApiQuery({ name: "page", required: false, type: Number })
  @ApiQuery({ name: "limit", required: false, type: Number })
  findall(@Query("page") page = 1, @Query("limit") limit = 20) {
    return this.projectsService.findall(page, limit);
  }

  ///////////////////GET My Projects
  @Auth(Action.Read, "Post")
  @Get(constTexts.projectRoute.my)
  @ApiPageOkResponse({
    description: "Get My List",
    type: ProjectEntity,
  })

  async findMy(@AuthUser() user: User) {
    const id = user.id;
    return this.projectsService.findMy(id);
  }

  ///////////////////GET Users POSTS

  @Get(constTexts.projectRoute.users)
  @ApiPageOkResponse({
    description: "Get Users List",
    type: ProjectEntity,
  })

  async findUP(@Param("id") id: string) {
    // console.log(id)
    return this.projectsService.findMy(id);
  }


  //////////////////////////DELETE
  @Delete(constTexts.projectRoute.delete)
  @ApiPageOkResponse({
    description: "Delete Post",
    type: ProjectEntity,
  })
  @Auth(Action.Update, "Post")
  async deletePost(@Param("id") id: string) {
    return this.projectsService.deletePost(id);
  }





}


