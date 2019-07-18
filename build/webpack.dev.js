const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const htmlWebpackPlugin = new HtmlWebpackPlugin({ template: './index.html' })
const vueLoaderPlugin = new VueLoaderPlugin()

module.exports = {
  devServer: {
    inline: true,
    port: 8888,
    historyApiFallback: true
  },
  resolve: {
    alias: {
      '@': path.join(__dirname, '..', 'src'),
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 4096,
              name: 'fonts/[name].[hash:8].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    vueLoaderPlugin,
    htmlWebpackPlugin
  ]
}