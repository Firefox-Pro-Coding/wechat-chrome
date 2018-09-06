var path = require('path')
var fs = require('fs')
var utils = require('./utils')
var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')
var MpvuePlugin = require('webpack-mpvue-asset-plugin')
var glob = require('glob')
var CopyWebpackPlugin = require('copy-webpack-plugin')
var relative = require('relative')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

function getEntry (rootSrc) {
  var map = {};
  glob.sync(rootSrc + '/pages/**/main.js')
  .forEach(file => {
    var key = relative(rootSrc, file).replace('.js', '');
    map[key] = file;
  })
  glob.sync(rootSrc + '/pages/**/main.ts')
  .forEach(file => {
    var key = relative(rootSrc, file).replace('.ts', '');
    map[key] = file;
  })
   return map;
}

const appEntry = { app: resolve('./src/main.ts') }
const pagesEntry = getEntry(resolve('./src'), 'pages/**/main.js')
// const tsPagesEntry = getEntry(resolve('./src'), 'pages/**/main.ts')
const entry = Object.assign({}, appEntry, pagesEntry)

module.exports = {
  // 如果要自定义生成的 dist 目录里面的文件路径，
  // 可以将 entry 写成 {'toPath': 'fromPath'} 的形式，
  // toPath 为相对于 dist 的路径, 例：index/demo，则生成的文件地址为 dist/index/demo.js
  entry,
  target: require('mpvue-webpack-target'),
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.ts', '.d.ts', '.js', '.json', '.vue'],
    alias: {
      'vue': 'mpvue',
      '@': resolve('src'),
      '~': resolve('src'),
      'flyio': 'flyio/dist/npm/wx',
      'wx': resolve('src/utils/wx'),
    },
    symlinks: false,
    aliasFields: ['mpvue', 'weapp', 'browser'],
    mainFields: ['browser', 'module', 'main']
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [resolve('src'), resolve('test')],
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.vue$/,
        loader: 'mpvue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        include: [resolve('src'), resolve('test')],
        use: [
          'babel-loader',
          {
            loader: 'mpvue-loader',
            options: {
              checkMPEntry: true
            }
          },
        ]
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          {
            loader: 'mpvue-loader',
            options: {
              checkMPEntry: true
            }
          },
          'ts-loader',
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          // limit: 10000,
          name: utils.assetsPath('fonts/[name].[ext]')
        }
      }
    ]
  },
  // optimization: {
  //   splitChunks: {
  //     cacheGroups: {
  //       vendor: {
  //         name: 'vendor',
  //         test: /[\\/]node_modules[\\/]/,
  //       },
  //       manifest: {
  //         name: 'manifest',
  //         chunks: ['vendor'],
  //       },
  //     },
  //   },
  // },
  plugins: [
    new MpvuePlugin(),
    new CopyWebpackPlugin([{
      from: '**/*.json',
      to: ''
    }], {
      context: 'src/'
    }),
    new CopyWebpackPlugin([ // 处理 main.json 里面引用的图片，不要放代码中引用的图片
      {
        from: path.resolve(__dirname, '../static'),
        to: path.resolve(__dirname, '../dist/static'),
        ignore: ['.*']
      }
    ]),
  ],
}
