const path = require('path');
const webpack = require('webpack');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const prod = process.env.NODE_ENV === 'production';

module.exports = {
    entry: [
        './src/main.ts',
        './src/main.scss'
    ],
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: prod ? '[name].[hash:8].js' : '[name].js',
        chunkFilename: '[name].[id].js',
        publicPath: prod ? '' : 'dist/'
    },
    module: {
        rules: [
            {test: /\.vue$/, loader: 'vue-loader', options: {extractCSS: true}},
            {test: /\.tsx?$/, loader: 'ts-loader', exclude: /node_modules/, options: {appendTsSuffixTo: [/\.vue$/]}},
            {
                test: /\.scss$/,
                use: prod?ExtractTextPlugin.extract(['css-loader',{loader: 'postcss-loader',options: {    plugins: (loader) => [
                    require('autoprefixer')({
                        browsers: ['last 2 versions', 'safari >= 7','ie>=8','chrome>=30','opera>=10']
                    })
                ]}},'sass-loader']):ExtractTextPlugin.extract(['css-loader','sass-loader'])
            },{
                test: /\.css$/,
                    use: prod?ExtractTextPlugin.extract(['css-loader',{loader: 'postcss-loader',options: {    plugins: (loader) => [
                    require('autoprefixer')({
                        browsers: ['last 2 versions', 'safari >= 7','ie>=8','chrome>=30','opera>=10']
                    })
                ]}}]) : ExtractTextPlugin.extract(['css-loader'])
            },{
                test: /\.(png|jpg|gif|svg|)$/,
                loader: 'file-loader',
                options: {
                    name: 'assets/icons/[name].[ext]?[hash]'
                }
            },
            {test: /\.html$/, use: ['vue-template-loader']}
        ]
    },
    resolve: {
        extensions: ['.ts', '.js', '.vue', '.json', 'scss','css'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    devServer: {
        historyApiFallback: true,
        noInfo: true
    },
    performance: {
        hints: false
    },
    devtool: '#eval-source-map',
        plugins:[
            new ExtractTextPlugin({filename:  prod ? '[name].[hash:8].css' : '[name].css'}),
            new CleanWebpackPlugin(['dist/'], { root: path.resolve(__dirname), verbose: true, dry: false})
]

};

if (prod) {
    module.exports.devtool = '#source-map';
    module.exports.plugins = (module.exports.plugins || []).concat([
        new SWPrecacheWebpackPlugin({
            cacheId: 'my-vue-app',
            filename: 'service-worker.js',
            staticFileGlobs: [
                'dist/**',
                'src/manifest.json'
            ],
            runtimeCaching: [
                {
                    handler: "fastest",
                     urlPattern: /^https:\/\/(www\.)?localhost$/
                }],
            minify: true,
            stripPrefixMulti: {'dist/':'','src/':''}
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            title:'vueApp',
            template: './src/index.htm',
            minify: {
                collapseWhitespace: true,
                preserveLineBreaks: false,
                removeComments: true,
                removeAttributeQuotes: true
            }
        }),
        new webpack.DefinePlugin({'process.env': {NODE_ENV: '"production"'}}),
        new webpack.optimize.UglifyJsPlugin({sourceMap: true, compress: {warnings: false}}),
        new webpack.LoaderOptionsPlugin({minimize: true})
    ])
}

