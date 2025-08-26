import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from '@nestjs/common';
import { FileLoggerService } from '../file-logger/file-logger.service';
import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  
  constructor(
    private readonly logger: FileLoggerService ,
  ){}

  catch(exception: HttpException , host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();

    this.logger.error(`[HttpException] ${status} ${request.url} : ${exception.message}`)

    response
      .status(status)
      .json({
        statusCode: status,
        message: exception.message,
        timestamp: new Date().toISOString(),
        path: request.url,
      });

  }
}
