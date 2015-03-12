var wave = require('../lib/wave');
var wave = require('../lib/wave');
var a = 1 / 60;

var fs = 1917;
var fe = 1991;

function compile() {
  var freqs = [];
  for (var i = 0; i < 50; i++) {
    freqs.push(Math.random() * (fe - fs) + fs);
  }
  return function(t) {
    var y = 0;
    for (var i = 0; i < freqs.length; i++) {
      y += wave(freqs[i], t);
    }

    return a * y;
  }
}

var spectrum = compile();

return function(t) {
  return spectrum(t);
}