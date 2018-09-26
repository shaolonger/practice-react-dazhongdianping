var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'app/index.jsx'),
    output: {
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx'] // 作用:在import时免写拓展名
    },
    module: {
        rules: [
            {
                exclude: /node_modules/,
                test: /\.(js|jsx)$/,
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
        // html模板插件
        new HtmlWebpackPlugin({
            template: __dirname + '/app/index.tmpl.html'
        }),
        // 启动模块热加载插件
        new webpack.HotModuleReplacementPlugin(),
        // 打开浏览器
        new OpenBrowserPlugin({
            url: 'http://localhost:8080'
        }),
        // 通过全局__DEV__判断是否dev模式
        new webpack.DefinePlugin({
            __DEV__: JSON.stringify(JSON.parse((process.env.NODE_ENV == 'dev' || 'false')))
        })
    ],
    devServer: {
        historyApiFallback: true, // 所有跳转指向index.html(开发单页非常有用)
        inline: true, // 实时刷新(默认值为true)
        hot: true // 模块热加载(使用HotModuleReplacementPlugin)
    }
}
