const config = require("./webpack.config")
const CopyWebpackPlugin = require("copy-webpack-plugin")

config.mode = "production"
config.devtool = false
config.plugins = [
    ...config.plugins,
    new CopyWebpackPlugin({
        patterns: [{ from: "css",to: '.' }],
    }),
]

module.exports = config;