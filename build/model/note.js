"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var noteSchema = new _mongoose["default"].Schema({
  title: {
    type: String,
    "default": ''
  },
  note: {
    type: String,
    "default": ''
  },
  date: {
    type: Date,
    "default": Date.now()
  }
});

var note = _mongoose["default"].model('Note', noteSchema);

var _default = note;
exports["default"] = _default;