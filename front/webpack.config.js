const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const publicPath = process.env.SERVER_URL || 'http://localhost:3000/';

module.exports = (env, argv) => ({
    output: {
        publicPath,
        filename: '[name].[contenthash].bundle.js',
    },

    devtool: env.mode === 'development' ? 'eval-source-map' : 'eval-source-map',

    resolve: {
        extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
    },

    devServer: {
        port: 3000,
        historyApiFallback: true,
    },

    module: {
        rules: [
            {
                test: /\.m?js/,
                type: "javascript/auto",
                resolve: {
                    fullySpecified: false,
                },
            },
            {
                test: /\.(s[ac]ss)$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {sourceMap: env.mode === 'development'}
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: env.mode === 'development',
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {sourceMap: env.mode === 'development'}
                    }
                ]
            },
            {
                test: /\.(css)$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {sourceMap: env.mode === 'development'}
                    }
                ]
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ],
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.[contenthash].bundle.css',
        }),
        new FaviconsWebpackPlugin({
            logo: path.resolve(__dirname, './src/img/logo.svg'),
            prefix: '',
            publicPath: './',
            outputPath: './',
            inject: true,
        }),
        new HtmlWebPackPlugin({
            template: path.resolve(__dirname, './src/index.html'),
            minify: false,
            inject: 'head',
            publicPath: "/"
        }),
    ],
})