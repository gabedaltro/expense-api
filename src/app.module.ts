import 'reflect-metadata';
import { Module } from '@nestjs/common';
import modules from './modules';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from './orm-config';

@Module({
  imports: [...modules, TypeOrmModule.forRoot(config)],
})
export class AppModule {}
