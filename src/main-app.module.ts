import { Module } from "@nestjs/common";
import { AppModule } from "./modules/app/app.module";
import { SampleModule } from './modules/sample/sample.module';
import { DatabaseModule } from './core/database/database.module';
import { SampleEmployeesModule } from './modules/sample-employees/sample-employees.module';
import { FileLoggerModule } from "./core/file-logger/file-logger.module";

@Module({
  imports: [AppModule, SampleModule, DatabaseModule, SampleEmployeesModule, FileLoggerModule],
  controllers: [],
  providers: [],
})
export class MainAppModule {}