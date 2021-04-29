const jsonServer = require('json-server');
const express = require('express');
const data = require('./data.json');

const router = jsonServer.router(data);
const server = jsonServer.create();

server.use(express.static('build'));

server.use(router);
const port = 8080;
server.listen(port, () =>
  console.log(`Server is listening to http://localhost:${port}`),
);
