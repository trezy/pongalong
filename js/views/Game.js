import Backbone from 'backbone'

import template from 'templates/Game.hbs'





export default class Game extends Backbone.Marionette.ItemView {
  constructor (options) {
    options = _.extend({
      className: 'application-main',
      tagName: 'main',
      template: template
    }, options || {})

    super(options)
  }
}
