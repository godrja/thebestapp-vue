var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, './bundle/'),
        publicPath: '/bundle/',
        filename: 'main.js',
    },
    performance: {
        hints: false,
    },
    plugins: [new ExtractTextPlugin('[name].css'), new webpack.EnvironmentPlugin(['NODE_ENV'])],
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    exctractCSS: true,
                },
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                minimize: process.env.NODE_ENV === 'production',
                            },
                        },
                    ],
                }),
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(png|jpg|gif|svg|ttf|woff2|woff|eot)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]',
                },
            },
        ],
    },
    resolve: {
        alias: {
            vue$: 'vue/dist/vue',
            src: path.join(__dirname, '/src'),
        },
    },
    devServer: {
        historyApiFallback: true,
        noInfo: true,
    },
    devtool: '#eval-source-map',
};

if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map';
    // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
        }),
    ]);
}
