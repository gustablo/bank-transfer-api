FROM node:latest

WORKDIR /app/api

COPY package.json package-lock.json ./

RUN npm install

EXPOSE 3333

CMD npm run start:dev
