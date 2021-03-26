import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { TaskModule } from './task/task.module';

@Module({
  imports: [
    TaskModule,
    MongooseModule.forRoot('mongodb://localhost/yata_db', { useNewUrlParser: true })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
