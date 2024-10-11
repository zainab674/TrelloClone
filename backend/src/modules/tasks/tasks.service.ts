import { HttpException, Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { TaskEntity, TaskDocument } from './schema/task.schema';
import { ResponseCode } from 'src/exceptions';


@Injectable()
export class TasksService {

  constructor(
    @InjectModel(TaskEntity.name) private schemaModel: Model<TaskDocument>,


  ) { }


  ///////////////////CREATE Tasks
  async create(createTaskDto: CreateTaskDto) {
    const create: TaskDocument = new this.schemaModel(createTaskDto);
    return await create.save().catch((err) => {
      throw new HttpException(err.message, ResponseCode.BAD_REQUEST);
    });
  }

  ///////////////////////ALL POSTS
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

  /////////////////////FIND BY POSTID
  async findById(postId: string): Promise<TaskDocument> {
    return this.schemaModel
      .findById(postId).exec();
  }

  ////////////////////UPDATE POSTS
  async update(id: string, updateDataDto: UpdateTaskDto) {
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
    const post = await this.schemaModel.find({ userId: id })
      .populate({
        path: 'projectId',
        select: 'id title',  // Ensure you are selecting the `id` field
      })
      .exec();

    return post;
  }
  //////////////////////////POSTS BY ProjectID
  async findByProjectId(id: string): Promise<any> {
    if (!Types.ObjectId.isValid(id)) {
      throw new Error('Invalid projectId');
    }
    const post = await this.schemaModel.find({ projectId: id }).exec();

    return post;
  }
  async deleteByProjectId(id: string): Promise<any> {
    if (!Types.ObjectId.isValid(id)) {
      throw new Error('Invalid projectId');
    }
    const post = await this.schemaModel.deleteMany({ projectId: id }).exec();

    return post;
  }

}
