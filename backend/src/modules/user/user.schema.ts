import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsEmail,

  IsOptional,
  IsString,

  MinLength,
} from "class-validator";
import {
  JSONSchema,
  validationMetadatasToSchemas,
} from "class-validator-jsonschema";
import { Document } from "mongoose";
import { generateHash } from "../../common/utils";

export type UserDocument = User & Document;
@Schema({
  toJSON: {
    getters: true,
    virtuals: true,
  },
  timestamps: true,
})
export class User {
  id: string;









  @IsOptional()
  @IsString()

  @ApiProperty()
  @JSONSchema({
    description: "Display Name of User",
    title: "Name",
  })
  @Prop({ type: "string", trim: true, required: false })
  displayName: string;

  @ApiProperty()
  @IsEmail()
  @JSONSchema({
    description: "Email of User",
    title: "Email",
  })
  @Prop({
    type: "string",
    required: false,
    trim: true,
    lowercase: true,
    default: "",
  })
  email: string;


  @IsString()
  @ApiProperty()
  @IsString()

  @JSONSchema({
    description: "Password of User",
    title: "Password",
  })
  @Prop({ type: "string", trim: true, })
  password: string;



  @ApiProperty()
  @IsString()
  @IsOptional()
  @MinLength(5)
  @JSONSchema({
    description: "Information about User",
    title: "About",
  })
  @Prop({ type: "string", required: false })
  about: string;










  @IsOptional()
  @IsString()
  @MinLength(3)
  @ApiProperty({
    type: 'string',
    format: 'binary', // Ensures Swagger knows this is a file upload field
    description: "Avatar of User",
    title: "Avatar",
  })
  @JSONSchema({
    description: "Avatar of User",
    title: "Avatar",
  })
  @Prop({
    type: "string",
    format: 'binary', trim: true, required: false
  })
  photoURL: string;

}

const UserSchema = SchemaFactory.createForClass(User);
UserSchema.index({ userName: "text" });
// Hooks
UserSchema.pre<UserDocument>("save", async function (next) {
  this.password = generateHash(this.password);
  this.email = this.email.toLowerCase();
  next();
});

UserSchema.virtual("id").get(function (this: UserDocument) {
  return this._id.toString();
});
export { UserSchema };
export const userJsonSchema = validationMetadatasToSchemas();
