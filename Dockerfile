FROM node:16-alpine

WORKDIR /usr/app

COPY . .

RUN npm ci 
RUN npm run build

CMD [ "npm", "start" ]