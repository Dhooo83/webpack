const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const copyPlugin = require('copy-webpack-plugin')


module.exports = {
  entry: "./js/main.js",
  output: {
    // path: path.resolve(__dirmore, "dist"),
    // filename: "main.js",
    clean: true
  },
  module: {
    rules: [{
        //정규표현식 ?라는 단어는 있을수도있고 없을수도 있다는 뜻!!
        test: /\.s?css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.js$/,
        use: [
          'babel-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlPlugin({
      template: "./index.html"
    }),
    new copyPlugin({
      patterns: [{
        from: "static"
      }]
    })
  ],

  devServer: {
    host: "localhost"
  }
}
