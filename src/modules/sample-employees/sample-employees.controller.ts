import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { SampleEmployeesService } from './sample-employees.service';
import { SampleEmployee, SampleEmployeeStatusDTO, UpdateSampleEmployeeDto } from '@DTO/sample-employee';

@Controller('sample-employees')
export class SampleEmployeesController {
  constructor(private readonly sampleEmployeesService: SampleEmployeesService) {}

  @Post()
  create(@Body() data: SampleEmployee) {
    return this.sampleEmployeesService.create(data);
  }

  @Get()
  findAll( @Query() queryParam: SampleEmployeeStatusDTO ) {
    // queryParam.role will now be a strongly-typed 'Role' enum value
    return this.sampleEmployeesService.findAll(queryParam.role);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sampleEmployeesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: UpdateSampleEmployeeDto ) {
    return this.sampleEmployeesService.update(+id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sampleEmployeesService.remove(+id);
  }
}
