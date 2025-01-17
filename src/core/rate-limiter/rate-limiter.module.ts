import { Module } from '@nestjs/common';
import { ThrottlerModule } from '@nestjs/throttler';

@Module({
  imports:[
    ThrottlerModule.forRoot([
      {
        name: 'long',
        ttl: 60_000,
        limit: 100
      },
      {
        name: 'short',
        ttl: 1000,
        limit: 27
      },
    ])
  ]
})
export class RateLimiterModule {}
