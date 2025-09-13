import { SomeFeatureProducerService } from '@/core/queue/producers/some-feature.producer.service';
import { Controller, Post } from '@nestjs/common';

@Controller('sample-queue')
export class SampleQueueController {

  constructor(
    private readonly queueProducer:SomeFeatureProducerService
  ){}

  @Post()
  async startBackgroundJob(){
    const data = {
      name: 'test-start-job-from-controller',
      id: Math.random(),
      desc: 'some kind of description',
    }

    return this.queueProducer.processData(data)
  }
}
