
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { Task } from './task.entity';
import { ObjectId } from 'mongodb';

@Injectable()
export class TaskService {
  constructor(@InjectRepository(Task) private repo: MongoRepository<Task>) {}

  create(data: Partial<Task>) {
    const task = this.repo.create({
      ...data,
      due_date: data.due_date ? new Date(data.due_date as any) : undefined,
    });
    return this.repo.save(task);
  }

  findAll() {
    return this.repo.find();
  }

  async update(id: string, data: Partial<Task>) {
  //   const objectId = new ObjectId(id);
  //   if (data.due_date && typeof data.due_date === 'string') {
  //     (data as any).due_date = new Date(data.due_date);
  //   }
  // await this.repo.update(objectId, data as any);
  //   const updated = await this.repo.findOne({ where: { _id: objectId } });
  //   if (!updated) throw new NotFoundException('Task not found');
  //   return updated;

  const objectId = new ObjectId(id);
    const cleanData = Object.fromEntries(
      Object.entries(data).filter(([_, v]) => v !== undefined && v !== null)
    );

    if (cleanData['due_date'] && typeof cleanData['due_date'] === 'string') {
      cleanData['due_date'] = new Date(cleanData['due_date']);
    }

   
    const result = await this.repo.update(objectId,  cleanData );


    const updated = await this.repo.findOne({ where: { _id: objectId } });
    if (!updated) throw new NotFoundException('Task not found');
    return updated;
  }
}
