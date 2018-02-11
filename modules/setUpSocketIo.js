'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _socket = require('socket.io');

var _socket2 = _interopRequireDefault(_socket);

var _nodeNfcpyId = require('node-nfcpy-id');

var _nodeNfcpyId2 = _interopRequireDefault(_nodeNfcpyId);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Sound = require('aplay');
// エラー回避のためコメントアウトしています。


var nfc = new _nodeNfcpyId2.default().start();

var setUpSocketIo = function setUpSocketIo(server) {
  var io = (0, _socket2.default)(server);

  io.on('connection', function (socket) {
    console.log('接続しました。');

    socket.on('disconnect', function () {
      console.log('接続が切れました。');
    });

    // touch scan
    nfc.on('touchstart', function (card) {
      console.log('Card ID: ' + card.id);
      console.log('Card Type: ' + card.type);
      new Sound().play('./assets/music/hoge.mp3'); // assets/musicにあるmp3ファイルを指定します。
      socket.emit('scan', card.id);
    });
    // touch end
    nfc.on('touchend', function () {
      console.log('Card was away.');
    });
    nfc.on('error', function (err) {
      // standard error output (color is red)
      console.error('\x1B[31m', err, '\x1B[0m');
    });
  });
};
exports.default = setUpSocketIo;
//# sourceMappingURL=setUpSocketIo.js.map