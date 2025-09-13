import { Test, TestingModule } from '@nestjs/testing';
import { SampleQueueController } from './sample-queue.controller';

describe('SampleQueueController', () => {
  let controller: SampleQueueController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SampleQueueController],
    }).compile();

    controller = module.get<SampleQueueController>(SampleQueueController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
