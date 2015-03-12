var wave = require('../lib/wave');

var f0 = 60;
var a = 1/8;

return function(t) {
  return a * (
    wave(f0, t) +
    1/3 * wave(3 * f0, t) +
    1/5 * wave(5 * f0, t) +
    1/7 * wave(7 * f0, t) +
    1/9 * wave(9 * f0, t)
  );
}