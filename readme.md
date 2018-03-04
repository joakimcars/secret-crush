# Secret Crush

## Pre-requisites

Node is used for running the application and npm is used to manage any runtime or development dependencies. In addition, Docker and Docker Compose is used to run the MongoDB database instance in a container. The required tools to run and develop the application is listed below:

- [Node.js 8.9.4](https://nodejs.org/en/download/)
- [npm](https://www.npmjs.com/get-npm) (Included with node)
- [Docker CE](https://www.docker.com/community-edition)
- [Docker Compose](https://docs.docker.com/compose/install/) (included with Docker CE on Windows and Mac OS X)

Ensure npm, node and docker-compose is installed using the following commands:

```
$ node -v
v8.9.4
$ npm -v
5.6.0
$ docker -v
Docker version 17.12.0-ce, build c97c6d6
$ docker-compose -v
docker-compose version 1.18.0, build 8dd22a9
```

Ensure that no error messages are printed. Note that build numbers and versions may vary.

## Get started

Once the required tools have been installed, install all development and runtime dependencies using `npm install` in the project root directory (same directory as the `package.json` file). Look out for any error messages.

```
$ npm install
```

Start the development server using `npm run dev`. This will start the MongoDB instance in a docker container as well as the `webpack` development server with automatic reload.

```
$ npm run dev
```

The application is configured to listen on port `3000` by default:

- http://localhost:3000

An admin page for the database is located at port `8081`

- http://localhost:8081
