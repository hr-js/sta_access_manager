'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _socket = require('socket.io');

var _socket2 = _interopRequireDefault(_socket);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import NfcpyId from 'node-nfcpy-id';
// import Sound from 'aplay';

// const nfc = new NfcpyId().start();

function initializeSocketIo(server) {
  var io = (0, _socket2.default)(server);
  io.on('connection', function (socket) {
    console.log('接続しました。');
    socket.on('disconnect', function () {
      console.log('接続が切れました。');
    });

    // // touch scan
    // nfc.on('touchstart', (card) => {
    //   console.log(`Card ID: ${card.id}`);
    //   console.log(`Card Type: ${card.type}`);
    //   new Sound().play('./assets/music/hoge.mp3'); // assets/musicにあるmp3ファイルを指定します。
    //   socket.emit('scan', card.id);
    // });
    // // touch end
    // nfc.on('touchend', () => {
    //   console.log('Card was away.');
    // });
    // nfc.on('error', (err) => {
    //   // standard error output (color is red)
    //   console.error('\u001b[31m', err, '\u001b[0m');
    // });
  });
}
exports.default = initializeSocketIo;
//# sourceMappingURL=initializeSocketIo.js.map