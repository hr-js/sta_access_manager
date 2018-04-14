// @flow
import path from 'path';
import http from 'http';
import express from 'express';
import initializeSocketIo from './modules/initializeSocketIo';

const app: Express = express();
const server: http.Server = http.createServer(app);

initializeSocketIo(server);

const dir: string = path.join(__dirname, 'public');
app.use(express.static(dir));
// サーバーを起動する部分
server.listen(3000);
