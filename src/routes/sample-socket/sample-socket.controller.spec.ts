import { Test, TestingModule } from '@nestjs/testing';
import { SampleSocketController } from './sample-socket.controller';

describe('SampleSocketController', () => {
  let controller: SampleSocketController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SampleSocketController],
    }).compile();

    controller = module.get<SampleSocketController>(SampleSocketController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
