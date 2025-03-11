import { Module } from '@nestjs/common';
import { SampleEmployeesService } from '@/database/services/sample-employees.service';
import { SampleEmployeesController } from './sample-employees.controller';
import { DatabaseModule } from '@/database/database.module';

@Module({
  imports:[DatabaseModule],
  controllers: [SampleEmployeesController],
  providers: [SampleEmployeesService],
})
export class SampleEmployeesModule {}
