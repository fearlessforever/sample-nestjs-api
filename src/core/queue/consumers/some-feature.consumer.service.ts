import { FileLoggerService } from '@/core/file-logger/file-logger.service';
import { Processor, WorkerHost } from '@nestjs/bullmq';
import { Job } from 'bullmq';

@Processor('some-feature-queue')
export class SomeFeatureConsumerService extends WorkerHost {
  private readonly logger: FileLoggerService = new FileLoggerService(SomeFeatureConsumerService.name)
  
  async process(job: Job<any>): Promise<any> {
    this.logger.log('Processing job:' , job.name, job.data );
    // this.logger.log(job.name);
    // this.logger.log(job.data);

    let progress = 0;
    for (let i = 0; i < 100; i++) {
      // await doSomething(job.data);
      progress += 1;
      // await job.updateProgress(progress);
    }
    return {};
    // Implement your job processing logic here
    // Example: await someExternalService.performAction(job.data);
  }
}
