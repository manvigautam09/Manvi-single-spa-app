const HtmlWebpackPlugin = require("html-webpack-plugin");
const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa");
const path = require("path");

module.exports = (webpackConfigEnv = {}, argv) => {
  const orgName = "dashboard";
  const defaultConfig = singleSpaDefaults({
    orgName,
    projectName: "root-config",
    webpackConfigEnv,
    argv,
    disableHtmlGeneration: true,
  });

  return merge(defaultConfig, {
    plugins: [
      new HtmlWebpackPlugin({
        inject: false,
        template: "src/index.ejs",
        templateParameters: {
          isLocal: webpackConfigEnv.isLocal === "true",
          orgName,
          ENABLE_DEV_TOOLS: webpackConfigEnv.isDevelopment === "true",
        },
        filename: "index.html",
        minify: false,
      }),
    ],
    externals: ["single-spa", /^@dashboard\/.+$/],
  });
};
