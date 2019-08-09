const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = (env) => {
    if (!env) env = {};

    const isDevBuild = !env.prod;
    const plugins = [new MiniCssExtractPlugin()];

    const config = {
        entry: {
            "app": `./boot.tsx`,
        },

        // stats: {
        // 	colors: true,
        // 	modules: true,
        // 	reasons: true,
        // 	errorDetails: true
        // },

        mode: isDevBuild ? 'development' : 'production',

        performance: {
            maxEntrypointSize: 1024 * 1024 * 5, 	// Bytes
            maxAssetSize: 1024 * 1024 * 5, 			// Bytes
        },

        optimization: {
            minimizer: [
                new UglifyJsPlugin({
                    cache: true,
                    parallel: true,
                    sourceMap: true
                }),
                new OptimizeCSSAssetsPlugin({})
            ]
        },

        output: {
            filename: '[name].js',
            path: path.resolve(__dirname, '../wwwroot/dist')
        },

        plugins: plugins,

        module: {
            rules: [
                { test: /\.jsx?$/, use: ['babel-loader'], exclude: /node_modules/ },
                { test: /\.tsx?$/, use: ['babel-loader', 'awesome-typescript-loader?silent=true'], exclude: /node_modules/ },
                {
                    test: /\.scss$/,
                    use: [
                        isDevBuild ? 'style-loader' : MiniCssExtractPlugin.loader,
                        'css-loader',
                        'sass-loader',
                    ],
                }
            ]
        },

        resolve: {
            extensions: [".ts", ".tsx", ".js", ".jsx"],

            alias: {
                CheckboxWrapper: path.join(__dirname, './Dataset/components/common/CheckboxWrapper.jsx')
            }
        },
    }

    if (isDevBuild) {
        plugins.push(new webpack.HotModuleReplacementPlugin());
        config.devtool = 'inline-source-map';
        config.devServer = {
            contentBase: '../wwwroot/dist',
            port: 8888,
            host: 'localhost',
            hot: true,
        };
    }

    return config;
};
