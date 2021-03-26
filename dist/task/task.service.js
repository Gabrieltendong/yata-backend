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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let TaskService = class TaskService {
    constructor(taskModel) {
        this.taskModel = taskModel;
    }
    async createTask(data) {
        const newTask = new this.taskModel(data);
        const result = await newTask.save();
        return this.getAllTask();
    }
    async getAllTask() {
        const tasks = await this.taskModel.find().exec();
        return tasks.map((task) => ({
            id: task.id,
            _id: task._id,
            title: task.title,
            description: task.description,
            isActive: task.isActive
        }));
    }
    async updateTask(taskId, data) {
        const task = await this.findTask(taskId);
        task.isActive = data.isActive;
        if (data.title)
            task.title = data.title;
        if (data.description)
            task.description = data.description;
        task.save();
        return {
            status: 200,
            message: 'update succes',
            data: task
        };
    }
    async removeTask(taskId) {
        const res = await this.taskModel.deleteOne({ _id: taskId }).exec();
        if (res.n === 0) {
            throw new common_1.NotFoundException('Could not find user.');
        }
        return {
            status: 200,
            message: 'delete succeful'
        };
    }
    async removeAllTask() {
        const res = await this.taskModel.deleteMany().exec();
        if (res.n === 0) {
            throw new common_1.NotFoundException('Could not find user.');
        }
        return {
            status: 200,
            message: 'delete succeful'
        };
    }
    async findTask(id) {
        let task;
        try {
            task = await this.taskModel.findById(id).exec();
        }
        catch (error) {
            throw new common_1.NotFoundException('Could not find user.');
        }
        if (!task) {
            throw new common_1.NotFoundException('Could not find user.');
        }
        return task;
    }
};
TaskService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('Task')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], TaskService);
exports.TaskService = TaskService;
//# sourceMappingURL=task.service.js.map