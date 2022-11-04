"use strict";

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Input = exports.Button = void 0;
var button_1 = require("./button");
Object.defineProperty(exports, "Button", {
  enumerable: true,
  get: function get() {
    return __importDefault(button_1).default;
  }
});
var input_1 = require("./input");
Object.defineProperty(exports, "Input", {
  enumerable: true,
  get: function get() {
    return __importDefault(input_1).default;
  }
});