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
import { Types } from 'mongoose';
import { ProjectsService } from '../projects/projects.service';

@Controller('tasks')
@ApiTags('tasks')
export class TasksController {
  constructor(
    private readonly tasksService: TasksService,
    private readonly projectService: ProjectsService,


  ) { }

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
    createDto.assignedBy = new Types.ObjectId(user.id);
    const task = await this.tasksService.create(createDto);

    if (task.projectId) {
      await this.projectService.AddTaskInProject(task.projectId.toString(), task.id.toString());
    } else {
      throw new Error("Task must be associated with a project.");
    }


    return task;
  }


  ///////////////////////////////////Update Task
  @Auth(Action.Update, "Task")
  @Put(constTexts.taskRoute.update)

  @ApiPageOkResponse({
    description: "Update Task",
    type: TaskEntity,
  })

  async update(
    @AuthUser() user: User,
    @Param("id") id: string,
    @Body() updateDatato: UpdateTaskDto) {

    updateDatato.assignedBy = new Types.ObjectId(user.id);

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



  ///////////////////GET Users Tasks
  @Get(constTexts.taskRoute.users)
  @ApiPageOkResponse({
    description: "Get Users List",
    type: TaskEntity,
  })

  async findUP(@Param("id") id: string) {

    return this.tasksService.findMy(id);
  }


  ///////////////////GET Projects TASKS
  @Get(constTexts.taskRoute.BYprojectID)
  @ApiPageOkResponse({
    description: "Get Users List",
    type: TaskEntity,
  })

  async findTasks(@Param("id") id: string) {

    return this.tasksService.findByProjectId(id);
  }


  ///////// DELETE Tasks
  @Delete(constTexts.taskRoute.delete)
  @ApiPageOkResponse({
    description: "Delete Task",
    type: TaskEntity,
  })
  @Auth(Action.Update, "Post")
  async deletePost(@Param("id") taskId: string) {

    const task = await this.tasksService.findById(taskId);
    if (!task) {
      throw new Error('Task not found');
    }

    const projectId = task.projectId;

    await this.projectService.RemoveTaskFromProject(projectId.toString(), taskId);


    const deletedTask = await this.tasksService.deletePost(taskId);

    return deletedTask;
  }





}


