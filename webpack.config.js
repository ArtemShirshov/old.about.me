require('dotenv').config();
const webpack = require('webpack');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const path = require('path');

const packageObj = require('./package');
const loaders = require('./webpack/loaders');

const vendorPackageList = Object.keys(packageObj.dependencies);
const webpackDevServer = `webpack-dev-server/client?http://localhost:3000`;

module.exports = {
    mode: 'development',
    stats: {
        colors: true,
        entrypoints: false,
        children: false,
    },
    devtool: 'eval',
    resolve: {
        extensions: ['.js', '.jsx', '.scss'],
        modules: ['node_modules', 'modules', 'css'],
    },
    module: {
        rules: [
            loaders.JSLoader,
            loaders.StyleLoader,
            loaders.URLLoader,
            loaders.ImageLoader,
            loaders.SVGSpriteLoader,
        ],
    },
    optimization: {
        minimizer: [new TerserPlugin({parallel: true})],
        splitChunks: {
            cacheGroups: {
                default: false,
                'bundle.min': false,
                'vendor.bundle': false,
            },
        },
    },
    plugins: [
        new SpriteLoaderPlugin(),
        new MiniCssExtractPlugin({filename: 'styles.css'}),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.EnvironmentPlugin({
            APP_ENV: JSON.stringify(process.env.APP_ENV) || 'development',
        }),
    ],
    entry: {
        'bundle.min': [
            'react-hot-loader/patch',
            webpackDevServer,
            'webpack/hot/only-dev-server',
            './modules/index',
        ],
        'vendor.bundle': vendorPackageList,
    },
    output: {
        path: path.join(__dirname, 'src'),
        chunkFilename: 'chunk.[chunkhash].js',
        filename: '[name].js',
        publicPath: '/src/',
        sourceMapFilename: '[name]-[contenthash].min.js.map',
    },
    node: {
        fs: 'empty',
    },
};
