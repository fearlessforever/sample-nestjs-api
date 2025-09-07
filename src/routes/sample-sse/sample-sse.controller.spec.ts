import { Test, TestingModule } from '@nestjs/testing';
import { SampleSseController } from './sample-sse.controller';

describe('SampleSseController', () => {
  let controller: SampleSseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SampleSseController],
    }).compile();

    controller = module.get<SampleSseController>(SampleSseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
