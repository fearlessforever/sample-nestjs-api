import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards } from '@nestjs/common';
import { SampleEmployeesService } from './sample-employees.service';
import { SampleEmployee, SampleEmployeeStatusDTO, UpdateSampleEmployeeDto } from '@DTO/sample-employee';
import { Throttle, ThrottlerGuard } from '@nestjs/throttler';

@Controller('sample-employees')
export class SampleEmployeesController {
  constructor(private readonly sampleEmployeesService: SampleEmployeesService) {}

  @Throttle({ long:{ limit:3 , ttl: 60_000 } }) // replace value for long key , in 1 minute allow only 3
  @UseGuards(ThrottlerGuard)
  @Post()
  create(@Body() data: SampleEmployee) {
    return this.sampleEmployeesService.create(data);
  }

  @UseGuards(ThrottlerGuard)
  @Get()
  findAll( @Query() queryParam: SampleEmployeeStatusDTO ) {
    // queryParam.role will now be a strongly-typed 'Role' enum value
    return this.sampleEmployeesService.findAll(queryParam.role);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sampleEmployeesService.findOne(+id);
  }

  @UseGuards(ThrottlerGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() data: UpdateSampleEmployeeDto ) {
    return this.sampleEmployeesService.update(+id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sampleEmployeesService.remove(+id);
  }
}
