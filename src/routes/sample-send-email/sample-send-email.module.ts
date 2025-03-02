import { Module } from '@nestjs/common';
import { SampleSendEmailController } from './sample-send-email.controller';
import { QueueModule } from '@/core/queue/queue.module';

@Module({
  controllers:[SampleSendEmailController],
  imports:[ QueueModule.useQueue() ],
})
export class SampleSendEmailModule {}
