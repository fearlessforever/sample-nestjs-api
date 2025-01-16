import { ConsoleLogger, Injectable } from '@nestjs/common';
import * as fs from 'fs'
import * as util from 'util'

@Injectable()
export class FileLoggerService extends ConsoleLogger{
  
  private currentDate: string = ''
  private fileLogStream: fs.WriteStream

  private createStreamFileLog( logFolderPosition:string ){
    this.fileLogStream = fs.createWriteStream(`${logFolderPosition}/${this.currentDate}-debug.log`, {flags : 'a'})
  }

  private createFolder( logFolderPosition: string ){
    if (!fs.existsSync(logFolderPosition )){
      fs.mkdirSync(logFolderPosition , { recursive: true } );
    }
  }

  LogToFile( ...args:any[] ){
    delay(27).then(_=>{
      const dateRightNow = new Date() , dateDetail = {
        year: dateRightNow.getFullYear() ,
        month: dateRightNow.getMonth() + 1 ,
        date: dateRightNow.getDate() ,
      }
      const checkNewDate = `${ zeroPad( dateDetail.year , 4 ) }-${ zeroPad( dateDetail.month , 2 ) }-${ zeroPad( dateDetail.date , 2 ) }`

      if( this.currentDate !== checkNewDate ){
        const folderPath = `./logs`
        this.currentDate = checkNewDate
        this.createFolder(folderPath)
        this.createStreamFileLog( folderPath )
      }
      args.forEach(val=>{
        this.fileLogStream?.write(`${zeroPad(dateRightNow.getHours(),2)}:${zeroPad(dateRightNow.getMinutes(),2)}:${zeroPad(dateRightNow.getSeconds(),2)} `+ util.format(val) + '\n')
      })
    })
  }

  log(message: unknown, ...rest:any[] ): void {
    this.LogToFile(`Log: ${message}`)
    super.log(message, ...rest)
  }

  error(message: unknown, ...rest:any[] ): void {
    this.LogToFile(`Error: ${message}`)
    super.error(message, ...rest)
  }

  warn(message: unknown, ...rest:any[] ): void {
    this.LogToFile(`Warn: ${message}`)
    super.warn(message , ...rest )
  }

  fatal(message: unknown, ...rest:any[] ): void {
    this.LogToFile(`Fatal Error: ${message}`)
    super.fatal(message , ...rest )
  }

  debug(message: unknown, ...rest:any[] ): void {
    this.LogToFile(`Debug: ${message}`)
    super.debug(message , ...rest )
  }

}

const zeroPad = (num:number, stringLength:number) => String(num).padStart(stringLength, '0')
const delay = ( time_in_miliseconds: number ) => new Promise(resolve=> setTimeout(resolve, time_in_miliseconds))