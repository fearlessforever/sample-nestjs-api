import { Module } from "@nestjs/common";
import { AppModule } from "./modules/app/app.module";
import { SampleModule } from './modules/sample/sample.module';
import { DatabaseModule } from './core/database/database.module';
import { SampleEmployeesModule } from './modules/sample-employees/sample-employees.module';
import { FileLoggerModule } from "./core/file-logger/file-logger.module";
import { RateLimiterModule } from './core/rate-limiter/rate-limiter.module';
import { MyAppFilterModule } from './core/filters/my-app-filter.module';

@Module({
  imports: [AppModule, SampleModule, DatabaseModule, SampleEmployeesModule, FileLoggerModule, RateLimiterModule, MyAppFilterModule],
  controllers: [],
  providers: [],
})
export class MainAppModule {}