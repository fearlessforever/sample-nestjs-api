
import { ISampleEmployee, SampleEmployeeStatus, SampleEmployeeStatusConst } from "@Models/sample-employee";
import { PartialType } from "@nestjs/mapped-types";
import { IsEnum, IsNotEmpty, IsOptional } from "class-validator";

export class SampleEmployee implements ISampleEmployee {

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  email: string;

  @IsEnum(SampleEmployeeStatusConst)
  role: SampleEmployeeStatus;
  
}

export class SampleEmployeeStatusDTO{

  @IsOptional()
  @IsEnum(SampleEmployeeStatusConst ,{message : 'Invalid Role'})
  role: SampleEmployeeStatus;
}

export class UpdateSampleEmployeeDto extends PartialType(SampleEmployee) {}