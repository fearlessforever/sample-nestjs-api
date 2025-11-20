import { PrismaService } from '@/database/prisma.service';
import { SampleEmployee } from '@DTO/sample-employee';
import { SampleEmployeeStatus } from '@Models/sample-employee';
import { Injectable, NotFoundException, Optional } from '@nestjs/common';
import { Prisma } from '@prisma/client';

@Injectable()
export class SampleEmployeesService {
  
  constructor(
     @Optional() private readonly prisma: PrismaService ,
  ){}

  async create( data: SampleEmployee) {
    const result = await this.prisma.sampleEmployee.create({ data })
    return result;
  }

  async findAll( certainRole?: SampleEmployeeStatus ) {
    const where =  ( certainRole ? {
      role: certainRole 
    } : undefined )  satisfies Prisma.SampleEmployeeWhereInput

    const result = await this.prisma.sampleEmployee.findMany({ where });
    return result;
  }

  async findOne(id: number) {
    const where = {
      id
    } satisfies Prisma.SampleEmployeeWhereInput

    const result = await this.prisma.sampleEmployee.findFirst({ where });

    if(!result)
      throw new NotFoundException()

    return result;
  }

  async update(id: number, data: Partial<SampleEmployee>) {
    const where = {
      id
    } satisfies Prisma.SampleEmployeeWhereInput

    const result = await this.prisma.sampleEmployee.update({ where , data });

    return result;
  }

  async remove(id: number) {
    const where = {
      id
    } satisfies Prisma.SampleEmployeeWhereInput

    const result = await this.prisma.sampleEmployee.delete({ where });

    return result;
  }
}
