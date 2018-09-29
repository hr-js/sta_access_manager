// @flow
import SocketIo from "socket.io";
import NfcpyId from "node-nfcpy-id";
import Sound from "aplay";

const nfc = new NfcpyId().start();

function initializeSocketIo(server: Server) {
  const io: SocketIo.Server = SocketIo(server);
  io.on("connection", (socket: SocketIo.Socket) => {
    socket.on("sound", id => {
      // idで音を変更できる
      switch (id) {
        default:
          new Sound().play("./assets/music/xxx.mp3");
          break;
      }
    });
    // touch scan
    nfc.on("touchstart", card => {
      socket.emit("scan", card.id);
    });
  });
}
export default initializeSocketIo;
