var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');

var config = {
  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080',
    path.resolve(__dirname, 'app/main.js')
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015'],
        cacheDirectory: true
      }
    }, {
      test: /\.css$/,
      loader: 'style!css'
    }]
  },
  plugins: [new htmlWebpackPlugin({
    template:'app/index.html'
  })]
};

module.exports = config;
