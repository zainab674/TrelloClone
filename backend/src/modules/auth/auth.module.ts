import { Module } from "@nestjs/common";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { UserModule } from "../user/user.module";
import { JwtStrategy } from "./jwt.strategy";
import { AppConfig } from "./../../configuration/app.config";
import { HttpModule } from "@nestjs/axios";
import { TasksModule } from "../tasks/tasks.module";
import { ProjectsModule } from "../projects/projects.module";
import { SocketModule } from "../socket/socket.module";
// import { TasksService } from "../tasks/tasks.service";
// import { PostsModule } from "../posts/posts.module";
// import { AssignedTasksModule } from "../assigned-tasks/assigned-tasks.module";

@Module({
  imports: [
    UserModule,
    PassportModule.register({ defaultStrategy: "jwt" }),
    JwtModule.registerAsync({
      useFactory: async () => ({
        secret: AppConfig.authConfig.publicKey,
        signOptions: {
          // expiresIn: AppConfig.authConfig.jwtExpirationTime,
        },
      }),
    }),
    // AssignedTasksModule,
    HttpModule,
    ProjectsModule,
    TasksModule,
    SocketModule

  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule { }
