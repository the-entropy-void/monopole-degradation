var wave = require('../lib/wave');
var squa = require('../lib/square');

var a = 1 / 20;

return function(t, i) {
  return a * (
    0

    + squa(1000 - 10 * Math.cos(t*2), t)
      * squa(1001 - 10 * Math.cos(t*2.1), t)

    + wave(100 - 2 * Math.cos((t+4)*2), t)
  );
}