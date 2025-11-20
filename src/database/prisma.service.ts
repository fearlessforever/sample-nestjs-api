import { Injectable, LoggerService, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit , OnModuleDestroy {

  constructor(
    private readonly logger : LoggerService
  ){ super() }

  async onModuleInit() {
    this.logger.warn('DATABASE INITIATED')
    await this.$connect()
  }

  async onModuleDestroy() {
    this.logger.warn('DATABASE CONNECTION IS DESTROYED')
    await this.$disconnect()
    
  }
}
