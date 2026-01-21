import { Injectable } from '@nestjs/common';
import { ToDo } from './interfaces/todo.interface';

@Injectable()
export class TodoService {
  private readonly toDos: ToDo[] = [];

  findAll(): ToDo[] {
    return this.toDos;
  }

  create(todo: ToDo): void {
    this.toDos.push(todo);
  }
}
