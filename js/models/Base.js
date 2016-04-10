import Backbone from 'backbone'





export default class Base extends Backbone.Model {
  constructor (options) {
    super(options)

    this.sync = new Backbone.Hoard.Control().getModelSync()
  }
}
