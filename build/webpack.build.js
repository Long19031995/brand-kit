const path = require('path')
const fs = require('fs')

const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

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

fs.readdirSync('./src/assets/css').forEach((file) => {
  const filename = file.replace(/.scss/g, '')
  const extractScss = new ExtractTextPlugin(`../brand-kit/css/${filename}.css`)

  listRuleCss.push({
    test: new RegExp(`${filename}.scss`, 'g'),
    use: extractScss.extract({ fallback: 'style-loader', use: ['css-loader', 'sass-loader'] })
  })

  listPluginCss.push(extractScss)
})

module.exports = {
  entry: {
    app: path.join(__dirname, '../build/index.js')
  },
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|webp)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 4096,
              name: '../brand-kit/img/[name].[hash:8].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 4096,
              name: '../brand-kit/fonts/[name].[hash:8].[ext]'
            }
          }
        ]
      },
      ...listRuleCss
    ]
  },
  plugins: [
    optimizeCssAssetsPlugin,
    ...listPluginCss
  ]
}