import { Test, TestingModule } from '@nestjs/testing';
import { SampleEmployeesService } from './sample-employees.service';

describe('SampleEmployeesService', () => {
  let service: SampleEmployeesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SampleEmployeesService],
    }).compile();

    service = module.get<SampleEmployeesService>(SampleEmployeesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
