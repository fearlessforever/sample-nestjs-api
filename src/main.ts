import { NestFactory } from '@nestjs/core';
import { MainAppModule } from './main-app.module';
import { ValidationPipe } from '@nestjs/common';
import { FileLoggerService } from './core/file-logger/file-logger.service';
import { NestExpressApplication } from '@nestjs/platform-express';
import { setAppViewsForExpressAdapter } from './views/views.configs';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(MainAppModule);

  // add validation pipe tranformer
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    whitelist: true,
  }))
  
  setAppViewsForExpressAdapter(app , __dirname)

  if( process.env.IS_FORWARD_LOG_TO_FILE === 'true' )
    app.useLogger(app.get(FileLoggerService))

  await app.listen( process.env.PORT || 3000);
}
bootstrap();
