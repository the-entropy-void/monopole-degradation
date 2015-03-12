var wave = require('./wave');

module.exports = function square(f, t) {
  return wave(f, t) > 0 ? 1 : 0;
}