import * as compiler from "vue-template-compiler";
import fs from "fs";

export default filePath => {

  if(/\.vue$/.test(filePath)) {
    const { script } = compiler.parseComponent(fs.readFileSync(filePath, {encoding: "utf8"}));
    return !!script.lang && script.lang.toLowerCase() === "ts";
  }

  return false;

};
