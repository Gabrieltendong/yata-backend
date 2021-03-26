import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Task } from './task.model'

@Injectable()
export class TaskService {
    constructor(@InjectModel('Task') private readonly taskModel: Model<Task>){}

    /**
     * add new Task
    */
    async createTask(data) {
        const newTask = new this.taskModel(data);
        const result = await newTask.save();
        return this.getAllTask();
    }

    /**
     * Get All Task
    */
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

    /**
     * update specific Task
    */
    async updateTask(taskId: string, data) {
        const task = await this.findTask(taskId)
        
        task.isActive = data.isActive;
        if(data.title) task.title = data.title;
        if(data.description) task.description = data.description

        task.save()

        return {
            status: 200,
            message: 'update succes',
            data: task
        }
    }

    /**
     * delete specific Task
    */
   async removeTask(taskId: string) {
        const res = await this.taskModel.deleteOne({_id: taskId}).exec()
        
        if (res.n === 0) {
            throw new NotFoundException('Could not find user.');
        }

        return {
            status: 200,
            message: 'delete succeful'
        }
    }

    /**
     * delete specific Task
    */
   async removeAllTask() {
    const res = await this.taskModel.deleteMany().exec()
    
        if (res.n === 0) {
            throw new NotFoundException('Could not find user.');
        }

        return {
            status: 200,
            message: 'delete succeful'
        }
    }

    private async findTask(id: string): Promise<Task> {
        let task: any;
        try {
          task = await this.taskModel.findById(id).exec();
        } catch (error) {
          throw new NotFoundException('Could not find user.');
        }
        if (!task) {
          throw new NotFoundException('Could not find user.');
        }
        return task;
    }
}
