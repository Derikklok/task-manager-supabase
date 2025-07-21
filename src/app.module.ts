import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './tasks/task.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    url: 'postgresql://postgres:Sachin1605#@db.agurdgitkcaunzeuhwvv.supabase.co:5432/postgres', // Replace with your Supabase DB URL
    synchronize: true, // ⚠️ Use only in dev
    autoLoadEntities: true,
    ssl: {
      rejectUnauthorized: false,
    },
  }),
  TasksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
