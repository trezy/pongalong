'use strict'

let serveStatic = require('serve-static')
let pushState = require('connect-pushstate')

module.exports = {
  app: {
    options: {
      base: '.',
      middleware: function (connect, options) {
        var directory, middlewares

        middlewares = []

        middlewares.push(pushState())

        if (!Array.isArray(options.base)) {
          options.base = [options.base]
        }

        options.base.forEach(function (base) {
          middlewares.push(serveStatic(base))
        })

        return middlewares
      },
      port: 3000
    }
  }
}
