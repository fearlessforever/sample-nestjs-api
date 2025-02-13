import { Module } from '@nestjs/common';
import { SampleSseService } from './sample-sse.service';
import { SampleSseController } from './sample-sse.controller';

@Module({
  imports:[],
  controllers:[ SampleSseController ],
  providers:[ SampleSseService ],
})
export class SampleSseModule {}
