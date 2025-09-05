import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { SampleCacheUsageService } from './sample-cache-usage.service';
import { CacheInterceptor, CacheTTL } from '@nestjs/cache-manager';

@Controller('sample-cache-usage')
export class SampleCacheUsageController {
  
  constructor(
    private readonly  myService: SampleCacheUsageService ,
  ){}

  @Get('manual-cache')
  firstTest(){
    return this.myService.getDataWithCache()
  }

  @UseInterceptors(CacheInterceptor)
  @Get('auto-cache-with-decorator')
  secondTest(){
    return this.myService.getDataNoCache()
  }

  @UseInterceptors(CacheInterceptor)
  @CacheTTL(3_000) // custom ttl 3 seconds
  @Get('auto-cache-with-custom-ttl')
  thirdTest(){
    return this.myService.getDataNoCache()
  }
}
