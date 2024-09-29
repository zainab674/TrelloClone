import { Controller, Get, Post, Body, Param, Delete, Put, Query, } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
// import { UpdateTaskDto } from './dto/update-task.dto';

import { Action } from 'src/casl/userRoles';
import { Auth, ApiPageOkResponse, AuthUser } from 'src/decorators';

import { User } from '../user/user.schema';
import { TaskEntity } from './schema/task.schema';
// import { ApiConsumes, ApiQuery } from '@nestjs/swagger';
import { constTexts } from 'src/constants'; 
// import { MultipleFileUpload } from 'src/interceptors/multi-upload.interceptor';
// import { UpdatePostDto } from '../posts/dto/updatePost.dto';
// import { PostEntity } from '../posts/schema/post.schema';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller('tasks')
@ApiTags('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) { }

  ////////////////////////////CREATE Task
  @Auth(Action.Create, "Task")
  @Post()
  @ApiPageOkResponse({
    description: "Create Task",
    type: TaskEntity,
  })
  async create(
    @AuthUser() user: User,

    @Body() createDto: CreateTaskDto
  ) {
    createDto.userId = user.id;


    console.log(createDto)
    return this.tasksService.create(createDto);
  }

  ///////////////////////////////////Update
  @Auth(Action.Update, "Task")
  @Put(constTexts.taskRoute.update)

  @ApiPageOkResponse({
    description: "Update Task",
    type: TaskEntity,
  })

  async update(

    @Param("id") id: string,
    @Body() updateDatato: UpdateTaskDto) {

    console.log(updateDatato)

    return this.tasksService.update(id, updateDatato);
  }

  ///////////////////GET ALL Tasks
  @Get(constTexts.taskRoute.getAllPosts)
  @ApiPageOkResponse({
    description: "Get all List",
    type: TaskEntity,
  })
  @ApiQuery({ name: "page", required: false, type: Number })
  @ApiQuery({ name: "limit", required: false, type: Number })
  findall(@Query("page") page = 1, @Query("limit") limit = 20) {
    return this.tasksService.findall(page, limit);
  }

  ///////////////////GET My Tasks
  @Auth(Action.Read, "Post")
  @Get(constTexts.taskRoute.my)
  @ApiPageOkResponse({
    description: "Get My List",
    type: TaskEntity,
  })

  async findMy(@AuthUser() user: User) {
    const id = user.id;
    return this.tasksService.findMy(id);
  }

  ///////////////////GET Users POSTS

  @Get(constTexts.taskRoute.users)
  @ApiPageOkResponse({
    description: "Get Users List",
    type: TaskEntity,
  })

  async findUP(@Param("id") id: string) {
    console.log(id)
    return this.tasksService.findMy(id);
  }


  //////////////////////////DELETE
  @Delete(constTexts.taskRoute.delete)
  @ApiPageOkResponse({
    description: "Delete Post",
    type: TaskEntity,
  })
  @Auth(Action.Update, "Post")
  async deletePost(@Param("id") id: string) {
    return this.tasksService.deletePost(id);
  }





}


