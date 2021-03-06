'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
  dev: {

    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      '/api/getDiscList':{
        target:'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg',
        bypass:function (req,res,proxyOptions) { //利用服务器反向代理伪造host和referer解决,也可以在webpack.dev.conf.js文件中用axios转发来进行referer伪造
          req.headers.referer = 'https://c.y.qq.com/'
          req.headers.host = 'c.y.qq.com'
        },
        pathRewrite: {// 重写路径
          '^/api/getDiscList': ''
        }
      },
      '/api/getSongUrl': { //获取歌曲url
        target: 'http://ustbhuangyi.com/music/api/getPurlUrl',
        changeOrigin: true, // 支持跨域
        pathRewrite: {// 重写路径
          '^/api/getSongUrl': ''
        }
      },
      '/api/getLyric': { //获取歌词
        target: 'http://ustbhuangyi.com/music/api/lyric',
        changeOrigin: true, // 支持跨域
        pathRewrite: {// 重写路径
          '^/api/getLyric': ''
        }
      },
      '/api/getCdInfo': { //获取歌单歌曲列表
        target: 'http://ustbhuangyi.com/music/api/getCdInfo',
        changeOrigin: true, // 支持跨域
        pathRewrite: {// 重写路径
          '^/api/getCdInfo': ''
        }
      },
      '/api/search': { //搜索
        target: 'http://ustbhuangyi.com/music/api/search',
        changeOrigin: true, // 支持跨域
        pathRewrite: {// 重写路径
          '^/api/search': ''
        }
      }
    },

    // Various Dev Server settings
    host: '47.100.138.80', // can be overwritten by process.env.HOST
    // host: '192.168.191.1', // can be overwritten by process.env.HOST
    port: 80, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    // Use Eslint Loader?
    // If true, your code will be linted during bundling and
    // linting errors and warnings will be shown in the console.
    useEslint: true,
    // If true, eslint errors and warnings will also be shown in the error overlay
    // in the browser.
    showEslintErrorsInOverlay: false,

    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),
    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: './',

    /**
     * Source Maps
     */

    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
