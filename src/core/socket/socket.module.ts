import { DynamicModule, Module } from '@nestjs/common';
import { SocketGateway } from './socket.gateway';
import { FileLoggerModule } from '../file-logger/file-logger.module';

@Module({
  imports:[ FileLoggerModule],
  providers:[],
  exports: [],
})
export class SocketModule {

  static forRoot() : DynamicModule{
    if( process.env.IS_ACTIVATE_SOCKET !== 'true' ) return{
      module: SocketModule ,
    }

    return {
      module: SocketModule ,
      providers: [SocketGateway],
      exports: [],
    };
  }
}
