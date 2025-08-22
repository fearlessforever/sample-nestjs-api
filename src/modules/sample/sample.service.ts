import { Injectable } from '@nestjs/common';

@Injectable()
export class SampleService {

  findAll(){
     return 'Sample Get All'
  }

  findSpecial(){
    return `Sample Get Special`
  }

  findOne( id: any ){
    return `Sample Get by Id : ${id}`
  }

  deleteOne( id:any ){
    return `Sample Delete by Id : ${id}`
  }

  updateOne( id: any , data:any ){
    return `Sample Update by Id : ${id} -> ${JSON.stringify(data)}`
  }

  create( data:any ){
    return `Sample Create -> ${JSON.stringify(data)}`
  }
}