var expect = require('chai').expect;
var validate = require('../src/validate');

describe('validate', function() {
  it('should throw if code is not 6 characters', function() {
    expect(function() {
      validate('ccccccc');
    }).to.throw();
  });

  it('should throw if code is not in the table', function() {
    expect(function() {
      validate('zzzzzzz');
    }).to.throw();
  });

  it('should not throw if code is in the table', function() {
    expect(function() {
      validate('cdef02');
    }).not.to.throw();
  });
});