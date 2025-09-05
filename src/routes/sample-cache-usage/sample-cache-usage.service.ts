import { FileLoggerService } from '@/core/file-logger/file-logger.service';
import { Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';

@Injectable()
export class SampleCacheUsageService {
  constructor(
    @Inject('CACHE_MANAGER') private readonly cacheService: Cache ,
    private readonly logger: FileLoggerService ,
  ){}

  async getDataWithCache(): Promise<SampleData[]>{
    const dataCached = await this.cacheService.get<SampleData[]>('sample-data')
    if( dataCached ){
      this.logger.log('Get data from cache')
      return dataCached
    }

    const data = await this.getDataNoCache()
    await this.cacheService.set('sample-data',data)
    return data
  }

  async getDataNoCache(): Promise<SampleData[]>{
    return new Promise(resolve=>{
      setTimeout(() => {
        const sampleData =  Array.from({length:27} , (val,k) => ({
          id: k+1 , name: `Test ${k+1}` , desc: `Desc ${k+1}`
        }))

        resolve(sampleData)
      }, 2_000);
    })
  }

}

type SampleData = {id: number, name: string, desc: string}