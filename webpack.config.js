const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  devtool: 'nosources-source-map',
  // 入口文件
  entry: './src/index.js',
  // externals: ['lodash'], // 忽略 lodash 的打包 (该选项常用于库的开发)
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'library.js',
    clean: true,
    library: {
      name: 'library', // library name
      type: 'module', // umd, var, this, commonjs, commonjs2, amd, system,module
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
};
