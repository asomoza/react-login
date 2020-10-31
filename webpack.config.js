const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
        app: "./src/index.js"
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel-loader",
                options: { presets: ["@babel/env"] }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ],
    },
    resolve: {
        extensions: ["*", ".js", ".jsx"],
        alias: { 'react-dom': '@hot-loader/react-dom'  }
    },
    output: {
        path: path.resolve(__dirname, "dist/"),
        publicPath: "/dist/",
        filename: "[name].bundle.js",
        chunkFilename: '[name].bundle.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, "public/"),
        port: 9000,
        publicPath: "http://localhost:9000/dist/",
        hotOnly: true,
        historyApiFallback: true
    },
    watchOptions: {
        ignored: ["node_modules/**"],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
        new HtmlWebpackPlugin({
            title: 'React Auth Flow',
            template: 'public/index.html',
            devServer: 'http://localhost:9000'
        })
    ]
};