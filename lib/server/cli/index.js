const yargs = require('yargs');

const cli = yargs.commandDir('./cmd').help();

module.exports = cli;
