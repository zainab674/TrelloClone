import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import {
    IsOptional,
    IsString,
    MinLength,
} from "class-validator";
import {
    JSONSchema,
    validationMetadatasToSchemas,
} from "class-validator-jsonschema";

import mongoose, { Document } from 'mongoose';



export type SocketDocument = Socket & Document;
@Schema({
    toJSON: {
        getters: true,
        virtuals: true,
    },
    timestamps: true,
})
export class Socket {
    id: string;

    // RECEPIANT ID
    // @ApiProperty()
    // @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
    // recepientId: string;

    // SENDER ID
    // @ApiProperty()
    // @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
    // senderId: string;

    @IsOptional()
    @ApiProperty({
        description: "Members ",
        example: ["609c5a6a29a47b0015fb32bd", "609c5a6a29a47b0015fb32be"],
    })
    @Prop({
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
    })
    members: mongoose.Types.ObjectId[];



    //Message OF Socket
    @IsOptional()
    @ApiProperty()
    @IsString()
    @MinLength(5)
    @JSONSchema({
        description: "Message",
        title: "Message",
    })
    @Prop({ type: "string" })
    message: string;











}





const SocketSchema = SchemaFactory.createForClass(Socket);
SocketSchema.index({ SocketName: "text" });


SocketSchema.virtual("id").get(function (this: SocketDocument) {
    return this._id.toString();
});
export { SocketSchema };
export const SocketJsonSchema = validationMetadatasToSchemas();
