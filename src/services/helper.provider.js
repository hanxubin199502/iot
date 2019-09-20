'use strict'
const helperProvider = {}

/**
 * API请求错误处理
 * @param response（接口错误参数）
 * @return 错误提示信息
 * this.$helper.handleLoginErrorMsg(err)
 */
helperProvider.handleLoginErrorMsg = function (response) {
  if (response.data && response.data.message) {
    if (response.data.message.errorMessage) {
      return response.data.message.errorMessage
    } else {
      return response.data.message
    }
  } else {
    return 'Unspecific error happened with server, please contact service desk!'
  }
}

/**
 * 图片剪裁 - 上传图片
 * @param urlData（this.cropper.getCroppedCanvas().toDataURL('image/jpeg')）
 * @return 图片Blob对象
 * this.$helper.convertBase64UrlToBlob(imageData)
 */
helperProvider.convertBase64UrlToBlob = function (urlData) {
  // 去掉url的头，并转换为byte
  var bytes = window.atob(urlData.split(',')[1])
  // 处理异常,将ascii码小于0的转换为大于0
  var ab = new ArrayBuffer(bytes.length)
  var ia = new Uint8Array(ab)
  for (var i = 0; i < bytes.length; i++) {
    ia[i] = bytes.charCodeAt(i)
  }
  return new Blob([ab], {
    type: 'image/jpeg'
  })
}
export default helperProvider
