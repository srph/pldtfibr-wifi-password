/**
 * An implementation of http://infotechmaestro.blogspot.com/2014/12/pldt-homefiber-and-pldt-home-dsl-new.html
 */
 
var table = require('./table');
var validate = require('./validate');

/**
 * @param {string} code String to be decoded (e.g., c3c4c9)
 * @return {string}
 */
module.exports = function password(entry) {
  validate(entry);

  var entry = entry
    .split('')
    .map(function(letter) {
      return table[letter];
    })
    .join('');

  return 'wlan' + entry;
}