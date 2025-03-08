import { FileLoggerService } from '../file-logger/file-logger.service';
import { AnotherExceptionFilter } from './another-exception.filter';

describe('AnotherExceptionFilter', () => {
  it('should be defined', () => {
    expect(new AnotherExceptionFilter(new FileLoggerService())).toBeDefined();
  });
});
