const withTypescript = require("@zeit/next-typescript");
const webpack = require("webpack");
const path = require("path");
const { parsed: env } = require("dotenv").config();
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = withTypescript({
    distDir: "../build",
    webpack(config, options) {
        config.plugins.push(
            new webpack.EnvironmentPlugin(env),
            new MiniCssExtractPlugin({
                // Options similar to the same options in webpackOptions.output
                // all options are optional
                filename: "static/[name].css",
                chunkFilename: "static/[id].css",
                ignoreOrder: false, // Enable to remove warnings about conflicting order
            }),
        );
        config.module.rules.push(
            {
                test: /\.(png|jpg|gif|svg|ttf|eot|woff)$/i,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 150000,
                            fallback: require.resolve("file-loader"),
                        },
                    },
                ],
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            // you can specify a publicPath here
                            // by default it uses publicPath in webpackOptions.output
                            publicPath: "./public",
                            hmr: process.env.NODE_ENV === "development",
                        },
                    },
                    "css-loader",
                ],
            },
        );
        return config;
    },
});
