import { declare } from '@babel/helper-plugin-utils';
import { parseComponent } from 'vue-template-compiler';
import fs from 'fs';
import pluginTransformTypeScript from '@babel/plugin-transform-typescript';
import presetTypeScript from '@babel/preset-typescript';

var fileTest = (filePath => {
  if (/\.vue$/.test(filePath)) {
    const {
      script
    } = parseComponent(fs.readFileSync(filePath, {
      encoding: "utf8"
    }));
    return !!script.lang && script.lang.toLowerCase() === "ts";
  }

  return false;
});

var index = declare((api, options = {}) => {
  api.assertVersion(7);
  return {
    "presets": [[presetTypeScript, options]],
    "overrides": [{
      "test": fileTest,
      "plugins": [[pluginTransformTypeScript, options]]
    }]
  };
});

export default index;
