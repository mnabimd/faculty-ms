FROM node:18.15-alpine3.16

RUN npm install nodemon -g

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000
# required for docker desktop port mapping
