
FROM node:14.15-alpine 

WORKDIR /usr/src/app

COPY package*.json .

RUN npm install
RUN npm install -g @angular/cli

COPY . .

RUN npm run build

EXPOSE 4200