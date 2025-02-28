import { FileLoggerService } from '@/core/file-logger/file-logger.service';
import { Processor, WorkerHost } from '@nestjs/bullmq';
import { Job } from 'bullmq';
import * as nodemailer from 'nodemailer'
import { minify } from 'html-minifier'
import Mail from 'nodemailer/lib/mailer';

@Processor('some-feature-queue')
export class SomeFeatureConsumerService extends WorkerHost {
  private readonly logger: FileLoggerService = new FileLoggerService(SomeFeatureConsumerService.name)
  
  async process(job: Job<any>): Promise<any> {
    // this.logger.log(job.name);
    // this.logger.log(job.data);

    switch(job.name){
      case 'send-email':
        const { html , ...restData } = job.data
        this.logger.log('Processing job:' , job.name,  restData);
        ProcessSendingEmail(job.data).then(res => this.logger.log(res)).catch(res => this.logger.error(res))
        
        break
      default:
        this.logger.log('Processing job:' , job.name, job.data );
        let progress = 0;
        for (let i = 0; i < 100; i++) {
          // await doSomething(job.data);
          progress += 1;
          // await job.updateProgress(progress);
        }
        break
    }

    
    return {};
    // Implement your job processing logic here
    // Example: await someExternalService.performAction(job.data);
  }
}

async function ProcessSendingEmail( data:any){
  try{
    const transporterParams = {
      host: process.env.MAIL_SMTP_HOSTNAME,
      port: parseInt(process.env.MAIL_SMTP_PORT), //465, //587 ,
      secure: process.env.MAIL_SECURE === 'true',
      auth:{
        user: process.env.MAIL_AUTH_USERNAME,
        pass: process.env.MAIL_AUTH_PASS,
      },
    }
    const transporter = nodemailer.createTransport(transporterParams)
    const minifyHtml = minify(data.html || '' ,{
        collapseWhitespace: true,
        removeComments: true,
        collapseBooleanAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeOptionalTags: true,
        minifyJS: true, // You can also minify inline JS
        minifyCSS: true // And inline CSS
    })

    const mailOptions: Partial<Mail.Options> = {
      from: transporterParams.auth.user ,
      bcc:[ transporterParams.auth.user ],
      to: data.email,
      subject: data.subject,
      html: minifyHtml ,
      textEncoding:'base64',
    }

    if( process.env.MAIL_IS_SEND_EMAIL_COPY === 'true' && data.email === transporterParams.auth.user ){
      mailOptions.bcc =[]
    }
    
    const sendingMail = () => new Promise((resolve,reject)=>{
      
      transporter.sendMail(mailOptions, function(err, info ){
        if(err){
          reject(err)
        }else{
          resolve(`Message sent successfully ${data.email}`)
        }
      })
    })

    return await sendingMail()
  }catch(error){
    throw error
  }
}