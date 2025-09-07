import { Controller, Get, Render, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('sample-view-mvc')
export class SampleViewMvcController {

  @Get('')
  @Render('sample-view-mvc') // path in views folder -> src/views/sample-view-mvc/index.hbs
  firstSample(){
    return {
      message: 'Hello World from Views (MVC)!',
      title: 'Sample Title Hello World',
    }
  }

  @Get('another') // path in views folder -> src/views/sample-view-mvc/index.hbs
  secondSample( @Res() res: Response ){

    return res.render('sample-view-mvc' , {
      message: 'Hello World from Views (MVC)! Another Sample',
      title: 'Another Sample Title Hello World',
    })
  }
}
