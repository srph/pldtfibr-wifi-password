var table = require('./table');
var codes = Object.keys(table).join('|');
var VALID_REGEX = new RegExp(codes);

module.exports = function validate(entry) {
  if ( entry.length !== 6 || !VALID_REGEX.test(entry) ) {
    throw new Error('Entry (' + entry + ') is invalid!');
  }
}