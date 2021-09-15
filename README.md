## Tecnologias Usadas
Frontend
- [Angular 11](https://angular.io//)
  Backend
- [Java 8](https://docs.oracle.com/javase/8/docs/)

## Requerimientos
Para correr & trabajar en este proyecto necesitas tener instalado
- [Node.js](http://nodejs.org/) version > 14.0.0
- [npm](https://www.npmjs.org/)
- [Angular cli](https://angular.io/cli)
- [java 8 (sdkman)](https://sdkman.io/)

### Docker y Docker Compose
- [Docker](https://docs.docker.com/engine/installation/)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Instalación:
### Con Docker Compose
- Asegurarse de tener instalado [Docker](https://docs.docker.com/engine/installation/) y [Docker Compose](https://docs.docker.com/compose/install/)
- En la consola correr los siguientes comandos:
    - [sudo] `docker-compose build`
    - [sudo] `docker-compose up`
    - [sudo] `docker-compose down --rmi all` si tenes algun problema con las imagenes que creaste: repitirlos pasos anteriores

- Cuando esten arriba los dos servicios acceder a:
    - http://localhost:4200/ para acceder frontend
    - http://localhost:6502/application/labourstats backend

### A mano

[Server]
- cd `flexio/backend`
- `sh ./run.sh`

- [Client]
- cd `flexio/frontend`
- `npm i`
- `npm run build`
- `npm run start ó ng server`
