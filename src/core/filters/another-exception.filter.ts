import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from '@nestjs/common';
import { Request, Response } from 'express';
import { FileLoggerService } from '../file-logger/file-logger.service';

@Catch()
export class AnotherExceptionFilter<T=unknown> implements ExceptionFilter {

  constructor(
    private readonly logger: FileLoggerService ,
  ){}

  catch(exception: T, host: ArgumentsHost) {

    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;
        
    let message: string|string[] = exception instanceof Error ? exception.message : ''

    this.logger.error(`[AnotherException] ${status} ${request.url} : ${message}`)

    response
      .status(status)
      .json({
        statusCode: status,
        message: message,
        timestamp: new Date().toISOString(),
        path: request.url,
      });
  }
}
