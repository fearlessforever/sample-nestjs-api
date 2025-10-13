import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { HttpExceptionFilter } from './http-exception.filter';
import { FileLoggerModule } from '../file-logger/file-logger.module';
import { PrismaExceptionFilter } from './prisma-exception.filter';
import { AnotherExceptionFilter } from './another-exception.filter';

@Module({
  imports:[ FileLoggerModule ],
  providers:[
    {
      provide: APP_FILTER ,
      useClass: AnotherExceptionFilter,
    },
    {
      provide: APP_FILTER ,
      useClass: HttpExceptionFilter,
    },
    {
      provide: APP_FILTER ,
      useClass: PrismaExceptionFilter,
    },
  ]
})
export class MyAppFilterModule {}
