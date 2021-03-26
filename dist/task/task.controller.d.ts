import { TaskService } from './task.service';
export declare class TaskController {
    private taskService;
    constructor(taskService: TaskService);
    getAll(): Promise<{
        id: number;
        _id: any;
        title: string;
        description: string;
        isActive: boolean;
    }[]>;
    createTask(data: any): Promise<{
        id: number;
        _id: any;
        title: string;
        description: string;
        isActive: boolean;
    }[]>;
    updateTask(id: any, data: any): Promise<{
        status: number;
        message: string;
        data: import("./task.model").Task;
    }>;
    removeTask(id: any): Promise<{
        status: number;
        message: string;
    }>;
    removeAllTask(): Promise<{
        status: number;
        message: string;
    }>;
}
