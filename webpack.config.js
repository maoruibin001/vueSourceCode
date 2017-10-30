/**
 * Created by lenovo on 2017/8/29.
 */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
// var vueLoaderConfig = require('./src/commons/vue-loader.conf')

function resolve(dir) {
    return path.resolve(__dirname, dir);
}

const config = {
    entry: './src/main.js',
    output: {
        path: resolve('./dist'),
        filename: 'js/[name].js'
    },
    module: {
        loaders: [
            {test: /\.js$/, loader: 'babel-loader', include: resolve('./src')},
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {test: /\.tpl$/, loader: 'string-loader'},
            {test: require.resolve('zepto'), loader: 'exports-loader?window.Zepto!script-loader'}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
        }),
    ],
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            vue : path.join(__dirname,'/node_modules/vue/dist/vue'),
            '@': resolve('src'),
        },
        symlinks: false
    },
};

module.exports = config;