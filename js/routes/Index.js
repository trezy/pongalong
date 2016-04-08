import Route from '../Route'
import IndexView from 'views/Index'





export default class Index extends Route {
  show (params) {
    let viewOptions = {}

    this.view = new IndexView

    app.main.show(this.view, {
      replaceElement: true
    })
  }
}
