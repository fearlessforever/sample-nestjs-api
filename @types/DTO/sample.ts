import { ISample, SampleStatus } from "@Models/sample";
import { IsEnum, IsNotEmpty, IsString } from "class-validator";

export class SampleDTO implements Partial<ISample>{
  
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  message: string;

  @IsNotEmpty()
  @IsEnum(SampleStatus)
  status: SampleStatus;
}