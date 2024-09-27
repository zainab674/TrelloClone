import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './users/User.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/reactUser'), UserModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
