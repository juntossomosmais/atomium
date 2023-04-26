'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var helperPluginUtils = require('@babel/helper-plugin-utils');
var compiler = require('vue-template-compiler');
var fs = _interopDefault(require('fs'));
var pluginTransformTypeScript = _interopDefault(require('@babel/plugin-transform-typescript'));
var presetTypeScript = _interopDefault(require('@babel/preset-typescript'));

var fileTest = (filePath => {
  if (/\.vue$/.test(filePath)) {
    const {
      script
    } = compiler.parseComponent(fs.readFileSync(filePath, {
      encoding: "utf8"
    }));
    return !!script.lang && script.lang.toLowerCase() === "ts";
  }

  return false;
});

var index = helperPluginUtils.declare((api, options = {}) => {
  api.assertVersion(7);
  return {
    "presets": [[presetTypeScript, options]],
    "overrides": [{
      "test": fileTest,
      "plugins": [[pluginTransformTypeScript, options]]
    }]
  };
});

module.exports = index;
