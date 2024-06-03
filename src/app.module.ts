import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeOrmConfig } from './config/typeorm.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlanModule } from './plan/plan.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), PlanModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
