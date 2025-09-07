import { Module } from "@nestjs/common";
import { SampleCacheUsageModule } from "./sample-cache-usage/sample-cache-usage.module";
import { SampleEmployeesModule } from "./sample-employees/sample-employees.module";
import { SampleModule } from "./sample/sample.module";
import { AppModule } from "./app/app.module";
import { SampleViewMvcModule } from "./sample-view-mvc/sample-view-mvc.module";


@Module({
  imports: [AppModule, SampleModule, SampleEmployeesModule, SampleCacheUsageModule, SampleViewMvcModule],
  controllers: [],
  providers: [],
})
export class RoutesModule {}