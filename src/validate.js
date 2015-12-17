var table = require('./table');
var VALID_REGEX = null;

module.exports = function validate(entry) {
  // Previously, this assignment automatically ran when required.
  // Now, we'll just cache the values once ran.
  if ( VALID_REGEX == null ) {
    var codes = Object.keys(table).join('|');
    VALID_REGEX = new RegExp(codes);
  }

  // 6 - The convention used by PLDT.
  // e.g., PLDTHOMEFIBR_c3c4c9 (the `c3c4c9`)
  if ( entry.length !== 6 || !VALID_REGEX.test(entry) ) {
    throw new Error('Entry (' + entry + ') is invalid!');
  }
}