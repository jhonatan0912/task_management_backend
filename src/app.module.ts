import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { options } from './assets/typeorm.config';

@Module({
  imports: [
    TasksModule,
    TypeOrmModule.forRoot(options)
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
