var pkg = require('./package.json');    
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

console.log('vendor', Object.keys(pkg.dependencies))

module.exports = {
    mode: 'production',
    entry: {
        app: path.resolve(__dirname, 'app/index.jsx'),
        vendor: Object.keys(pkg.dependencies) // 将第三方依赖单独打包
    },
    output: {
        path: __dirname + '/build',
        filename: '[name].[chunkhash:8].js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['react', 'es2015']
                    }
                }]
            },
            {
                test: /\.less$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: [
                                require('autoprefixer')
                            ]
                        }
                    },
                    'less-loader'
                ]
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: [
                                require('autoprefixer')
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.(png|gif|jpg|jpeg|bmp)$/i,
                use: ['url-loader']
            },
            {
                test: /\.(png|woff|woff2|svg|ttf|eot)($|\?)/i,
                use: ['url-loader']
            }
        ]
    },
    plugins: [
        // webpack内置的banner-plugin
        new webpack.BannerPlugin('Copyright by goodluck2018@github.com'),

        // html模板插件
        new HtmlWebpackPlugin({
            template: __dirname + '/app/index.tmpl.html'
        }),

        // 生产环境，编译React时压缩到最小
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            }
        }),

        // 为组件分配ID，分析和优先考虑使用最多的模块，并分配最小的ID
        // 注意，该部分内容在webpack4里已作废，同时该功能在生产模式下默认为true
        // new webpack.optimize.OccurrenceOrderPlugin(),
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false
        //     }
        // }),

        // 分离CSS和JS文件(不再一起打包在bundle.js里)
        new ExtractTextPlugin('/css/[name].[chunkhash:8].css'),

        // 提供公共代码
        // 新版webpack里已作废
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'vendor',
        //     filename: '/js/[name].[chunkhash:8].js'
        // }),

        // 通过全局__DEV__判断是否dev模式
        new webpack.DefinePlugin({
            __DEV__: JSON.stringify(JSON.parse((process.env.NODE_ENV == 'dev' || 'false')))
        })
    ],
    // 提取、压缩公共代码(UglifyjsWebpackPlugin)
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    }
}