import { SomeFeatureProducerService } from '@/core/queue/producers/some-feature.producer.service';
import { SampleSendEmailDTO } from '@DTO/sample-send-email';
import { Body, Controller, Post, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('sample-send-email')
export class SampleSendEmailController {

  constructor(
    private readonly queueProducer:SomeFeatureProducerService
  ){}

  @Post()
  async triggerSendEmail( @Body() data: SampleSendEmailDTO , @Res() res: Response ){
    const getHtml = () => new Promise<string>((resolve,reject)=>{
      res.render('sample-email', {...data , layout: 'base-email'} , function(err , html){
        if(err)
          return reject(err)

        resolve(html)
      })
    })
    const html = await getHtml().catch(console.log) || ''
    
    res.json( await this.queueProducer.sendEmail(data , html ))
    return
  }
}
