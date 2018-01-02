'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _socket = require('socket.io');

var _socket2 = _interopRequireDefault(_socket);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log(_socket2.default);

var socketIo = require('socket.io');
console.log(socketIo);

var setUpSocketIo = function setUpSocketIo(server) {
  var io = (0, _socket2.default)(server);

  io.on('connection', function (socket) {
    console.log('接続しました。');

    socket.on('disconnect', function () {
      console.log('接続が切れました。');
    });

    socket.on('chat message', function (msg) {
      console.log('\u53D7\u4FE1\u3057\u305F\u30E1\u30C3\u30BB\u30FC\u30B8:' + msg);
      io.emit('push', msg);
    });
  });
};

exports.default = setUpSocketIo;
//# sourceMappingURL=setUpSocketIo.js.map