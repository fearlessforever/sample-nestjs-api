import { Test, TestingModule } from '@nestjs/testing';
import { SampleCacheUsageService } from './sample-cache-usage.service';

describe('SampleCacheUsageService', () => {
  let service: SampleCacheUsageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SampleCacheUsageService],
    }).compile();

    service = module.get<SampleCacheUsageService>(SampleCacheUsageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
