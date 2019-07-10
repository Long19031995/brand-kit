const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const htmlWebpackPlugin = new HtmlWebpackPlugin({ template: './index.html' })
const vueLoaderPlugin = new VueLoaderPlugin()
const optimizeCssAssetsPlugin = new OptimizeCssAssetsPlugin({
  assetNameRegExp: /\.css$/g,
  cssProcessor: require('cssnano'),
  cssProcessorPluginOptions: {
    preset: ['default', { discardComments: { removeAll: true } }],
  },
  canPrint: true
})

const listRuleCss = []
const listPluginCss = []
require('./filenames.js').forEach((filename) => {
  const extractScss = new ExtractTextPlugin(`../brand-kit/css/${filename}.css`)

  listRuleCss.push({
    test: new RegExp(`${filename}.scss`, 'g'),
    use: extractScss.extract({ fallback: 'style-loader', use: 'css-loader!sass-loader' })
  })

  listPluginCss.push(extractScss)
})

module.exports = {
  devServer: {
    inline: true,
    port: 8080
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      ...listRuleCss
    ]
  },
  plugins: [
    vueLoaderPlugin,
    htmlWebpackPlugin,
    optimizeCssAssetsPlugin,
    ...listPluginCss
  ],
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src')
    }
  }
}