import { Module } from '@nestjs/common';
import { SampleCacheUsageController } from './sample-cache-usage.controller';
import { SampleCacheUsageService } from './sample-cache-usage.service';
import { FileLoggerModule } from '@/core/file-logger/file-logger.module';

@Module({
  imports:[FileLoggerModule],
  controllers:[SampleCacheUsageController],
  providers:[SampleCacheUsageService],
})
export class SampleCacheUsageModule {}
