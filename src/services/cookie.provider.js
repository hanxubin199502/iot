/*
 * @auth:haijun.yuan
 * @date:2018.12.05
 * @description:
 * @wiki
 */
'use strict'
const cookieProvider = {}

cookieProvider.get = function (key) {
  if (document.cookie.length > 0) {
    var cookieBegin = document.cookie.indexOf(key + '=')
    if (cookieBegin !== -1) {
      cookieBegin = cookieBegin + key.length + 1
      let cookieEnd = document.cookie.indexOf(';', cookieBegin)
      if (cookieEnd === -1) cookieEnd = document.cookie.length
      return unescape(document.cookie.substring(cookieBegin, cookieEnd))
    }
  }
  return ''
}

cookieProvider.set = function (key, value, days) {
  let expires = new Date()
  expires.setDate(expires.getDate() + days)
  document.cookie = key + '=' + escape(value) + ((days == null || days === 0) ? '' : ';expires=' + expires.toGMTString())
}

cookieProvider.delete = function (key) {
  var expires = new Date()
  expires.setTime(expires.getTime() - 1)
  var keyValue = this.get(key)
  if (keyValue != null) {
    document.cookie = key + '=' + keyValue + ';expires=' + expires.toGMTString()
  }
}

export default cookieProvider
