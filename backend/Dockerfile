FROM rtfpessoa/ubuntu-jdk8 AS deps

MAINTAINER Germán Cáceres <germancaceres18@gmail.com>

RUN apt-get update && apt-get install librrds-perl rrdtool -y

RUN mkdir -p /usr/code/flexio/backend
WORKDIR /usr/code/flexio/backend

COPY . .

COPY ./run.sh run.sh
RUN chmod +x run.sh

EXPOSE 6502