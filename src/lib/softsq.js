var wave = require('./wave');

module.exports = function softsq(f, t) {
  var y = wave(f, t);
  var y5 = Math.pow(y, 3);
  return (y5 + 1) / 2;
}