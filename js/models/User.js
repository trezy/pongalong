import BaseModel from 'models/Base'





export default class User extends BaseModel {

  /******************************************************************************\
    Private Methods
  \******************************************************************************/

  _successfulLogin (data, status, xhr) {
    console.log('_successfulLogin', this)
    this.set('loggedIn', true)
    console.log(data)
  }





  /******************************************************************************\
    Public Methods
  \******************************************************************************/

  constructor (options) {
    options = _.extend({
      loggedIn: false,
      email: '',
      password: ''
    }, options)

    super(options)

    this.urlRoot = '/api/user/v1/users/'
  }

  login (password) {
    $.ajax({
      data: {
        email: this.get('email'),
        password: password
      },
      error: (data, status, xhr) => {
        console.log(status, data)
      },
      method: 'POST',
      success: this._successfulLogin.bind(this),
      url: '/auth/v1/local/login/'
    })
  }

  register (password) {
    $.ajax({
      data: {
        email: this.get('email'),
        password: this.get('password')
      },
      error: (data, status, xhr) => {
        console.log(status, data)
      },
      method: 'POST',
      success: (data, status, xhr) => {
        console.log(status, data)
      },
      url: this.url()
    })
  }
}
