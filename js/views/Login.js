import Backbone from 'backbone'

import template from 'templates/Login.hbs'





export default class Login extends Backbone.Marionette.ItemView {
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
      password: '#password',
      submitButton: 'button[type=submit]'
    }

    this.bindings = {
      '#email': 'email',
      '#password': 'password'
    }

    this.model.on('change:loggedIn', () => {
      console.log(this.model.attributes)
    })
  }

  onRender () {
    this.stickit()
  }

  onSubmit (event) {
    this.ui.submitButton.prop('disabled', 'disabled')
    this.model.login(this.ui.password.val())
  }
}
