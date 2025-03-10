import { Module } from "@nestjs/common";
import { DatabaseModule } from './database/database.module';
import { MyAppCacheModule } from "./database/my-app-cache.module";
import { FileLoggerModule } from "./core/file-logger/file-logger.module";
import { RateLimiterModule } from './core/rate-limiter/rate-limiter.module';
import { MyAppFilterModule } from './core/filters/my-app-filter.module';
import { RoutesModule } from "./routes/module.routes";
import { SocketModule } from './core/socket/socket.module';
import { QueueModule } from "./core/queue/queue.module";
import { ConfigsModule } from "./core/configs/configs.module";

@Module({
  imports: [
    ConfigsModule.forRoot(), 
    SocketModule.forRoot(), 
    QueueModule.forRoot(), 
    DatabaseModule.forRoot() , 
    FileLoggerModule, RateLimiterModule, MyAppFilterModule, MyAppCacheModule, RoutesModule
  ],
  controllers: [],
  providers: [],
})
export class MainAppModule {}