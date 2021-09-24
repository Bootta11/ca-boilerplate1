FROM node:14.17.6-alpine3.13

RUN apk update
RUN apk add python3 make

WORKDIR /app

ENV NODE_ENV production

COPY ["package.json", "package-lock.json", "./"]

RUN npm ci
RUN npm i -g typescript

USER node

COPY --chown=node:node . .

CMD [ "npm", "run", "start" ]

EXPOSE 8080
