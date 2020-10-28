const path = require('path');
const webpack = require('webpack');


module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    hotOnly: true,
    port: 9000,
    contentBase: './dist'
  },
  module: {
    rules: [
      {
        test: /\.m?jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'static/[name][hash].bundle.js'
  },
  plugins: [
    new webpack.ProgressPlugin()
  ]
}
