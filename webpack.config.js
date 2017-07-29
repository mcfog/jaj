const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextPlugin({
  filename: 'css/[name].css',
  disable: false,
});

module.exports = {
  entry: [
    './frontend/css/style.scss',
    './frontend/js/main.js',
  ],
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, 'public/assets'),
    publicPath: '/assets',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        loader: extractSass.extract({
          use: [
            {
              loader: 'css-loader',
            }, {
              loader: 'sass-loader',
            }],
          // use style-loader in development
          fallback: 'style-loader',
        }),
      },
      {
        test: /\.(svg|woff|woff2|ttf|eot)(\?.*$|$)/,
        loader: 'file-loader',
        query: {
          name: '/fonts/[name].[ext]',
        },
      },
      // {
      //   test: require.resolve('pace-progress'),
      //   use: 'imports-loader?define=>false',
      // },
    ],
  },
  resolve: {
    modules: [path.resolve(__dirname, 'frontend/js'), 'node_modules'],
  },
  plugins: [
    extractSass,
  ],
};
