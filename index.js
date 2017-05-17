const WebSocket = require('ws');
const cb = require('cb');

module.exports = function(params, callback) {
  const ws = new WebSocket(params.url);
  const timeout = params.timeout || 5000;
  const done = cb(callback).timeout(timeout).once();

  ws.on('open', done)
    .on('error', done);
};
