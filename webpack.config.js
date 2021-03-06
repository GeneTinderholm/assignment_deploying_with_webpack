var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react'],
            plugins: ["transform-class-properties"]
          },
        },
      },
      {test: /\.css$/, loader: 'style-loader!css-loader'},
      {
        test: /\.(jpg|jpeg|png|svg)$/,
        loader: 'file-loader',
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 4000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack!',
      template: './index.html',
    }),
  ],
};
