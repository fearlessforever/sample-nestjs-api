import { BullModule } from '@nestjs/bullmq';
import { DynamicModule, Module } from '@nestjs/common';
import { SomeFeatureConsumerService } from './consumers/some-feature.consumer.service';
import { SomeFeatureProducerService } from './producers/some-feature.producer.service';

@Module({})
export class QueueModule {

  static forRoot(): DynamicModule{
    if( process.env.IS_USE_REDIS_AS_QUEUE !== 'true' ){
      return{
        module: QueueModule ,
        imports:[],
      }
    }

    return{
      module: QueueModule ,
      imports:[
        BullModule.forRoot({
          connection:{
            host: process.env.QUEUE_REDIS_HOST,
            port: parseInt(process.env.QUEUE_REDIS_PORT),
            password: process.env.QUEUE_REDIS_PASSWD ,
            db: parseInt(process.env.QUEUE_REDIS_DB) ,
          },
          prefix:'my_queue_',
        })
      ],
    }
  }

  static useQueue():DynamicModule{
    if( process.env.IS_USE_REDIS_AS_QUEUE !== 'true' ){
      return{
        module: QueueModule ,
        imports:[],
        providers:[
          {
            provide: SomeFeatureProducerService ,
            useValue: null,
          },
        ],
        exports:[SomeFeatureProducerService],
      }
    }

    return{
      module: QueueModule,
      imports:[
        BullModule.registerQueue({
          name: 'some-feature-queue', // Name of your queue
        }),
      ],

      providers:[ SomeFeatureProducerService, SomeFeatureConsumerService ],
      exports:[SomeFeatureProducerService],
    }
  }

}
