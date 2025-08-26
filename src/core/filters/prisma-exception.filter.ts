import { ArgumentsHost, Catch, ExceptionFilter, HttpStatus } from '@nestjs/common';
import { PrismaClientKnownRequestError, PrismaClientRustPanicError, PrismaClientUnknownRequestError, PrismaClientValidationError } from '@prisma/client/runtime/library';
import { FileLoggerService } from '../file-logger/file-logger.service';
import { Request, Response } from 'express';

@Catch(PrismaClientKnownRequestError , PrismaClientUnknownRequestError , PrismaClientRustPanicError , PrismaClientValidationError )
export class PrismaExceptionFilter implements ExceptionFilter {

  constructor(
    private readonly logger: FileLoggerService ,
  ){}

  catch(exception: unknown , host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let message = 'Unknown Error'
    let stack: string|undefined = undefined

    if( exception instanceof PrismaClientKnownRequestError ){
      message =  `${exception.message} ${exception.code} ${exception.name} ${exception.meta}`
      stack = exception.stack
      status = HttpStatus.BAD_REQUEST;
    }else if( exception instanceof PrismaClientUnknownRequestError ){
      message =  `${exception.message} ${exception.clientVersion} ${exception.name}`
      stack = exception.stack
    }else if( exception instanceof PrismaClientRustPanicError ){
      message =  `${exception.message} ${exception.clientVersion} ${exception.name}`
      stack = exception.stack
    }else if( exception instanceof PrismaClientValidationError ){
      message =  `${exception.message} ${exception.clientVersion} ${exception.name}`
      stack = exception.stack
      status = HttpStatus.UNPROCESSABLE_ENTITY;
    }

    this.logger.error(`[PrismaException] ${status} ${request.url}` )
    this.logger.LogToFile(`[PrismaException] ${status} ${request.url} ${message}` ) // log detail error to file for debugging

    response
      .status(status)
      .json({
        statusCode: status,
        message: '[DB] Prisma Error / Validation',
        timestamp: new Date().toISOString(),
        path: request.url,
      });
  }
}
