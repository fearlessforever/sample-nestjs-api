import { SampleDTO } from '@DTO/sample';
import { ISample } from '@Models/sample';
import { Injectable, NotFoundException } from '@nestjs/common';
import { randomUUID } from 'crypto';

@Injectable()
export class SampleService {

  private data: ISample[]= []

  findAll(){
     return this.data
  }

  findSpecial(){
    return `Sample Get Special`
  }

  findOne( id: any ){
    const found = this.data.find( val => val.id == id)

    if(!found)
      throw new NotFoundException(`Sample id : ${id} not found`)

    return found
  }

  deleteOne( id:any ){
    const deletedRow =  this.findOne(id)

    this.data = this.data.filter(val => val.id !== deletedRow.id )
    
    return deletedRow
  }

  updateOne( id: any , data:SampleDTO ){
    const selected = this.findOne(id)
    for(let k in data){
      selected[k] = data[k]
    }

    return selected
  }

  create( data:SampleDTO ){
    const sample:ISample = {
      ...data,
      id: randomUUID()
    }

    this.data.push(sample)
    return sample
  }
}