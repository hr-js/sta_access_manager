// @flow
import io from 'socket.io-client';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);

const socket: SocketIOClient.Socket = io('localhost:3000');

socket.on('connect', () => {
  socket.on('scan', (data: string) => {
    // スキャンしたデータはここに表示される
    console.log(`message: ${data}`);
  });
});
