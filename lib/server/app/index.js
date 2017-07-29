const http = require('http');
const websocketService = require('./websocket');
const httpService = require('./http');
const instance = require('./instance');

function buildServer() {
  const server = new http.Server();
  httpService.attach(server);
  websocketService.attach(server);

  return server;
}

module.exports = {
  buildServer,
  instance,
};
