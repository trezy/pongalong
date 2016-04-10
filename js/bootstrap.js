import Backbone from 'backbone'
import 'backbone.base-router'
import 'backbone.hoard'
import 'backbone.intercept'
import 'backbone.marionette'
import 'backbone.radio'
import 'backbone.stickit'
import './shims/marionette.replaceElement'
import './shims/backbone.radio'

import App from './App'




Backbone.Hoard.backend = localStorage

window.app = new App
app.start()
