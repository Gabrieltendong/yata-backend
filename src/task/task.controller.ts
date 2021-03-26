import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { TaskService } from './task.service'

@Controller('api/v1/task')
export class TaskController {
    constructor(private taskService: TaskService){

    }

    @Get()
    getAll(){
        return this.taskService.getAllTask();
    }

    @Post('/add')
    createTask(@Body() data){
        return this.taskService.createTask(data);
    }

    @Put('/update/:id')
    updateTask(@Param('id') id, @Body() data){
        return this.taskService.updateTask(id, data);
    }

    @Delete('/delete/:id')
    removeTask(@Param('id') id){
        return this.taskService.removeTask(id);
    }

    @Delete('/delete/')
    removeAllTask(){
        return this.taskService.removeAllTask();
    }
}
