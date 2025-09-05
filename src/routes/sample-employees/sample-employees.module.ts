import { Module } from '@nestjs/common';
import { SampleEmployeesService } from './sample-employees.service';
import { SampleEmployeesController } from './sample-employees.controller';
import { DatabaseModule } from '@/core/database/database.module';

@Module({
  imports:[DatabaseModule],
  controllers: [SampleEmployeesController],
  providers: [SampleEmployeesService],
})
export class SampleEmployeesModule {}
