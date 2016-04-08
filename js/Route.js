import Backbone from 'backbone'





export default class Route extends Backbone.Marionette.Object {
  show () {
    app.main.show(this.view, {
      replaceElement: true
    })
  }

  onError (error) {
    console.error(error)
  }

  constructor (options) {
    super(options || {})

    this.appChannel = Backbone.Radio.channel('application')
    this.routerChannel = Backbone.Radio.channel('router')
  }
}
