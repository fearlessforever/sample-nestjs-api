import { Test, TestingModule } from '@nestjs/testing';
import { SampleCacheUsageController } from './sample-cache-usage.controller';

describe('SampleCacheUsageController', () => {
  let controller: SampleCacheUsageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SampleCacheUsageController],
    }).compile();

    controller = module.get<SampleCacheUsageController>(SampleCacheUsageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
