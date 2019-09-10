const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: "development",
  entry: {
    electron: './src/index.electron.tsx',
    android: './src/index.android.tsx',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  devServer: {
    hot: true,
    contentBase: './dist',
    publicPath: 'http://localhost:8080',
    inline: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader?name=images/[name].[ext]',
        ]
      }
    ]
  },
  plugins: [
    new CopyPlugin([
      { from: 'src/index.html', to: './' }
    ])
  ],
  resolve: {
    alias: {
      'react-native$': 'react-native-web'
    },
    extensions: [ '.tsx', '.ts', '.js', '.html' ]
  }
};