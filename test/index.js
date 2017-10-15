// PaSoRiを使用する用のコード
const NfcpyId = require('node-nfcpy-id').default;
const nfc = new NfcpyId().start();
var soundPlayer = new SoundPlayer();

nfc.on('touchstart', (card) => {
  console.log('touchstart', 'id:', card.id, 'type:', card.type);
});

nfc.on('touchend', () => {
  console.log('touchend');
  soundPlayer.play();
});

nfc.on('error', (err) => {
  // standard error output (color is red)
  console.error('\u001b[31m', err, '\u001b[0m');
});
