import { Module } from "@nestjs/common";
import { AppModule } from "./modules/app/app.module";
import { SampleModule } from './modules/sample/sample.module';

@Module({
  imports: [AppModule, SampleModule],
  controllers: [],
  providers: [],
})
export class MainAppModule {}