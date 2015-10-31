module.exports = {
  entry: "./main.js",
  output: {
    path: __dirname,
    filename: "bundle.js",
    publicPath: '/static/'
  },
  module: {
    loaders: [
    { test: /\.js$/, loader: "babel" }
    ]
  }
};