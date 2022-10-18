const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const minicssextractplugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: ['./src/main.ts','./css/main.css','./css/iconfont.css'],
    output: {
        path: path.resolve(__dirname,"./dist"),
        filename: 'bundle.js'
    },
    resolve: {
        // 支持的脚本后缀，可以让我们导入时省略
        extensions: [".ts", ".js"],
      },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                    }
                }
            },

            {
                test: /\.ts$/,
                use: ["ts-loader"],
            },

            {
                test: /\.css$/,
                use: [
                    {
                        loader: minicssextractplugin.loader,
                    },
                    'css-loader',
                ],
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new minicssextractplugin({
            filename: "./[name].[contenthash].css",
        }),
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./index.html",
        }),
    ]
}