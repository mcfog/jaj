const express = require('express');

exports.attach = function attach(httpServer) {
  const app = express();
  app.use(express.static('public'));

  httpServer.addListener('request', app);
  return app;
};
