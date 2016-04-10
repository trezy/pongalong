import Route from '../Route'
import LoginView from 'views/Login'





export default class Login extends Route {
  show (params) {
    let viewOptions = {}

    $.ajax({
      error: function () {
        console.log('error')
        console.log(arguments)
      },
      success: function () {
        console.log('success')
        console.log(arguments)
      },
      url: '/api/user/v1/getstatus/'
    })

    this.view = new LoginView({
      model: app.currentUser
    })

    app.main.show(this.view, {
      replaceElement: true
    })
  }
}
