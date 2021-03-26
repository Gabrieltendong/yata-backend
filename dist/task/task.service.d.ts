import { Model } from 'mongoose';
import { Task } from './task.model';
export declare class TaskService {
    private readonly taskModel;
    constructor(taskModel: Model<Task>);
    createTask(data: any): Promise<{
        id: number;
        _id: any;
        title: string;
        description: string;
        isActive: boolean;
    }[]>;
    getAllTask(): Promise<{
        id: number;
        _id: any;
        title: string;
        description: string;
        isActive: boolean;
    }[]>;
    updateTask(taskId: string, data: any): Promise<{
        status: number;
        message: string;
        data: Task;
    }>;
    removeTask(taskId: string): Promise<{
        status: number;
        message: string;
    }>;
    removeAllTask(): Promise<{
        status: number;
        message: string;
    }>;
    private findTask;
}
