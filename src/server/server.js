// @flow
import path from "path";
import http from "http";
import express from "express";
import type { $Application } from "express";
import initializeSocketIo from "./modules/initializeSocketIo";

const app: $Application = express();
const server: Server = http.createServer(app);

initializeSocketIo(server);
app.use(express.static(path.join(__dirname, "public")));
server.listen(3000);
