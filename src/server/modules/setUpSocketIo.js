import Server from 'socket.io';
import NfcpyId from 'node-nfcpy-id';
// import path from 'path';

const Sound = require('aplay');

// const music = new Sound();

const nfc = new NfcpyId().start();

const setUpSocketIo = (server) => {
  const io = Server(server);

  io.on('connection', (socket) => {
    console.log('接続しました。');

    socket.on('disconnect', () => {
      console.log('接続が切れました。');
    });

    // touch scan
    nfc.on('touchstart', (card) => {
      console.log(`Card ID: ${card.id}`);
      console.log(`Card Type: ${card.type}`);

      // music.play(path.resolve(__dirname, './assets/music/sample.wav'));

      new Sound().play('./assets/music/hoge.mp3'); // assets/musicにあるmp3ファイルを指定します。
      socket.emit('scan', card.id);
    });
    // touch end
    nfc.on('touchend', () => {
      console.log('Card was away.');
    });
    nfc.on('error', (err) => {
      // standard error output (color is red)
      console.error('\u001b[31m', err, '\u001b[0m');
    });
  });
  // socket.emit('scan', data);
};
export default setUpSocketIo;
