import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './entities/task.entity';
import { CreateTaskDto, UpdateTaskDto } from './dto';

@Injectable()
export class TasksService {

  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>
  ) { }

  async create(createTaskDto: CreateTaskDto) {

    createTaskDto.borderClass = this.generateBorderClass();

    try {
      const newTask = this.taskRepository.create(createTaskDto);

      if (!newTask) throw new Error('Error creating task');

      return await this.taskRepository.save(newTask);
    } catch (error) {
      throw new Error(error);
    }
  }

  async findAll() {
    try {
      const tasks = await this.taskRepository.find({ cache: true });

      if (!tasks) throw new NotFoundException('No tasks found');

      return tasks;
    } catch (error) {
      throw new Error(error);
    }
  }

  async findOne(id: string) {
    try {
      const task = await this.taskRepository.findOne({ where: { id } });

      if (!task) throw new NotFoundException(`Task #${id} not found`);

      return task;
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async update(id: string, updateTaskDto: UpdateTaskDto) {
    try {
      const task = await this.taskRepository.findOne({ where: { id } });

      if (!task) { throw new NotFoundException(`Task #${id} not found`); }

      this.taskRepository.merge(task, updateTaskDto);
      await this.taskRepository.save(task);

      return {
        message: `Task #${id} updated`
      };
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async remove(id: string) {
    try {
      const { affected } = await this.taskRepository.delete({ id });

      if (affected === 0) throw new NotFoundException(`Task #${id} not found`);

      return {
        message: `Task #${id} deleted`
      };
    } catch (error) {
      throw new Error(error);
    }

  }

  generateBorderClass(): string {
    const randomColorNumber = Math.floor(Math.random() * 24) + 1;
    return `color-task-${randomColorNumber}`;
  }
}
