import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TaskModule } from './tasks/task.module';
import { TeamModule } from './team/team.module';
import {Task} from './tasks/task.entity';
import {Team} from './team/team.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: process.env.MONGODB_URI,
     synchronize: true,
     entities: [Task,Team]

    }),
    AuthModule,TaskModule,TeamModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
