"use strict";
const merge = require("webpack-merge");
const prodEnv = require("./prod.env");

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_URL:
    '"http://localhost:3000"'
    // '"http://47.100.53.108:8081"'
});
