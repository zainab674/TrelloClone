import { PickType } from "@nestjs/swagger";
import { User } from "../../user/user.schema";

export class UserSignupDto extends PickType(User, [
  "displayName",
  "email",
  "password",

] as const) { }
