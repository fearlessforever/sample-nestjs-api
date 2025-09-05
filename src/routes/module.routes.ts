import { Module } from "@nestjs/common";
import { SampleCacheUsageModule } from "./sample-cache-usage/sample-cache-usage.module";
import { SampleEmployeesModule } from "./sample-employees/sample-employees.module";
import { SampleModule } from "./sample/sample.module";
import { AppModule } from "./app/app.module";


@Module({
  imports: [AppModule, SampleModule, SampleEmployeesModule, SampleCacheUsageModule ],
  controllers: [],
  providers: [],
})
export class RoutesModule {}