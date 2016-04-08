import Backbone from 'backbone'
import 'backbone.base-router'
import 'backbone.intercept'
import 'backbone.radio'
import 'backbone.marionette'
import './shims/marionette.replaceElement'
import './shims/backbone.radio'

import App from './App'




window.app = new App

app.start()
