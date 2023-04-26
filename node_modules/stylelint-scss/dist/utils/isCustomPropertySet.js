"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;
var _dlv = _interopRequireDefault(require("dlv"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/**
 * Check whether a Node is a custom property set
 *
 * @param {import('postcss').Rule} node
 * @returns {boolean}
 */
function _default(node) {
  var prop = (0, _dlv["default"])(node, "raws.prop.raw", node.prop);
  var value = (0, _dlv["default"])(node, "raws.value.raw", node.value);
  return node.type === "decl" && prop.startsWith("--") && value.startsWith("{") && value.endsWith("}");
}