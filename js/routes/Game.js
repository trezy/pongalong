import Route from '../Route'
import GameView from 'views/Game'





export default class Game extends Route {
  show (params) {
    let viewOptions = {}

    this.view = new GameView

    app.main.show(this.view, {
      replaceElement: true
    })
  }
}
