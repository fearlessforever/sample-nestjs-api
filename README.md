<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

# Sample / Feature Available
- [x] Simple usage controller , validation , service and route [PR 5](https://github.com/fearlessforever/sample-nestjs-api/pull/5)
- [x] Sample how to forward all log to file log ( each log file separate by date ) [PR 13](https://github.com/fearlessforever/sample-nestjs-api/pull/13)
- [x] Sample how to use rate-limiter [PR 14](https://github.com/fearlessforever/sample-nestjs-api/pull/14)
- [x] Sample how to use cache in app memory or using redis [PR 16](https://github.com/fearlessforever/sample-nestjs-api/pull/16)
- [x] Sample usage database ( prisma / ORM : model , type , interface , migrations ) in controller , service , route dan validator [PR 8](https://github.com/fearlessforever/sample-nestjs-api/pull/8)
- [x] Sample how to use queue ( require redis  ) for heavy process ( background process ) / Scheduler [PR 34](https://github.com/fearlessforever/sample-nestjs-api/pull/34)
- [x] Sample how to use SSE ( Server Sent Events ) - realtime feature only server can send data [PR 32](https://github.com/fearlessforever/sample-nestjs-api/pull/32)
- [x] Sample how to use socket.io - realtime feature server <-> client send data [PR 33](https://github.com/fearlessforever/sample-nestjs-api/pull/33)
- [x] Sample how to use view engine templating for monolith ( traditional mvc ) and templating engine for email [PR 31](https://github.com/fearlessforever/sample-nestjs-api/pull/31)
- [x] Sample how to use CI/CD for nestjs application [PR 20](https://github.com/fearlessforever/sample-nestjs-api/pull/20)
- [x] Sample how to generate docker image ( optional: push image to docker hub by CI/CD release version ) [PR 19](https://github.com/fearlessforever/sample-nestjs-api/pull/19)
- [ ] Sample Authentication / Authorization
- [ ] Sample Implement Apache Kafka
- [ ] Sample Implement gRPC
- [x] Sample how to send email ( required queue feature activate ) and using view engine templating like hbs , or ejs [PR 35](https://github.com/fearlessforever/sample-nestjs-api/pull/35)

## Build & Running the app in docker [Production]
```bash
$ ./run docker-build
$ ./run docker-up
$ ./run docker-down
$ 
$ # run npm command in docker
$ ./run npm-in-docker run prisma version
$
$ # manually from docker, apply migration to db
$ ./run npm-in-docker run prisma migrate deploy
$
$ # run app in docker & migration as well if any available
$ # NOTE: this might take a while because of downloading prisma engine & deploy db changes
$ ./run docker-up --profile migration
```
## Requirement & Optional Feature if Activate
- nodejs: v18.16
- nestjs: ^10.0.0
- redis:7.2-rc3 ( optional )
- database: postgresql, mysql or mariadb ( optional )

## For Debuging Postman file Environment & Collections
- [Postman Environment](postman/Sample%20Nestjs%20Api%20Env.postman_environment.json)
- [Postman Collections](postman/Sample%20Nestjs%20Api.postman_collection.json)

## Docker Image ( production ready )
```bash
$ docker pull fearlessforever/nestjs-app:latest
$ #run the image and send to background
$ docker run -d \
  --name my-nestjs \
  -v $(pwd)/../logs:/logs \
  -e IS_FORWARD_LOG_TO_FILE=true \
  -p 3000:3000 \
  --expose 3000 \
  fearlessforever/nestjs-app:latest \
  npm run start:prod
$ #stop / kill it process
$ docker kill my-nestjs
$ #remove unused container
$ docker rm my-nestjs
```

## Installation

```bash
$ npm install
```

## DB Operation

```bash
$ npm run prisma migrate dev -- --name init_app_db
$ npm run prisma generate
$ npm run prisma migrate deploy
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## License

Nest is [MIT licensed](LICENSE).
