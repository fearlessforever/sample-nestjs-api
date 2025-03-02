import { Test, TestingModule } from '@nestjs/testing';
import { SampleSendEmailController } from './sample-send-email.controller';

describe('SampleSendEmailController', () => {
  let controller: SampleSendEmailController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SampleSendEmailController],
    }).compile();

    controller = module.get<SampleSendEmailController>(SampleSendEmailController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
