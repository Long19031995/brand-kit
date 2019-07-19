const path = require('path')
const fs = require('fs')

const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

function getListEntry (folder, listEntry = []){
  fs.readdirSync(folder).forEach((file) => {
    const path = `${folder}/${file}`
    fs.statSync(path).isDirectory() ? getListEntry(path) : listEntry.push(path)
  })

  return listEntry
}

module.exports = {
  entry: getListEntry('./src/assets/css'),
  output: {
    path: path.join(__dirname, '../brand-kit'),
    filename: 'main.js',
    publicPath: '/'
  },
  stats: {
    all: false
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|webp)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 0,
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
              limit: 0,
              name: '../brand-kit/fonts/[name].[hash:8].[ext]'
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '../brand-kit/css/[name].css',
            }
          },
          'extract-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ],
      }
    ]
  },
  plugins: [
    new OptimizeCssAssetsPlugin()
  ]
}