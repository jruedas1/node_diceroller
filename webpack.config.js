module.exports = {
  entry: {
    app: "./app/javascript/"
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  watch: true,
  devServer: {
    contentBase: './dist',
    port: '3000',
    inline: true,
  },
  module: {
    rules: [
      {test: /\.js$/, use: "eslint-loader", exclude: /node_modules/},
      {test: /\.js$/, exclude: /node_modules/, use: 'babel-loader'},
    ]
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx', '.css'],
    modules: [
           './node_modules',
           './app'
       ]
  },
};