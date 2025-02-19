import { Controller, Get, Render } from '@nestjs/common';

@Controller('sample-socket')
export class SampleSocketController {

  @Get()
  @Render('sample-socket')
  samplePage(){

    return{
      title:'Sample Socket Page'
    }
  }
}
