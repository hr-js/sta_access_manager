// var http = require('http');



// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.end('Hello Hosomichi!\n');
// }).listen(1337, '127.0.0.1');


// PaSoRiを使用する用のコード
const NfcpyId = require('node-nfcpy-id').default;
const nfc = new NfcpyId().start();

nfc.on('touchstart', (card) => {
  console.log('touchstart', 'id:', card.id, 'type:', card.type);
});

nfc.on('touchend', () => {
  console.log('touchend');
});

nfc.on('error', (err) => {
  // standard error output (color is red)
  console.error('\u001b[31m', err, '\u001b[0m');
});
