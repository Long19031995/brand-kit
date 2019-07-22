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
  entry: [...getListEntry('./src/assets/css'), ...getListEntry('./src/assets/js')],
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|webp|svg)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 0,
              name: '../brand-kit/img/[name].[ext]'
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
              name: '../brand-kit/fonts/[name].[ext]'
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
              name: '../brand-kit/css/[name].[ext]'
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
      },
      {
        test: /\.js$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '../brand-kit/js/[name].[ext]'
            }
          },
          'babel-loader',
        ],
        exclude: [/node_modules/]
      }
    ]
  },
  plugins: [
    new OptimizeCssAssetsPlugin()
  ]
}