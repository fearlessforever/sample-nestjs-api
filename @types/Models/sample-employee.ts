import { $Enums, Prisma } from "@prisma/client";

export type ISampleEmployee = Prisma.SampleEmployeeCreateInput

export type SampleEmployeeStatus = keyof typeof $Enums.Role
export const SampleEmployeeStatusConst = $Enums.Role