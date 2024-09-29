import { User } from "../../user/user.schema";
declare const ResetPasswordDto_base: import("@nestjs/common").Type<Pick<User, "email" | "password">>;
export declare class ResetPasswordDto extends ResetPasswordDto_base {
}
export {};
