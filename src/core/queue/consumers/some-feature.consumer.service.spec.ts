import { Test, TestingModule } from '@nestjs/testing';
import { SomeFeatureConsumerService } from './some-feature.consumer.service';

describe('SomeFeatureConsumerService', () => {
  let service: SomeFeatureConsumerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SomeFeatureConsumerService],
    }).compile();

    service = module.get<SomeFeatureConsumerService>(SomeFeatureConsumerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
