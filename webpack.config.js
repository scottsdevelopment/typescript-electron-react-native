const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const WriteFilePlugin = require('write-file-webpack-plugin');
const exec = require('child_process').exec;

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
    // contentBase: path.resolve(__dirname, 'dist'),
    // publicPath: 'http://localhost:8080',
    // inline: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'ts-loader',
        include: [
  //        path.resolve(__dirname, 'node_modules/react-navigation'),
            path.resolve(__dirname, 'node_modules/react-router-native')
        ],
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
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
    new webpack.HotModuleReplacementPlugin(),
    new WriteFilePlugin(),
    new CopyPlugin([
      { from: 'src/index.html', to: './' }
    ]),
    {
      apply: (compiler) => {
        compiler.hooks.entryOption.tap('CompileTsc', (compilation) => {
          exec('tsc', (err, stdout, stderr) => {
            if (err) process.stderr.write(err);
            if (stdout) process.stdout.write(stdout);
            if (stderr) process.stderr.write(stderr);
          });
        });
      }
    }
  ],
  watchOptions: {
    ignored: ['./dist/**/*.hot-update.json','dist/**/*.d.ts', 'node_modules']
  },
  // externals: ['pg', 'sqlite3', 'tedious', 'pg-hstore'],
  resolve: {
    alias: {
      'react-native$': 'react-native-web'
    },
    extensions: [ '.tsx', '.ts', '.js', '.html' ]
  },
  externals: ['sqlite3']
};