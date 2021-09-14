FROM node:alpine3.14 AS deps

MAINTAINER Germán Cáceres <germancaceres18@gmail.com>

RUN mkdir -p /usr/code/flexio/frontend
WORKDIR /usr/code/flexio/frontend

COPY package.json package-lock.json ./

RUN npm install -g @angular/cli @angular-devkit/build-angular && npm install

COPY . ./

CMD ng serve --host 0.0.0.0

EXPOSE 4200

