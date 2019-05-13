'use strict'
import vm from '@/main'
import axios from 'axios'
import ES6Promise from 'es6-promise'
import store from '../services/store.provider.js'
import appRouters from '../router/index.js'
import helper from '../services/helper.provider.js'
import { Message } from 'element-ui'
// import babelpolyfill from 'babel-polyfill' // [ext] fix ie9 promise bug??
ES6Promise.polyfill() // [ext] fix ie9 promise bug

// [ext] axios request interceptors
axios.interceptors.request.use(
  config => {
    config.headers['X-Requested-With'] = 'XMLHttpRequest'
    return config
  }
)
// [ext] axios response interceptors
axios.interceptors.response.use(
    response => {
        /**
         * 返回状态为200
         */
        if (response.headers['content-type'] === 'application/zip;charset=UTF-8') {
            return response
        } else if (response.data.status === 200) {
            return response.data
        } else {
        Message({message: helper.handleLoginErrorMsg(response), type: 'error'})
            return Promise.reject(response)
        }
    },
    err => {
        if (err.response) {
        switch (err.response.status) {
            case 401:
            store.dispatch('USER_LOGOUT_ACTION').then(() => {
                Message({message: '系统异常', type: 'error'})
                appRouters.replace({
                path: '/login',
                query: {
                    redirect: appRouters.currentRoute.fullPath
                }
                })
            })
            break
            default :
            Message({message: err.response.data.message, type: 'error'})
            break
        }
        return Promise.reject(err.response)
        } else if (err.message && err.message.indexOf('Network Error') > -1) {
            console.log(appRouters.currentRoute.fullPath)
        //   If the error occurs on request(401), it would be handled and cleaned by axios,
        //   and only Network Error is returned( response is null)
            Message({message:'连接超时', type: 'error'})
          
        
            return Promise.reject(err)
        }
    }
)

const http = {}
http.timeout = 60000 // 60s 1min

http.get = function (url, params) {
    let config = {
        method: 'GET',
        url: url,
        params: params, // params:{ key : value}
        timeout: this.timeout,
        headers: {
        'Content-Type': 'application/xxxx-form; charset=UTF-8'
        },
        responseType: 'json'
    }
    return axios(config)
}

http.post = function (url, obj) {
    let config = {
        method: 'POST',
        url: url,
        data: JSON.stringify(obj),
        timeout: this.timeout,
        headers: {
        'Content-Type': 'application/json; charset=UTF-8'
        },
        responseType: 'json'
    }
    return axios(config)
}

http.post1 = function (url, params) {
    let config = {
        method: 'POST',
        url: url,
        params: params,
        timeout: this.timeout,
        headers: {
        'Content-Type': 'application/json; charset=UTF-8'
        },
        responseType: 'json'
    }
    return axios(config)
}

http.put = function (url, obj) {
  let config = {
    method: 'PUT',
    url: url,
    data: JSON.stringify(obj), // change obj to json
    timeout: this.timeout,
    headers: {
      'Content-Type': 'application/json; charset=UTF-8'
    },
    responseType: 'json'
  }
  return axios(config)
}

http.put1 = function (url, params) {
  let config = {
    method: 'PUT',
    url: url,
    params: params,
    timeout: this.timeout,
    headers: {
      'Content-Type': 'application/json; charset=UTF-8'
    },
    responseType: 'json'
  }
  return axios(config)
}


http.delete = function (url, params) {
  console.log(params)
  let config = {
    method: 'DELETE',
    url: url,
    // params:params,
    data: JSON.stringify(params), // change obj to json
    timeout: this.timeout,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    },
    responseType: 'json'
  }
  return axios(config)
}

http.delete1 = function (url, params) {

    let config = {
      method: 'DELETE',
      url: url,
      params:params,
      timeout: this.timeout,
      headers: {
        'Content-Type': 'application/json;charset=UTF-8'
      },
      responseType: 'json'
    }
    return axios(config)
  }

// [export]
http.postForDownload = function (url, obj) {
  let config = {
    method: 'POST',
    url: url,
    data: JSON.stringify(obj),
    timeout: this.timeout,
    headers: {
      'Content-Type': 'application/json; charset=UTF-8'
    },
    responseType: 'arraybuffer'
  }
  return axios(config)
}

// [image upload]
http.upload = function (url, obj, fileName) {
  let formData = new FormData()
  for (let key in obj) {
    formData.append(key, obj[key])
  }
  let config = {
    method: 'POST',
    url: url,
    data: formData,
    timeout: this.timeout,
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    responseType: 'json'
  }
  return axios(config)
}

export default http
