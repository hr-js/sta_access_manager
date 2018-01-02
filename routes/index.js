'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var index = _express2.default.Router();

/* GET home page. */
index.get('/', function (req, res) {
  console.log('users root');
  // res.send('respond with a resource');
  res.render('index', { title: 'Express' });
});

exports.default = index;
//# sourceMappingURL=index.js.map