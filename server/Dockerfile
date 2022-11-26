FROM node:16.14.2

ARG PORT_BUILD=${PORT_FRONT}

WORKDIR /usr/app

COPY . .

RUN npm install

EXPOSE ${PORT_BUILD}

CMD [ "yarn", "start"] 
