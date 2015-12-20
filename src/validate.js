var table = require('./table');
var VALID_REGEX = null;

/**
 * @param {string} code String to be validated (e.g., c3c4c9)
 * @throws Error
 * @return void
 */
module.exports = function validate(code) {
  // Previously, this assignment automatically ran when required.
  // Now, we'll just cache the values once ran.
  if ( VALID_REGEX == null ) {
    var codes = Object.keys(table).join('');
    // http://stackoverflow.com/questions/1555810/regex-pattern-to-match-only-certain-characters
    VALID_REGEX = new RegExp('^[' + codes + ']*$'); // ^[0123]*$
  }

  // 6 - The convention used by PLDT.
  // e.g., PLDTHOMEFIBR_c3c4c9 (the `c3c4c9`)
  if ( code.length !== 6 || !VALID_REGEX.test(code) ) {
    throw new Error('Input ' + code + ' is invalid!');
  }
}