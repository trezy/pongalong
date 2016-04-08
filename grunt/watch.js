module.exports = {
  options: {
    spawn: true,
    interrupt: true
  },

  js: {
    files: [
      'config.json',
      'js/**/*.js',
      'templates/**/*.hbs'
    ],
    tasks: [
      'buildJS'
    ]
  },

  css: {
    files: [
      'scss/**/*.scss'
    ],
    tasks: [
      'buildCSS'
    ]
  }
}
