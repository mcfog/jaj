const EventEmitter = require('events');
const defaultConfig = require('./default.js');
const jsonpath = require('jsonpath-plus');

const config = Symbol('config');

class Config extends EventEmitter {
  constructor() {
    super();
    this[config] = defaultConfig;
  }

  get(path) {
    const value = jsonpath({
      wrap: false,
    }, path, this[config]);
    if (typeof value === 'object') {
      throw new TypeError('cannot get object');
    }

    return value;
  }
}

module.exports = new Config();
