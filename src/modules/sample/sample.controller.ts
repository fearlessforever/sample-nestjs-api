import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { SampleService } from './sample.service';

@Controller('sample')
export class SampleController {

  constructor(
    private readonly sampleService:SampleService ,
  ){}
  
  @Get()
  findAll(): string {
   return this.sampleService.findAll()
  }

  @Get('special') // get special and take note that the order is very important
  findOneSpecial(): string {
   return this.sampleService.findSpecial()
  }

  @Get(':id') // get any :id
  findOne( @Param() param:any ):string{
    return this.sampleService.findOne( param.id )
  }

  @Delete(':id')
  deleteOne( @Param() param:any ): string{
    return this.sampleService.deleteOne(param.id)
  }

  @Put(':id')
  updateOne(
    @Param() param:any ,
    @Body() data:any, 
  ):string{
    return this.sampleService.updateOne(param.id , data )
  }

  @Post()
  createOne( @Body() data:any ):string{
    return this.sampleService.create(data ) 
  }
}
