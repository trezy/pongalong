import IndexRoute from 'routes/Index'
import GameRoute from 'routes/Game'
import LeaderboardRoute from 'routes/Leaderboard'





export default {
  routes: {
    'game(/)': new GameRoute,
    'leaderboard(/)': new LeaderboardRoute,
    '*notfound': new IndexRoute
  }
}
