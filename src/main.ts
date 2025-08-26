import { NestFactory } from '@nestjs/core';
import { MainAppModule } from './main-app.module';
import { ValidationPipe } from '@nestjs/common';
import { FileLoggerService } from './core/file-logger/file-logger.service';

async function bootstrap() {
  const app = await NestFactory.create(MainAppModule);

  // add validation pipe tranformer
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    whitelist: true,
  }))

  if( process.env.IS_FORWARD_LOG_TO_FILE === 'true' )
    app.useLogger(app.get(FileLoggerService))

  await app.listen( process.env.PORT || 3000);
}
bootstrap();
