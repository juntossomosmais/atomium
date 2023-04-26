"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = rule;
exports.ruleName = exports.meta = exports.messages = void 0;
var _postcssValueParser = _interopRequireDefault(require("postcss-value-parser"));
var _stylelint = require("stylelint");
var _utils = require("../../utils");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var ruleToCheckAgainst = "function-no-unknown";
var ruleName = (0, _utils.namespace)(ruleToCheckAgainst);
exports.ruleName = ruleName;
var messages = _stylelint.utils.ruleMessages(ruleName, {
  rejected: function rejected() {
    var _rules$ruleToCheckAga;
    return (_rules$ruleToCheckAga = _stylelint.rules[ruleToCheckAgainst].messages).rejected.apply(_rules$ruleToCheckAga, arguments).replace(" (".concat(ruleToCheckAgainst, ")"), "");
  }
});
exports.messages = messages;
var meta = {
  url: (0, _utils.ruleUrl)(ruleName)
};
exports.meta = meta;
function isNamespacedFunction(fn) {
  var namespacedFunc = /^\w+\.\w+$/;
  return namespacedFunc.test(fn);
}
function isAtUseAsSyntax(nodes) {
  var _nodes$slice = nodes.slice(-3),
    _nodes$slice2 = _slicedToArray(_nodes$slice, 3),
    first = _nodes$slice2[0],
    second = _nodes$slice2[1],
    third = _nodes$slice2[2];
  return first.type === "word" && first.value === "as" && second.type === "space" && third.type === "word";
}
function getAtUseNamespace(nodes) {
  if (isAtUseAsSyntax(nodes)) {
    var _nodes$slice3 = nodes.slice(-1),
      _nodes$slice4 = _slicedToArray(_nodes$slice3, 1),
      _last = _nodes$slice4[0];
    return _last.value;
  }
  var _nodes = _slicedToArray(nodes, 1),
    first = _nodes[0];
  var parts = first.value.split("/");
  var _parts$slice = parts.slice(-1),
    _parts$slice2 = _slicedToArray(_parts$slice, 1),
    last = _parts$slice2[0];
  return last;
}
function rule(primaryOption, secondaryOptions) {
  return function (root, result) {
    var validOptions = _stylelint.utils.validateOptions(result, ruleName, {
      actual: primaryOption
    }, {
      actual: secondaryOptions,
      possible: {
        ignoreFunctions: [_utils.isString, _utils.isRegExp]
      },
      optional: true
    });
    if (!validOptions) {
      return;
    }
    var optionsFunctions = secondaryOptions && secondaryOptions.ignoreFunctions || [];
    var ignoreFunctions = _utils.ALL_FUNCTIONS.concat(optionsFunctions);
    var ignoreFunctionsAsSet = new Set(ignoreFunctions);
    var newSecondaryOptions = Object.assign({}, secondaryOptions, {
      ignoreFunctions: ignoreFunctions
    });
    _stylelint.utils.checkAgainstRule({
      ruleName: ruleToCheckAgainst,
      ruleSettings: [primaryOption, newSecondaryOptions],
      root: root
    }, function (warning) {
      var node = warning.node,
        index = warning.index;

      // NOTE: Using `valueParser` is necessary for extracting a function name. This may be a performance waste.
      (0, _postcssValueParser["default"])(node.value).walk(function (valueNode) {
        var type = valueNode.type,
          funcName = valueNode.value;
        if (type !== "function") {
          return;
        }
        if (isNamespacedFunction(funcName)) {
          var atUseNamespaces = [];
          root.walkAtRules(/^use$/i, function (atRule) {
            var _valueParser = (0, _postcssValueParser["default"])(atRule.params),
              nodes = _valueParser.nodes;
            atUseNamespaces.push(getAtUseNamespace(nodes));
          });
          if (atUseNamespaces.length) {
            var _funcName$split = funcName.split("."),
              _funcName$split2 = _slicedToArray(_funcName$split, 1),
              _namespace = _funcName$split2[0];
            if (atUseNamespaces.includes(_namespace)) {
              return;
            }
          }
        }
        if (!ignoreFunctionsAsSet.has(funcName)) {
          _stylelint.utils.report({
            message: messages.rejected(funcName),
            ruleName: ruleName,
            result: result,
            node: node,
            index: index
          });
        }
      });
    });
  };
}
rule.ruleName = ruleName;
rule.messages = messages;
rule.meta = meta;