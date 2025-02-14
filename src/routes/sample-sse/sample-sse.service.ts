import { Injectable } from '@nestjs/common';
import { interval, map, Subject, takeUntil } from 'rxjs';

@Injectable()
export class SampleSseService {

  private readonly $ubsubscribe = new Subject()
  
  sseStart(){
    return interval(1_000).pipe(
      takeUntil(this.$ubsubscribe),
      map(_=> ({ data: { message: `Hello from SSE! ${new Date().toISOString()}` } } as MessageEvent) )
    )
  }

  sseStop(){
    this.$ubsubscribe.next(null)
  }

}
