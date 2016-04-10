import IndexRoute from 'routes/Index'
import GameRoute from 'routes/Game'
import LeaderboardRoute from 'routes/Leaderboard'
import LoginRoute from 'routes/Login'
import RegisterRoute from 'routes/Register'





export default {
  routes: {
    'game(/)': new GameRoute,
    'leaderboard(/)': new LeaderboardRoute,
    'login(/)': new LoginRoute,
    'register(/)': new RegisterRoute,
    '*notfound': new IndexRoute
  }
}
