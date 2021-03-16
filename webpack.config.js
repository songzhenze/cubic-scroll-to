const { resolve } = require("path");

module.exports = {
    mode:'production',
    // 打包入口
    entry: "./src/index.js",
    output: {
      filename: "index.js",
      path: resolve(__dirname, "./dist"),
      library:'cubicScrollTo',
      libraryTarget:'umd'
    },
    module: {
        rules: [
          // 它会应用到普通的 `.js` 文件
          // 以及 `.vue` 文件中的 `<script>` 块
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: [
                  [
                    "@babel/preset-env",
                    {
                      // 按需加载
                    //   useBuiltIns: "usage",
                      // 指定core-js版本
                      corejs: {
                        version: 3,
                      },
                    },
                  ],
                ],
              },
            },
          },
        ],
      },
}