var wave = require('../lib/wave');
var squa = require('../lib/square');
var soft = require('../lib/softsq');

var a = 1 / 2;

function voice(f, t) {
  return wave(f, t) + 1 / 10 * wave(f * 3, t);
}

function bass1(t) {
  return soft(1, t) * voice(60, t);
}

function bass2(t) {
  return soft(1, t + 0.5) * soft(3, t + 0.5) * voice(55 * 1.3333, t);
}

return function(t, i) {
  return a * (
    0
    + 0.2 * bass1(t)
    + 0.2 * bass2(t)

    + 1.0 * squa(1/20, t) * squa(10, t) * squa(10.5, t) * voice(440, t)
    + 1.0 * squa(1/20.1, t+30) * squa(10, t) * squa(10.5, t) * voice(473, t)

    + 0.25
      * squa(1.3, t)
      * squa(1.4, t)
      * squa(1.401, t)
      * squa(100, t)
      * squa(101, t)
      * squa(102, t)
      * squa(103, t)
      * voice(440, t)

    + 0.15
      * squa(1.1, t)
      * squa(1.2, t)
      * squa(1.201, t)
      * squa(100, t+1.43)
      * squa(101, t+1.43)
      * squa(102, t+1.43)
      * squa(103, t+1.43)
      * squa(104, t+1.43)
      * voice(1000, t)

    + 0.001
      * squa(400, t+1.43)
      * squa(402, t+1.43)
      * squa(404, t+1.43)
      * squa(406, t+1.43)
      * squa(408, t+1.43)
      * squa(410, t+1.43)
      * voice(2000, t)
  );
}