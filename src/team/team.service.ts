
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { Team } from './team.entity';

@Injectable()
export class TeamService {
  constructor(@InjectRepository(Team) private repo: MongoRepository<Team>) {}

  create(data: Partial<Team>) {
    return this.repo.save(this.repo.create(data));
  }

  findAll() {
    return this.repo.find();
  }
}
