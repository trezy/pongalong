import Route from '../Route'
import RegisterView from 'views/Register'





export default class Register extends Route {
  show (params) {
    let viewOptions = {}

    this.view = new RegisterView({
      model: app.currentUser
    })

    app.main.show(this.view, {
      replaceElement: true
    })
  }
}
