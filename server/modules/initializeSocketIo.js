Object.defineProperty(exports, "__esModule", {
  value: true
});

const _socket = require("socket.io");

const _socket2 = _interopRequireDefault(_socket);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

(function() {
  const enterModule = require("react-hot-loader").enterModule;

  enterModule && enterModule(module);
})();

// import NfcpyId from 'node-nfcpy-id';
// import Sound from 'aplay';

// const nfc = new NfcpyId().start();

function initializeSocketIo(server) {
  const io = (0, _socket2.default)(server);
  io.on("connection", socket => {
    console.log("接続しました。");
    socket.on("disconnect", () => {
      console.log("接続が切れました。");
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
const _default = initializeSocketIo;
exports.default = _default;
(function() {
  const reactHotLoader = require("react-hot-loader").default;

  const leaveModule = require("react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(
    initializeSocketIo,
    "initializeSocketIo",
    "src/server/modules/initializeSocketIo.js"
  );
  reactHotLoader.register(
    _default,
    "default",
    "src/server/modules/initializeSocketIo.js"
  );
  leaveModule(module);
})();
// # sourceMappingURL=initializeSocketIo.js.map
