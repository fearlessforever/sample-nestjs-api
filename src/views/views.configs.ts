import { NestExpressApplication } from "@nestjs/platform-express";
import { join } from 'path'
import * as expressHandlebars from 'express-handlebars'

export const setAppViewsForExpressAdapter = function( app: NestExpressApplication , mainSourcePath: string ){
  
  app.useStaticAssets(join(mainSourcePath, '..', 'public/views/assets'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.engine('hbs' , expressHandlebars.engine({
    defaultLayout:'main',
    layoutsDir: join(__dirname, '..', 'views/layouts'),
    extname:'hbs',
  }))
  app.setViewEngine('hbs')

}