const path = require('path');


module.exports = {

  // mode
  mode: ' development',

  // for source map debugginf
  devtool: 'eval-source-map',

  // entry filss
  entry: {
    index: './src/ts/index.ts',
    function: './src/ts/function.ts'
  },

  // output files
  output:{
    filename: '[name].js',
    path: path.resolve(__dirname, 'build')
  },

  // proccess files
  module:{
    rules:[
      // ts loader
      {
        test: /\.(ts)$/,
        exclude: /node_modules/,
        use: 'ts-loader',
        // include: path.resolve(__dirname, './src/ts')
      },
      // css loader
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      // sass loader
      {
        test: /\.s[ac]ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      // file loader - font
      {
        test: /\.(woff|woff2|ttf|eot|otf)$/,
        loader: 'file-loader',
        options: {
          name: '/fonts/[name].[ext]'
        }
      },
      // file-loader img
      {
        test: /\.(jpg|jpeg|png|gif|svg|JPG)$/,
        loader: 'file-loader',
        options: {
          name: '/images/[name].[ext]'
        }
      },
    ]
  },

  // support import export module
  resolve:{
    extensions: ['.ts', '.js']
  },



}

