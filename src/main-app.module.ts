import { Module } from "@nestjs/common";
import { AppModule } from "./modules/app/app.module";

@Module({
  imports: [AppModule],
  controllers: [],
  providers: [],
})
export class MainAppModule {}