import { CacheModule } from "@nestjs/cache-manager";
import { Module } from "@nestjs/common";
import { createKeyv } from "@keyv/redis";

@Module({
  imports:[
    // ================================== memory only cache manager usage
    // CacheModule.register({
    //   isGlobal: true,
    //   ttl: 60_000, // set default ttl for cached data
    // }),

    CacheModule.registerAsync({
      isGlobal: true,
      useFactory: async ()=>{
        const configs = {
          stores: undefined as any ,
          ttl: 60_000 as number ,
        }

        if(process.env.IS_USE_REDIS === 'true'){
          configs.stores = createKeyv({
              socket:{
                host: process.env.REDIS_HOST,
                port: parseInt(process.env.REDIS_PORT),
                passphrase: process.env.REDIS_PASSWD ,
              },
            database: parseInt(process.env.REDIS_DB) ,
          })
          // console.log('CACHE USE REDIS')
        }

        return configs
      },
    }),
  ],
  providers: [],
  exports: []
})
export class MyAppCacheModule {}