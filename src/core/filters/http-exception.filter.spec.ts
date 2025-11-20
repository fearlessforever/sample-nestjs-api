import { FileLoggerService } from '../file-logger/file-logger.service';
import { HttpExceptionFilter } from './http-exception.filter';

describe('HttpExceptionFilter', () => {
  it('should be defined', () => {
    expect(new HttpExceptionFilter(new FileLoggerService())).toBeDefined();
  });
});
