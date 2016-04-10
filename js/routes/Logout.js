import Route from '../Route'





export default class Logout extends Route {
  show (params) {
    $.ajax({
      error: function () {
        console.log('error')
        console.log(arguments)
      },
      success: () => {
        this.routerChannel.trigger('route', '/')
      },
      url: '/auth/v1/logout/'
    })
  }
}
