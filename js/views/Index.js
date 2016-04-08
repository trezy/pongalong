import Backbone from 'backbone'

import template from 'templates/Index.hbs'





export default class Index extends Backbone.Marionette.LayoutView {
  constructor (options) {
    options = _.extend({
      className: 'application-main',
      tagName: 'main',
      template: template
    }, options || {})

    super(options)
  }
}
