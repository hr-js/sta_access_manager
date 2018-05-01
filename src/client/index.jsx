// @flow
import io from "socket.io-client";
import * as React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

const root = document.getElementById("root");
if (root === null) {
  throw new Error("rootがnullです。");
}

ReactDOM.render(<App />, root);

const socket: Socket = io("localhost:3000");

socket.on("connect", () => {
  socket.on("scan", (data: string) => {
    console.log(`message: ${data}`);
  });
});
