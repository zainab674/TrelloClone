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
    // Find all documents where the given id is in the members array
    const messages = await this.socketModel.find({
      members: { $in: [id] } // Check if id exists in the members array
    }).exec();

    return messages;

  }





}
