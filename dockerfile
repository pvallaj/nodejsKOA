# syntax=docker/dockerfile:1
FROM node
WORKDIR /app
COPY package.json /app
RUN npm install
RUN apt-get update && apt-get install -y iputils-ping
