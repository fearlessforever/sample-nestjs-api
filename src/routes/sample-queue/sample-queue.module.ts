import { Module } from '@nestjs/common';
import { SampleQueueController } from './sample-queue.controller';
import { QueueModule } from '@/core/queue/queue.module';

@Module({
  controllers:[SampleQueueController],
  imports: [ QueueModule.useQueue() ],
})
export class SampleQueueModule {}
