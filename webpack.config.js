var path = require('path');
var webpack = require("webpack");

module.exports = {
  entry: './popup.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery"
    })
  ],
  module: {
    loaders: [
        { test: /\.css$/, 
          loader: "style-loader!css-loader" 
        }
    ]
  }
};