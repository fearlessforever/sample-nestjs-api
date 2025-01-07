import { Module } from "@nestjs/common";
import { AppModule } from "./modules/app/app.module";
import { SampleModule } from './modules/sample/sample.module';
import { DatabaseModule } from './core/database/database.module';
import { SampleEmployeesModule } from './modules/sample-employees/sample-employees.module';

@Module({
  imports: [AppModule, SampleModule, DatabaseModule, SampleEmployeesModule],
  controllers: [],
  providers: [],
})
export class MainAppModule {}