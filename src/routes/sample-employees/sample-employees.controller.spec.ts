import { Test, TestingModule } from '@nestjs/testing';
import { SampleEmployeesController } from './sample-employees.controller';
import { SampleEmployeesService } from '@/database/services/sample-employees.service';

describe('SampleEmployeesController', () => {
  let controller: SampleEmployeesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SampleEmployeesController],
      providers: [SampleEmployeesService],
    }).compile();

    controller = module.get<SampleEmployeesController>(SampleEmployeesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
