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
exports.MyGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const socket_io_1 = require("socket.io");
const auth_service_1 = require("../auth/auth.service");
const socket_service_1 = require("./socket.service");
const create_socket_dto_1 = require("./dto/create-socket.dto");
let MyGateway = class MyGateway {
    constructor(authService, socketService) {
        this.authService = authService;
        this.socketService = socketService;
        this.clients = new Map();
    }
    async getUserFromSocket(socket) {
        const token = socket.handshake.headers.authorization;
        return (this.authService.getUserFromToken(token) || "");
    }
    async handleConnection(socket) {
        const token = socket.handshake.headers.authorization;
        const user = await this.authService.getUserFromToken(token);
        if (user) {
            this.clients.set(user.userId, socket);
            console.log("Client connected: ", user.userId);
            const messages = await this.socketService.getAll(user.userId);
            socket.emit('allMessages', messages);
        }
        else {
            socket.emit('error', { message: 'Unauthorized' });
            socket.disconnect();
        }
    }
    handleDisconnect(socket) {
        for (let [userId, clientSocket] of this.clients.entries()) {
            if (clientSocket.id === socket.id) {
                this.clients.delete(userId);
                console.log("Client disconnected:", userId);
                break;
            }
        }
    }
    async notifyMembers(socket, createSocketDto) {
        if (typeof createSocketDto === 'string') {
            try {
                createSocketDto = JSON.parse(createSocketDto);
            }
            catch (error) {
                console.log("Error:", error);
                return;
            }
        }
        console.log("Received data:", createSocketDto);
        const { members = [], message = '' } = createSocketDto;
        console.log("members:", members);
        console.log("message:", message);
        for (const memberId of members) {
            console.log('Current Member ID:', memberId);
            if (typeof memberId !== 'string') {
                console.log('Error: Member ID is not a string:', memberId);
                socket.emit('error', { message: 'Invalid member ID format' });
                return;
            }
            await this.socketService.create(createSocketDto);
            const recipientSocket = this.clients.get(memberId);
            if (recipientSocket) {
                this.server.to(recipientSocket.id).emit('notification', message);
                console.log(`Notification sent to member ${memberId}`);
            }
            else {
                console.log(`Member ${memberId} not connected`);
            }
        }
    }
    async handleGetUserMessages(socket) {
        const user = await this.getUserFromSocket(socket);
        if (!user) {
            socket.emit('error', { message: 'Unauthorized' });
            return;
        }
        const messages = await this.socketService.getAll(user.userId);
        socket.emit('allMessages', messages);
    }
};
exports.MyGateway = MyGateway;
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", socket_io_1.Server)
], MyGateway.prototype, "server", void 0);
__decorate([
    (0, websockets_1.SubscribeMessage)('notifyMembers'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, create_socket_dto_1.CreateSocketDto]),
    __metadata("design:returntype", Promise)
], MyGateway.prototype, "notifyMembers", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('getUserMessages'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket]),
    __metadata("design:returntype", Promise)
], MyGateway.prototype, "handleGetUserMessages", null);
exports.MyGateway = MyGateway = __decorate([
    (0, websockets_1.WebSocketGateway)({
        port: 1234,
        cors: {
            origin: 'http://localhost:5173',
            methods: ['GET', 'POST'],
            credentials: true,
        },
    }),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        socket_service_1.SocketService])
], MyGateway);
//# sourceMappingURL=gateway.js.map