import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";
import resolve from "rollup-plugin-node-resolve";
import url from "rollup-plugin-url";
import builtins from "rollup-plugin-node-builtins";
import nodeGlobals from "rollup-plugin-node-globals";
import json from "rollup-plugin-json";

import pkg from "./package.json";

const plugins = [
  external(),
  url(),
  json(),
  babel({
    runtimeHelpers: true,
    exclude: "node_modules/**",
    extensions: [".js"]
  }),
  resolve(),
  commonjs(),
  builtins(),
  nodeGlobals()
];

export default [
  {
    input: "src/lib/theme.js",
    output: [
      {
        file: pkg.main,
        format: "cjs",
        exports: "named"
      }
    ],
    plugins
  }
];
