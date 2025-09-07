import { Module } from '@nestjs/common';
import { SampleViewMvcController } from './sample-view-mvc.controller';

@Module({
  controllers:[
    SampleViewMvcController
  ],
})
export class SampleViewMvcModule {}
