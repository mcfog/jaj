const ws = require('ws');

exports.attach = function attach(httpServer) {
  const wss = new ws.Server({
    server: httpServer,
  });
  wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(message) {
      console.log('received: %s', message);
      ws.send('ack');
    });

    ws.send('something');
  });

  return wss;
};
