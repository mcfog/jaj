const app = require('../../app');

function handler(argv) {
  if (argv._[0] === 'start') {
    argv._.shift();
  }
  if (argv._.length !== 0) {
    console.error(`bad cli command: ${argv._.join(' ')}`);
  }
  app.instance.fork().then(function onResolve(r) {
    console.log('start ok');
    console.log(r);
    process.exit();
  }, function onReject(e) {
    console.error('start error');
    console.error(e);
    process.exit(-1);
  });
}

module.exports = {
  command: ['start', '*'],
  desc: 'start jaj background server',
  builder: {},
  handler,
};
