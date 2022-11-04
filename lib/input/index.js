"use strict";

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
var react_1 = __importDefault(require("react"));
function Input(props) {
  return react_1.default.createElement("input", {
    placeholder: props === null || props === void 0 ? void 0 : props.placeholder
  });
}
exports.default = Input;