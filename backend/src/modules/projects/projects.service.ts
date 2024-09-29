import { HttpException, Injectable } from '@nestjs/common';
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

  ///////////////////CREATE Tasks
  async create(createProjectDto: CreateProjectDto) {
    const create: ProjectDocument = new this.schemaModel(createProjectDto);
    return await create.save().catch((err) => {
      throw new HttpException(err.message, ResponseCode.BAD_REQUEST);
    });
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
  async findById(postId: string): Promise<ProjectDocument> {
    return this.schemaModel
      .findById(postId).exec();
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
      console.log(data)
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
}
