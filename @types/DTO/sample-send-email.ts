import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class SampleSendEmailDTO{
  
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  subject: string;

  @IsNotEmpty()
  @IsString()
  message: string;
  
}