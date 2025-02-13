import { Controller, Delete, Get, HttpCode, HttpStatus, Render, Sse } from '@nestjs/common';
import { SampleSseService } from './sample-sse.service';

@Controller('sample-sse')
export class SampleSseController {

  constructor(
    private readonly sseService: SampleSseService,
  ){}

  @Get()
  @Render('sample-sse')
  viewSSE(){
    return {
      title:'Sample SSE Page'
    }
  }

  @Delete()
  @HttpCode(HttpStatus.NO_CONTENT)
  stopSSE(){
    this.sseService.sseStop()
  }

  @Sse('events')
  startSSE(){
    return this.sseService.sseStart()
  }
}
