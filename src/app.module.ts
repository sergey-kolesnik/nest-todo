import { Module } from '@nestjs/common';
import { TodoModule } from './todo/todo.module';
// import {  }

@Module({
  imports: [TodoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
