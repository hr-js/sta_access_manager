const _path = require("path");

const _path2 = _interopRequireDefault(_path);

const _http = require("http");

const _http2 = _interopRequireDefault(_http);

const _express = require("express");

const _express2 = _interopRequireDefault(_express);

const _initializeSocketIo = require("./modules/initializeSocketIo");

const _initializeSocketIo2 = _interopRequireDefault(_initializeSocketIo);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

(function() {
  const enterModule = require("react-hot-loader").enterModule;

  enterModule && enterModule(module);
})();

const app = (0, _express2.default)();
const server = _http2.default.createServer(app);

(0, _initializeSocketIo2.default)(server);
app.use(_express2.default.static(_path2.default.join(__dirname, "public")));
server.listen(3000);
(function() {
  const reactHotLoader = require("react-hot-loader").default;

  const leaveModule = require("react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(app, "app", "src/server/server.js");
  reactHotLoader.register(server, "server", "src/server/server.js");
  leaveModule(module);
})();

// # sourceMappingURL=server.js.map
