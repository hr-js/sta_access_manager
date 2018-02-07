import io from 'socket.io-client';

const socket = io('localhost:3000');

socket.on('connect', () => {
  socket.on('scan', (data) => {
    // スキャンしたデータはここに表示される
    console.log(`message: ${data}`);
  });
});
