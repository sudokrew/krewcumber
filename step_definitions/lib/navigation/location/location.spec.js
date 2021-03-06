var chai = require('chai');

var locationModule = require('./index');

var expect = chai.expect;

describe('escape URI', function () {
  it('should encode URIs', function () {
    expect(locationModule.escapeURI('foo bar')).to.equal('foo%20bar');
    expect(locationModule.escapeURI('?foo=bar baz')).to.equal('?foo=bar%20baz');
  });
});

describe('resolving a uri', function () {
  it('should resolve a uri from a base url', function () {
    var baseUrl = 'http://localhost:8080';
    var resolvedUrl = 'http://localhost:8080/foo';
    expect(locationModule.resolveUrl(baseUrl, 'foo')).to.equal(resolvedUrl);
    expect(locationModule.resolveUrl(baseUrl, '/foo')).to.equal(resolvedUrl);
  });
});
