import Backbone from 'backbone'

import template from 'templates/Leaderboard.hbs'





export default class Leaderboard extends Backbone.Marionette.ItemView {
  constructor (options) {
    options = _.extend({
      className: 'application-main',
      tagName: 'main',
      template: template
    }, options || {})

    super(options)
  }
}
