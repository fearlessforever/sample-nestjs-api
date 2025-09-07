import { Test, TestingModule } from '@nestjs/testing';
import { SampleViewMvcController } from './sample-view-mvc.controller';

describe('SampleViewMvcController', () => {
  let controller: SampleViewMvcController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SampleViewMvcController],
    }).compile();

    controller = module.get<SampleViewMvcController>(SampleViewMvcController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
