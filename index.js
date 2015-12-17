/**
 * An implementation of http://infotechmaestro.blogspot.com/2014/12/pldt-homefiber-and-pldt-home-dsl-new.html
 */
 
var table = require('./table');
var validate = require('./validate');

module.exports = function revmac(entry) {
  validate(entry);

  var code = entry
    .split('')
    .map(function(letter) {
      return table[letter];
    })
    .join('');

  return 'wlan' + code;
}