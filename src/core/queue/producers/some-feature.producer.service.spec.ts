import { Test, TestingModule } from '@nestjs/testing';
import { SomeFeatureProducerService } from './some-feature.producer.service';

describe('SomeFeatureProducerService', () => {
  let service: SomeFeatureProducerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SomeFeatureProducerService],
    }).compile();

    service = module.get<SomeFeatureProducerService>(SomeFeatureProducerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
