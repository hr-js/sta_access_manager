import Server from 'socket.io';

const setUpSocketIo = (server) => {
  const io = Server(server);

  io.on('connection', (socket) => {
    console.log('接続しました。');

    socket.on('disconnect', () => {
      console.log('接続が切れました。');
    });
  });

  // TODO: スキャンカードイベントを登録
  // socket.emit('scan', data);
};

export default setUpSocketIo;
