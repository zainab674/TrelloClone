import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import {
    IsArray,
    IsBoolean,

    IsOptional,
    IsString,

} from "class-validator";
import {
    validationMetadatasToSchemas,
} from "class-validator-jsonschema";
import mongoose, { Document } from "mongoose";


export type ProjectDocument = ProjectEntity & Document;
@Schema({
    toJSON: {
        getters: true,
        virtuals: true,
    },
    timestamps: true,
})
export class ProjectEntity {
    id: string;

    @IsString()
    @ApiProperty({ description: "Title of the Project" })
    @Prop({ type: String, required: true })
    title: string;

    @IsOptional()
    @IsString()
    @IsOptional()
    @ApiProperty({ description: "Description of the Project" })
    @Prop({ type: String })
    description: string;

    @IsOptional()
    @IsString()
    @ApiProperty({ description: "Due date of the Project" })
    @Prop({ type: String })
    dueDate: string;

    @IsOptional()
    @IsBoolean()
    @ApiProperty({ description: "Completion status of the Project", default: false })
    @Prop({ type: Boolean, default: false })
    isCompleted: boolean;


    @IsOptional()
    @ApiProperty({ type: String, description: "user reference ID" })
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
    userId: mongoose.Types.ObjectId;


    @IsOptional()
    @ApiProperty({
        description: "Members assigned to tasks",
        example: ["609c5a6a29a47b0015fb32bd", "609c5a6a29a47b0015fb32be"],
    })
    @Prop({
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
    })
    members: mongoose.Types.ObjectId[];




    @IsOptional()
    @IsArray()
    @IsOptional()
    @ApiProperty({ description: "tasks of projects", type: [String] })
    @Prop({ type: [mongoose.Schema.Types.ObjectId], ref: 'TaskEntity', default: [] })
    tasks: mongoose.Types.ObjectId[];







}





const ProjectSchema = SchemaFactory.createForClass(ProjectEntity);
ProjectSchema.index({ location: "2dsphere" });

// Hooks
ProjectSchema.virtual("id").get(function (this: ProjectDocument) {
    return this._id.toString();
});
export { ProjectSchema };
export const userJsonSchema = validationMetadatasToSchemas();

