import Backbone from 'backbone'

import template from 'templates/Register.hbs'





export default class Register extends Backbone.Marionette.ItemView {
  constructor (options) {
    options = _.extend({
      className: 'application-main',
      events: {
        'submit form': 'onSubmit'
      },
      tagName: 'main',
      template: template
    }, options || {})

    super(options)

    this.ui = {
      password: '#password'
    }

    this.bindings = {
      '#email': 'email'
    }
  }

  onRender () {
    this.stickit()
  }

  onSubmit (event) {
    this.model.register(this.ui.password.val())
  }
}
