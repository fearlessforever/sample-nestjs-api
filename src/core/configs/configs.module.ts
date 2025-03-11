import { DynamicModule, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configs from './configs';

@Module({})
export class ConfigsModule {
  static forRoot(): Promise<DynamicModule>{
    return ConfigModule.forRoot({
      load:[configs],
      isGlobal:true,
    })
  }
}
