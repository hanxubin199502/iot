'use strict'
import moment from 'moment'

export function parseTime (time, format) {
  if (!time) {
    return ''
  } else {
    return moment(time).format(format)
  }
}
