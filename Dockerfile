FROM node:16-alpine

WORKDIR /meu-clube-front/

COPY public/ /meu-clube-front/public
COPY src/ /meu-clube-front/src
COPY package.json /meu-clube-front/
COPY tsconfig.json /meu-clube-front/

RUN npm install

CMD ["npm", "start"]

