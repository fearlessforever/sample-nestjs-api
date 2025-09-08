import { Module } from '@nestjs/common';
import { SampleSocketController } from './sample-socket.controller';

@Module({
  controllers:[SampleSocketController],
})
export class SampleSocketModule {}
