
export interface ISample{
  id: string,
  name: string,
  message: string,
  status: SampleStatus ,
}

export enum SampleStatus{
  DRAFT='DRAFT',
  SUBMIT='SUBMIT',
}