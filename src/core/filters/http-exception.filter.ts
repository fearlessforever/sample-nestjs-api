import { ArgumentsHost, BadRequestException, Catch, ExceptionFilter, HttpException } from '@nestjs/common';
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
    let message: string|string[] = `${exception.message}`

    this.logger.error(`[HttpException] ${status} ${request.url} : ${exception.message}`)

    if( exception instanceof BadRequestException ){
      const currentResponse = exception.getResponse() as any
      message = currentResponse?.message || message
    }

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
