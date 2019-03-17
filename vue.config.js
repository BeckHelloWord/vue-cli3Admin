let path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  baseUrl: "/",
  outputDir: "dist",
  lintOnSave: true,
  runtimeCompiler: true, //关键点在这
  // 调整内部的 webpack 配置。
  // 查阅 https://github.com/vuejs/vue-doc-zh-cn/vue-cli/webpack.md
  chainWebpack: config => {
    config.resolve.alias.set("@", resolve("src"));
  },
  configureWebpack: () => {},
  // 配置 webpack-dev-server 行为。
  devServer: {
    open: process.platform === "win32",
    host: "0.0.0.0",
    port: 8080,
    https: false,
    hotOnly: true,
    // 查阅 https://github.com/vuejs/vue-doc-zh-cn/vue-cli/cli-service.md#配置代理
    proxy: null, // string | Object
    before: app => {}
  }
};
