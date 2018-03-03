FROM node:carbon
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json package-lock.json /usr/src/app/
RUN npm install
COPY . /usr/src/app
RUN npm run build
EXPOSE 80
ENV SERVER_PORT=80
CMD [ "npm", "start" ]

