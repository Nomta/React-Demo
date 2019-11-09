const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    app: './src/App.js'
  },
  output: {
    filename: '[name].build.js',
    path: path.resolve(__dirname, 'dist'),
    // publicPath: '.',
  },
  module: {
    rules: [{
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }, {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }, {
        test: /\.(jpg|jpeg|svg|png|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader',
        ],
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: "all",
      minSize: 1,
      minChunks: 2
    }
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    // contentBase: './dist',
    historyApiFallback: true
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'With Plugin',
      template: 'src/index.html'
      // chunks: ["index", "common"]
    })
  ]
};