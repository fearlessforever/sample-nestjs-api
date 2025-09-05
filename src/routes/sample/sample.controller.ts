import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { SampleService } from './sample.service';
import { ISample } from '@Models/sample';
import { SampleDTO } from '@DTO/sample';

@Controller('sample')
export class SampleController {

  constructor(
    private readonly sampleService:SampleService ,
  ){}
  
  @Get()
  findAll(): ISample[] {
   return this.sampleService.findAll()
  }

  @Get('special') // get special and take note that the order is very important
  findOneSpecial(): string {
   return this.sampleService.findSpecial()
  }

  @Get(':id') // get any :id
  findOne( @Param() param:any ): ISample{
    const found = this.sampleService.findOne( param.id )
    return found
  }

  @Delete(':id')
  deleteOne( @Param() param:any ): ISample{
    return this.sampleService.deleteOne(param.id)
  }

  @Put(':id')
  updateOne(
    @Param() param:any ,
    @Body() data: SampleDTO, 
  ):ISample{
    return this.sampleService.updateOne(param.id , data )
  }

  @Post()
  createOne( @Body() data: SampleDTO ): ISample{
    return this.sampleService.create(data ) 
  }
}
