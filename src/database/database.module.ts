import { Module, Provider , Logger, DynamicModule } from '@nestjs/common';
import { PrismaService } from './prisma.service';

// const providers: Provider[] = []

// if( process.env.IS_USE_DB === 'true' ){
//   providers.push(PrismaService)
// }

const SomeOptionServiceProvider: Provider = {
  provide: PrismaService ,
  useFactory: function(){
    if( process.env.IS_USE_DB === 'true' ){
      return new PrismaService( new Logger(PrismaService.name))
    }

    return null
  },
  inject: []
}

@Module({
  providers: [SomeOptionServiceProvider],
  exports: [PrismaService] // Export to be injectable in other modules
})
export class DatabaseModule {

  static forRoot() : DynamicModule {
    return {
      module: DatabaseModule ,
      providers: [SomeOptionServiceProvider],
      exports: [PrismaService],
    };
  }
}
