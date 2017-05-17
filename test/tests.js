const wstest = require('./..');
const assert = require('chai').assert;

describe('wstest', () => {
  it('should fail when the server doesnt support ws', (done) => {
    wstest({ url: 'ws://example.com '}, (err) => {
      assert.ok(err);
      done();
    });
  });

  it('should work with ws servers', (done) => {
    wstest({ url: 'wss://echo.websocket.org'}, (err) => {
      assert.notOk(err);
      done();
    });
  });

  it('should fail with timeout error when exceeding the timeout', (done) => {
    wstest({ url: 'wss://echo.websocket.org', timeout: 1 }, (err) => {
      assert.ok(err);
      assert.equal(err.message, 'Specified timeout of 1ms was reached');
      done();
    });
  });

});
