import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import {
    IsArray,
    IsBoolean,

    IsNumber,
    IsOptional,
    IsString,
    Max,
    Min,
} from "class-validator";
import {
    validationMetadatasToSchemas,
} from "class-validator-jsonschema";
import mongoose, { Document } from "mongoose";


export type TaskDocument = TaskEntity & Document;
@Schema({
    toJSON: {
        getters: true,
        virtuals: true,
    },
    timestamps: true,
})
export class TaskEntity {
    id: string;

    @IsString()
    @ApiProperty({ description: "Title of the task" })
    @Prop({ type: String, required: true })
    taskName: string;

    @IsString()
    @IsOptional()
    @ApiProperty({ description: "Description of the task" })
    @Prop({ type: String })
    description: string;


    @IsString()
    @ApiProperty({ description: "Due date of the task" })
    @Prop({ type: String })
    dueDate: string;

    @IsNumber()
    @Min(1)
    @Max(3)
    @ApiProperty({ description: "Priority of the task", minimum: 1, maximum: 3, default: 3 })
    @Prop({ type: Number, default: 3 })
    priority: number;


    @IsOptional()
    @IsBoolean()
    @ApiProperty({ description: "Completion status of the task", default: false })
    @Prop({ type: Boolean, default: false })
    isCompleted: boolean;

    @IsOptional()
    @ApiProperty({ description: "current status of the task", default: false })
    @Prop({ type: String })
    status: string;



    @ApiProperty({ type: String, description: "Project reference ID" })
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'ProjectEntity' })
    projectId: mongoose.Types.ObjectId;

    @ApiProperty({ type: String, description: "user reference ID" })
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
    userId: mongoose.Types.ObjectId;

    @IsArray()
    @IsOptional()
    @ApiProperty({ description: "Users with whom the task is shared", type: [String] })
    @Prop({ type: [mongoose.Schema.Types.ObjectId], ref: 'User', default: [] })
    assignedTo: mongoose.Types.ObjectId[];


}





const TaskSchema = SchemaFactory.createForClass(TaskEntity);
TaskSchema.index({ location: "2dsphere" });

// Hooks
TaskSchema.virtual("id").get(function (this: TaskDocument) {
    return this._id.toString();
});
export { TaskSchema };
export const userJsonSchema = validationMetadatasToSchemas();

