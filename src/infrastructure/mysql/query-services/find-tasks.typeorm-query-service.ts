import { Injectable } from '@nestjs/common';
import { FindTasksQueryService } from 'src/application/task/find-tasks.query-service';
import { DataSource } from 'typeorm';

@Injectable()
export class FindTasksTypeormQueryService implements FindTasksQueryService {
  constructor(private readonly dataSource: DataSource) {}

  async handle() {
    const tasks = await this.dataSource.query<
      { id: string; name: string; userName?: string }[]
    >(
      'SELECT tasks.id as id, tasks.name as name, users.name as userName FROM tasks LEFT JOIN task_assignments ON task_assignments.task_id = tasks.id LEFT JOIN users ON users.id = task_assignments.user_id',
    );

    return { tasks };
  }
}
