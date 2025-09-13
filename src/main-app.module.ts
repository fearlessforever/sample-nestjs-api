import { Module } from "@nestjs/common";
import { DatabaseModule } from './core/database/database.module';
import { FileLoggerModule } from "./core/file-logger/file-logger.module";
import { RateLimiterModule } from './core/rate-limiter/rate-limiter.module';
import { MyAppFilterModule } from './core/filters/my-app-filter.module';
import { MyAppCacheModule } from "./core/database/my-app-cache.module";
import { RoutesModule } from "./routes/module.routes";
import { SocketModule } from './core/socket/socket.module';
import { QueueModule } from "./core/queue/queue.module";

@Module({
  imports: [SocketModule.forRoot(), QueueModule.forRoot(), DatabaseModule , FileLoggerModule, RateLimiterModule, MyAppFilterModule, MyAppCacheModule, RoutesModule],
  controllers: [],
  providers: [],
})
export class MainAppModule {}