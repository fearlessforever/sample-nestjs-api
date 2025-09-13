import { InjectQueue } from '@nestjs/bullmq';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bullmq';

@Injectable()
export class SomeFeatureProducerService {

  constructor(
    @InjectQueue('some-feature-queue') private readonly someFeatureQueue: Queue ,
  ) {}
  
  async processData(data: any) {
    await this.someFeatureQueue.add('process-data-job', data, { delay: 1_000 }); // Add job with a name and payload
    return { message: 'Data processing job queued!' , data };
  }
}
