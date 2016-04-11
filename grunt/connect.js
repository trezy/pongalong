'use strict'

let serveStatic = require('serve-static')

let stamplayConfig = require('../stamplay')





module.exports = {
  app: {
    options: {
      middleware: function (connect, options) {
        var middlewares

        middlewares = [
          require('grunt-connect-proxy/lib/utils').proxyRequest,
          require('connect-pushstate')()
        ]

        if (!Array.isArray(options.base)) {
          options.base = [options.base]
        }

        options.base.forEach(function (base) {
          middlewares.push(serveStatic(base))
        })

        return middlewares
      },
      port: 3000
    },

    proxies: [
      {
        context: [
          '/api',
          '/auth'
        ],
        headers: {
//          Authorization: 'Basic ' + new Buffer(stamplayConfig.appId + ':' + stamplayConfig.apiKey).toString('base64')
          host: 'adorable-ping-pong-tracker.stamplayapp.com'
        },
        host: 'adorable-ping-pong-tracker.stamplayapp.com',
        https: true
      }
    ]
  }
}
