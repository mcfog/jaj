const os = require('os');
const path = require('path');

exports.home = process.env.JAJ_HOME || path.join(os.homedir(), '.jaj');
exports.server = {};
exports.server.port = 13221;
exports.server.host = '127.0.0.1';
exports.server.origin = 'http://127.0.0.1:13221';
