'use strict';

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _initializeSocketIo = require('./modules/initializeSocketIo');

var _initializeSocketIo2 = _interopRequireDefault(_initializeSocketIo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var server = _http2.default.createServer(app);

(0, _initializeSocketIo2.default)(server);

var dir = _path2.default.join(__dirname, 'public');
app.use(_express2.default.static(dir));
// サーバーを起動する部分
server.listen(3000);

//# sourceMappingURL=server.js.map