import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './courses/courses.module';
import { AlunosModule } from './alunos/alunos.module';

@Module({
  imports: [CoursesModule, AlunosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
