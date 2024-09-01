const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
    devtool: 'inline-source-map',
    devServer: {
        open: true,
        static: './dist',
        historyApiFallback: true,
        hot: true
    },
    entry: ['babel-polyfill', './src/index.js'],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.scss|\.sass$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    "sass-loader"
                ]
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    presets: ['@babel/preset-env', '@babel/react']
                }
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    mode: 'development',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    resolve: {
        extensions: ['*', '.js'],
        modules: [
            path.resolve(__dirname, 'node_modules'),
        ],
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanAfterEveryBuildPatterns: ['dist']
        }),
        new ESLintPlugin({
            extensions: ['js', 'jsx'],
            exclude: 'node_modules',
            emitWarning: true,
            failOnError: false,  
        }),
        new HtmlWebpackPlugin({
            title: 'Output Management',
            template: 'src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'style.[hash].css'
        }),
    ]
};