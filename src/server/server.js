// @flow
import path from 'path';
import http from 'http';
import express from 'express';
import initializeSocketIo from './modules/initializeSocketIo';

const app: Express = express();
const server: http.Server = http.createServer(app);

initializeSocketIo(server);
app.use(express.static(path.join(__dirname, 'public')));
server.listen(3000);
