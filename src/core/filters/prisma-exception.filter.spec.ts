import { PrismaExceptionFilter } from './prisma-exception.filter';
import { FileLoggerService } from '../file-logger/file-logger.service';

describe('PrismaExceptionFilter', () => {
  it('should be defined', () => {
    expect(new PrismaExceptionFilter(new FileLoggerService())).toBeDefined();
  });
});
