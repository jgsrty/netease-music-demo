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
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: true, //注释css热更新生效
    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {
      sass: {
        additionalData: `@import "./src/styles/index.scss";`,
      },
    },
    // 启用 CSS modules for all css / pre-processor files.
    requireModuleExtension: true, //module 提示在新版本中已弃用
  },
};
