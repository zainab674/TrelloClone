import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { CaslModule } from "./casl/casl.module";
import { ConfigurationModule } from "./configuration/configuration.module";
import { ConfigurationService } from "./configuration/configuration.service";
import { AuthModule } from "./modules/auth/auth.module";

import { TasksModule } from "./modules/tasks/tasks.module";
import { ProjectsModule } from "./modules/projects/projects.module";
import { SocketModule } from "./modules/socket/socket.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { join } from "path";


@Module({
  imports: [
    ConfigurationModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigurationModule],
      useFactory: async (configService: ConfigurationService) =>
        configService.mongooseConfig,
      inject: [ConfigurationService],
    }),
    AuthModule,
    CaslModule,

    TasksModule,
    SocketModule,
    ProjectsModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'), // Specify the directory
    }),

  ],
  controllers: [AppController],
  providers: [AppService],
  exports: [AppModule],
})
export class AppModule { }
