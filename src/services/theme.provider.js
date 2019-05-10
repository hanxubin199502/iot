'use strict'
import cookieProvider from './cookie.provider.js'
/* eslint-disable */
import utils from './utils.js'

const themeProvider = {}

themeProvider.theme = 'stey-default'
themeProvider.themeArray = ['stey-default', 'stey-blue', 'stey-gray']
themeProvider.themeCookieKey = '$theme'

themeProvider.load = function () {
  let cookieTheme = cookieProvider.get(this.themeCookieKey)
  if (cookieTheme) {
    this.theme = cookieTheme
  } else {
    this.theme = 'stey-default'
  }
}
themeProvider.load() // [ext] like constructor function

themeProvider.set = function (newTheme) {
  if (newTheme) {
    newTheme = newTheme.trim()
    if (this.themeArray.contain(newTheme)) {
      this.theme = newTheme
      cookieProvider.set(this.themeCookieKey, newTheme, 365)
      document.location.reload() // [ext] only reload then theme module works, an other is using css variable , I think this is not a best solution
    }
  }
}

export default themeProvider
