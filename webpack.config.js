
module.exports = {
  entry: './src/index.js',

  output: {
    // path: 'build',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loaders: 'style-loader!css-loader'
      },
      {
        test: /\.sass/,
        loaders: ['style-loader','css-loader','sass-loader']
      }
    ]
  }
}
