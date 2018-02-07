'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var users = _express2.default.Router();

/* GET users listing. */
users.get('/', function (req, res) {
  console.log('users users');
  res.send('respond with a resource');
});

exports.default = users;
//# sourceMappingURL=users.js.map