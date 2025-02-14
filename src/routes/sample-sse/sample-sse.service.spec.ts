import { Test, TestingModule } from '@nestjs/testing';
import { SampleSseService } from './sample-sse.service';

describe('SampleSseService', () => {
  let service: SampleSseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SampleSseService],
    }).compile();

    service = module.get<SampleSseService>(SampleSseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
