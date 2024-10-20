import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProjectEntity, ProjectDocument } from './schema/project.schema';
import { ResponseCode } from 'src/exceptions';
// import { UpdateTaskDto } from '../tasks/dto/update-task.dto';

@Injectable()
export class ProjectsService {

  constructor(
    @InjectModel(ProjectEntity.name) private schemaModel: Model<ProjectDocument>,


  ) { }

  ///////////////////CREATE Projects
  async create(createProjectDto: CreateProjectDto) {
    const create: ProjectDocument = new this.schemaModel(createProjectDto);
    return await create.save().catch((err) => {
      throw new HttpException(err.message, ResponseCode.BAD_REQUEST);
    });
  }

  ///////////////////Add Task in Projects
  async AddTaskInProject(projectid: string, taskId: string) {
    const project = await this.schemaModel.findById(projectid).exec();
    if (project) {

      const updatedProject = await this.schemaModel.findByIdAndUpdate(
        projectid,
        { $push: { tasks: taskId } },
        { new: true }
      ).exec();

      return updatedProject;
    } else {
      throw new Error('Project not found');
    }
  }
  ///////////////////Add Memebers in Projects
  async AddMembersInProject(projectid: string, membersId: []) {
    const project = await this.schemaModel.findById(projectid).exec();
    if (project) {

      const updatedProject = await this.schemaModel.findByIdAndUpdate(
        projectid,
        { $push: { members: membersId } },
        { new: true }
      ).exec();

      return updatedProject;
    } else {
      throw new Error('Project not found');
    }
  }

  // Remove Task from Project
  async RemoveTaskFromProject(projectId: string, taskId: string) {

    const project = await this.schemaModel.findById(projectId).exec();

    if (project) {

      const updatedProject = await this.schemaModel.findByIdAndUpdate(
        projectId,
        { $pull: { tasks: taskId } },
        { new: true }
      ).exec();

      return updatedProject;
    } else {
      throw new Error('Project not found');
    }
  }








  async findByProjectId(id: string): Promise<any> {
    const project = await this.schemaModel.findById(id)
      .populate({
        path: 'members',
        select: 'id displayName',  // Ensure you are selecting the `id` field
      })
      .exec();

    // Check if the project exists
    if (!project) {
      throw new NotFoundException(`Project with ID ${id} not found.`);
    }

    return project.members; // Return only the members array
  }





  ///////////////////////ALL Projects
  async findall(page = 1, limit = 20) {
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const totalCount = await this.schemaModel.find().exec();
    const totalPages = Math.ceil(totalCount.length / limit);
    const data = await this.schemaModel
      .aggregate([
        {
          $skip: startIndex,
        },
        {
          $limit: endIndex,
        },
      ])
      .exec()
      .catch((err) => {
        throw new HttpException(err.message, ResponseCode.BAD_REQUEST);
      });

    return {
      totalCount: totalCount.length,
      totalPages: totalPages,
      data: data,
    };
  }

  /////////////////////FIND BY ProjectID
  async findById(id: string): Promise<ProjectDocument> {
    return this.schemaModel
      .findById(id).exec();
  }

  ////////////////////UPDATE POSTS
  async update(id: string, updateDataDto: UpdateProjectDto) {
    try {
      const verify = await this.schemaModel.findById(id);

      if (!verify) {
        throw new HttpException('Post not found', ResponseCode.NOT_FOUND);
      }


      const updateData = await this.schemaModel
        .findByIdAndUpdate(id, updateDataDto, { new: true })
        .exec();

      return { data: updateData };
    } catch (err) {
      throw new HttpException(err.message, ResponseCode.BAD_REQUEST);
    }
  }

  ////////////////////////MY POSTS
  async findMy(id: string) {
    try {
      const data = await this.schemaModel.find({ userId: id }).exec();
      // console.log(data)
      return {
        data,
      };
    } catch (err) {
      throw new HttpException(err.message, ResponseCode.BAD_REQUEST);
    }
  }

  ///////////////DELETE  POSTS
  async deletePost(id: string) {
    return await this.schemaModel
      .findByIdAndDelete(id)
      .exec()
      .catch((err) => {
        throw new HttpException(err.message, ResponseCode.BAD_REQUEST);
      });
  }


  //////////////////////////POSTS BY USERID
  async findByUserId(id: string): Promise<any> {
    const post = await this.schemaModel.find({ userId: id }).exec();

    return post;
  }
  //////////////////////////POSTS BY USERID
  async findByMemberId(id: string): Promise<any> {
    const projects = await this.schemaModel
      .find({
        members: id  // Directly check if the id exists in the members array
      })
      .populate({
        path: 'members',
        select: 'id displayName photoURL  ',  // Ensure you are selecting the `id` field
      })
      // .exec();
      .select('title isCompleted members dueDate ')  // Select fields to include
      .exec();

    return projects;
  }



}
