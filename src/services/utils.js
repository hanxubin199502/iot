'use strict'

/* eslint-disable */
Number.prototype.toFormatTime = function () {
  let value = this / 1000
  var hour = value > 3599 ? parseInt(value / 3600) : '0'
  var min = value > 59 ? parseInt((value - hour * 60 * 60) / 60) : '0'
  var second = value > 0 ? parseInt(value % 60) % 60 : '0'
  return (hour > 9 ? hour : '0' + hour) + ':' + (min > 9 ? min : '0' + min) + ':' + (second > 9 ? second : '0' + second)
}

String.prototype.isEmpty = function () {
  if (this === '' || this === null) {
    return true
  } else {
    return false
  }
}

String.prototype.toFormatMoney = function () {
  return (this || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
}
