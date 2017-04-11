var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: "./js/index.jsx",
  output: {
    path: path.join(__dirname, 'dist'), 
    filename: "all.min.js"
  },
  watch: true,
  devServer: {
    contentBase: path.join(__dirname, '/dist'), 
    stats: 'errors-only',
    inline: true,
    hot: true,
    historyApiFallback: true,
    port: 8888
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'eslint'
      }
    ],
    loaders: [
       {
        test: /\.jsx$/,
        include: path.join(__dirname, 'src'),
        // loader: 'eslint-loader',
        loader: 'babel',
        enforce: 'pre'
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.(json|png|jpg|gif|mp4|ogg|eot|svg|ttf|woff|woff2)$/,
        loaders: ['file'],
        query: { publicPath: this.fileLoaderBaseUrl }
      }
    ]
  },
  plugins: []
};
