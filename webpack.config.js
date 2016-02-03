var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: "./src/js/index.js",
    output: {
        path: 'www',
        filename: "js/bundle.js"
    },
    plugins: [
        new ExtractTextPlugin("css/style.css", {
            allChunks: true
        })
    ],
    module: {
        loaders: [{
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract(
                'css-loader?sourceMap!sass-loader?outputStyle=expanded&sourceMap=true&sourceMapContents=true' // loaders to preprocess CSS
            )
        }, {
            test: /\.js?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel', // 'babel-loader' is also a legal name to reference
            query: {
                presets: ['react', 'es2015']
            }
        }]
    }
};
