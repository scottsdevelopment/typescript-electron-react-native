const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: "development",
  entry: ['./src/index.electron.tsx'],
  output: {
    filename: 'bundle.js'
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
          'file-loader'
        ]
      },
      {
        test: /\.(html)$/,
        use: [
          'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false',
        ]
      }
    ]
  },
  plugins: [
    new CopyPlugin([
      { from: 'src/images', to: './images' },
    //  { from: 'src/index.html', to: './' }
    ])
  ],
  resolve: {
    alias: {
      'react-native$': 'react-native-web'
    },
    extensions: [ '.tsx', '.ts', '.js', '.html' ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'http://localhost:8080/'
  }
};