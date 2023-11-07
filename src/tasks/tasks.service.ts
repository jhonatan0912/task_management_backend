import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
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
      return await this.taskRepository.save(createTaskDto);
    } catch (error) {
      throw new BadRequestException('Error saving task');
    }
  }

  async findAll() {

    try {
      const tasks = await this.taskRepository.find({ cache: true });
      if (!tasks) throw new NotFoundException('No tasks found');

      return tasks;
    } catch (error) {
      throw new NotFoundException('No tasks found');
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
      throw new NotFoundException(error.message);
    }

  }

  generateBorderClass(): string {
    const randomColorNumber = Math.floor(Math.random() * 24) + 1;
    return `color-task-${randomColorNumber}`;
  }
}
