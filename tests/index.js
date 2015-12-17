var expect = require('chai').expect;
var revmac = require('../src/index');

var code = 'c5c4c9'; // A valid reversible address
var result = '3a3b36';

describe('revmac', function() {
  it('should prepend `wlan` to the result', function() {
    expect(revmac('c5c4c9')).to.equal('wlan' + result);
  });

  it('should throw if code is not 6 characters', function() {
    expect(revmac('c5c4c9')).to.equal('wlan3a3b36');
  });
});