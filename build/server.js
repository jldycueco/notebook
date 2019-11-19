"use strict";

var _express = _interopRequireDefault(require("express"));

require("dotenv/config");

var _cors = _interopRequireDefault(require("cors"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _note = _interopRequireDefault(require("./routes/note"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.use((0, _cors["default"])()); //Body Parser

app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
})); //Mongoose

var uri = process.env.MONGO_URI;

_mongoose["default"].connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
});

var db = _mongoose["default"].connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  return console.log('db is connected');
}); //Route

app.use('/note', _note["default"]); //Port

var port = process.env.PORT || 5000;
app.listen(port, function () {
  return console.log("Server running on port ".concat(port));
});