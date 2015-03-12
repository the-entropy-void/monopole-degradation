var wave = require('../lib/wave');
var squa = require('../lib/square');

var a = 1 / 4;

return function(t, i) {
  return a * (
    0
    + 0.2 * squa(0.21, t+2) * squa(0.204, t+2) * wave(200, t)
    + 0.4 * squa(0.2, t)    * squa(0.207, t)   * wave(100, t)
    + 0.4 * squa(5.3, t)    * squa(13.1, t)    * squa(5.9, t) * squa(2000, t)
    + 1.0 * wave(0.5, t)    * squa(0.51, t)    * squa(5.0, t) * wave(440, t)
    + 1.0 * wave(0.51, t)   * squa(0.52, t)    * squa(5.1, t) * wave(880, t)
  );
}