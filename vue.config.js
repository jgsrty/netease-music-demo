const path = require("path");
module.exports = {
  productionSourceMap: false,
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
        style: path.resolve(__dirname, "src/style"),
      },
    },
  },
};
