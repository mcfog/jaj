const config = require('../../config');
const child_process = require('child_process');

exports.fork = function fork() {
  const child = child_process.fork(__dirname + '/child_daemon', {
    detached: true,
  });
  return new Promise(function executor(resolve, reject) {
    child.on('exit', reject);
    child.on('disconnect', reject);
    child.on('message', function handleMessage(message) {
      if (!message.state || !message.hasOwnProperty('result')) {
        reject(new Error('bad state'));
      } else if (message.state === 'resolved') {
        resolve(message.result);
        child.disconnect();
      } else {
        reject(message.result);
      }
    });
  });
};

exports.daemon = function daemon() {
  return new Promise(function executor(resolve, reject) {
    // eslint-disable-next-line global-require
    const app = require('.');

    const server = app.buildServer();
    const port = config.get('server.port');
    const host = config.get('server.host');
    const origin = config.get('server.origin');

    server.listen(port, host, function cb(err) {
      return !err ? resolve(`listening at ${origin}`) : reject(err);
    });
  });
};
