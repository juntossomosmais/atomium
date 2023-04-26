"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = rule;
exports.ruleName = exports.meta = exports.messages = void 0;
var _stylelint = require("stylelint");
var _utils = require("../../utils");
var ruleName = (0, _utils.namespace)("at-mixin-pattern");
exports.ruleName = ruleName;
var messages = _stylelint.utils.ruleMessages(ruleName, {
  expected: "Expected @mixin name to match specified pattern"
});
exports.messages = messages;
var meta = {
  url: (0, _utils.ruleUrl)(ruleName)
};
exports.meta = meta;
function rule(pattern) {
  return function (root, result) {
    var validOptions = _stylelint.utils.validateOptions(result, ruleName, {
      actual: pattern,
      possible: [_utils.isRegExp, _utils.isString]
    });
    if (!validOptions) {
      return;
    }
    var regexpPattern = (0, _utils.isString)(pattern) ? new RegExp(pattern) : pattern;
    root.walkAtRules(function (decl) {
      if (decl.name !== "mixin") {
        return;
      }

      // Stripping the mixin of its arguments
      var mixinName = decl.params.replace(/(\s*)\([\s\S]*\)/g, "");
      if (regexpPattern.test(mixinName)) {
        return;
      }
      var mixinTopLine = Object.assign({}, decl.source.start);
      mixinTopLine.line += 1;
      mixinTopLine.column = 0;
      _stylelint.utils.report({
        message: messages.expected,
        node: decl,
        result: result,
        ruleName: ruleName,
        end: mixinTopLine
      });
    });
  };
}
rule.ruleName = ruleName;
rule.messages = messages;
rule.meta = meta;