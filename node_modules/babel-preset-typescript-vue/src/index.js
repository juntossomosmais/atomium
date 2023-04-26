import { declare } from "@babel/helper-plugin-utils";
import fileTest from "./fileTest";
import pluginTransformTypeScript from "@babel/plugin-transform-typescript";
import presetTypeScript from "@babel/preset-typescript";

export default declare(
  (api, options = {}) => {

    api.assertVersion(7);

    return {
      "presets": [
        [presetTypeScript, options]
      ],
      "overrides": [{
        "test": fileTest,
        "plugins": [
          [pluginTransformTypeScript, options]
        ]
      }]
    };
  }
);
