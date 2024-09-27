import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-User.dto';

import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schema/User';
import { Model } from 'mongoose';

@Injectable()
export class UserService {

  constructor(@InjectModel(User.name) private UserModel: Model<UserDocument>) {

  }
  create(createUserDto: CreateUserDto): Promise<User> {
    const model = new this.UserModel();
    model.name = createUserDto.name;
    model.job = createUserDto.job;
    model.email = createUserDto.email;
    model.phone = createUserDto.phone;
    model.date = createUserDto.date;
    model.status = createUserDto.status;
    return model.save();
  }

  findAll(): Promise<User[]> {
    return this.UserModel.find().exec();
  }

  findOne(id: string): Promise<User> {
    return this.UserModel.findById(id).exec();
  }


  remove(id: string) {
    return this.UserModel.deleteOne({ _id: id }).exec();
  }
}
