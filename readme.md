# Boilerplate Node.JS + Express.JS + MongoDB + TypeScript + Webpack

## Requirements

- node >= 10
- docker >= 19
- docker-compose >= 1.24

## Start boilerplate

- Run command `docker-compose up -d`
- Run command `docker exec -it app cp .env.example .env`
- Run command `docker exec -it app npm i`

## Start tests

- Run command `docker-compose up -d`
- Run command `docker exec -it app cp .env.testing .env`
- Run command `docker exec -it app npm i`
- Run command `docker exec -it app npm run test`

## Start boilerplate in production

- Run command `cp .env.example .env`
- Run command `npm i`
- Run command `npm run build`
- Run command `npm run start`
  OR
- Run command `docker build -t douglas-dennys/node-ts`
- Run command `docker run -p 3030:3030 --name node-ts douglas-dennys/node-ts`
- Run command `docker exec -it app cp .env.example .env`
