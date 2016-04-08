import Route from '../Route'
import LeaderboardView from 'views/Leaderboard'





export default class Leaderboard extends Route {
  show (params) {
    let viewOptions = {}

    this.view = new LeaderboardView

    app.main.show(this.view, {
      replaceElement: true
    })
  }
}
