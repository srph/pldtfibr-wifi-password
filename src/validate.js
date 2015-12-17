var table = require('./table');
var codes = null;
var VALID_REGEX = null;

module.exports = function validate(entry) {
  // Previously, this assignment automatically ran when required.
  // Now, we'll just cache the values once ran.
  if ( VALID_REGEX == null ) {
    codes = Object.keys(table).join('|');
    VALID_REGEX = new RegExp(codes);
  }

  if ( entry.length !== 6 || !VALID_REGEX.test(entry) ) {
    throw new Error('Entry (' + entry + ') is invalid!');
  }
}