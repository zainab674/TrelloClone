"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userJsonSchema = exports.UserSchema = exports.User = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_validator_jsonschema_1 = require("class-validator-jsonschema");
const utils_1 = require("../../common/utils");
let User = class User {
};
exports.User = User;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_jsonschema_1.JSONSchema)({
        description: "Display Name of User",
        title: "Name",
    }),
    (0, mongoose_1.Prop)({ type: "string", trim: true, required: false }),
    __metadata("design:type", String)
], User.prototype, "displayName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_jsonschema_1.JSONSchema)({
        description: "Email of User",
        title: "Email",
    }),
    (0, mongoose_1.Prop)({
        type: "string",
        required: false,
        trim: true,
        lowercase: true,
        default: "",
    }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_jsonschema_1.JSONSchema)({
        description: "Password of User",
        title: "Password",
    }),
    (0, mongoose_1.Prop)({ type: "string", trim: true, }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MinLength)(5),
    (0, class_validator_jsonschema_1.JSONSchema)({
        description: "Information about User",
        title: "About",
    }),
    (0, mongoose_1.Prop)({ type: "string", required: false }),
    __metadata("design:type", String)
], User.prototype, "about", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(3),
    (0, swagger_1.ApiProperty)({
        type: 'string',
        format: 'binary',
        description: "Avatar of User",
        title: "Avatar",
    }),
    (0, class_validator_jsonschema_1.JSONSchema)({
        description: "Avatar of User",
        title: "Avatar",
    }),
    (0, mongoose_1.Prop)({
        type: "string",
        format: 'binary', trim: true, required: false
    }),
    __metadata("design:type", String)
], User.prototype, "photoURL", void 0);
exports.User = User = __decorate([
    (0, mongoose_1.Schema)({
        toJSON: {
            getters: true,
            virtuals: true,
        },
        timestamps: true,
    })
], User);
const UserSchema = mongoose_1.SchemaFactory.createForClass(User);
exports.UserSchema = UserSchema;
UserSchema.index({ userName: "text" });
UserSchema.pre("save", async function (next) {
    this.password = (0, utils_1.generateHash)(this.password);
    this.email = this.email.toLowerCase();
    next();
});
UserSchema.virtual("id").get(function () {
    return this._id.toString();
});
exports.userJsonSchema = (0, class_validator_jsonschema_1.validationMetadatasToSchemas)();
//# sourceMappingURL=user.schema.js.map