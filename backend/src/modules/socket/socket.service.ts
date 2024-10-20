import { Injectable } from '@nestjs/common';
import { CreateSocketDto } from './dto/create-socket.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Socket, SocketDocument } from './socket.schema';
import { Model } from 'mongoose';
// import { responseSuccessMessage } from 'src/constants';
// import { responseFailedMessage } from 'src/constants';


@Injectable()
export class SocketService {


  constructor(
    @InjectModel(Socket.name) private socketModel: Model<SocketDocument>,
  ) { }



  async create(createSocketDto: CreateSocketDto): Promise<any> {
    const createdSocket = new this.socketModel(
      createSocketDto
    );
    const result = await createdSocket.save();

    // console.log(result)
    return (result);

  }





  async getAll(id: string): Promise<any> {
    const messages = await this.socketModel
      .find({
        members: { $in: [id] }
      })
      .sort({ createdAt: -1 }) // Sort by 'createdAt' in descending order
      .exec();

    return messages;
  }
  async delete(id: string): Promise<any> {
    const message = await this.socketModel.findByIdAndDelete(id).exec();
    return message;
  }







}
