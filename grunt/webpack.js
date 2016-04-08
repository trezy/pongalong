'use strict'

let BowerWebpackPlugin = require('bower-webpack-plugin')
let path = require('path')
let Webpack = require('webpack')





module.exports = {
  app: {
    devtool: 'source-map',

    entry: './js/bootstrap.js',

    output: {
      filename: 'app.js',
      sourceMapFilename: 'app.js.map'
    },

    module: {
      loaders: [
        {
          test: /\.hbs$/,
          loader: 'handlebars'
        },
        {
          test: /\.json$/,
          loader: 'json'
        },
        {
          exclude: /(node_modules|bower_components)/,
          loader: 'babel',
          test: /\.js$/,
          query: {
            presets: ['es2015']
          }
        }
      ]
    },

    plugins: [
      new BowerWebpackPlugin,
      new Webpack.ProvidePlugin({
        $: 'jquery',
        _: 'underscore'
      })
    ],

    resolve: {
      alias: {
        collections: path.resolve(__dirname + '/../js/collections'),
        models: path.resolve(__dirname + '/../js/models'),
        routes: path.resolve(__dirname + '/../js/routes'),
        templates: path.resolve(__dirname + '/../templates'),
        views: path.resolve(__dirname + '/../js/views')
      }
    },

    stats: {
      colors: true,
      reasons: true
    }
  }
}