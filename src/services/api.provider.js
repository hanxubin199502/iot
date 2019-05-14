'use strict'
const apiProvider = {}

apiProvider.apiConfig = {}

apiProvider.apiConfig['API_ROOT'] = process.env.API_ROOT

console.log(apiProvider.apiConfig['API_ROOT'] )
apiProvider.mapModuleRoute = function (module) {
  if (module) {
    if (module === 'API_ROOT') {
      return location.protocol + '//' + apiProvider.apiConfig['API_ROOT']
    }
  }
}
// 获取请求地址
apiProvider.getApiAddress = function (url, module) {
  let apiAddress = ''
  if (url) {
    if (url.indexOf('/') === 0) {
      apiAddress = this.mapModuleRoute(module) + url
    } else {
      apiAddress = this.mapModuleRoute(module) + '/' + url
    }
  }
  return apiAddress
}


export default apiProvider
