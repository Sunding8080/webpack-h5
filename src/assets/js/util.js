/**
 * 判断是否支持webp
 * @returns
 */
const checkSupportWebp = function () {
  try {
    return (
      document
        .createElement('canvas')
        .toDataURL('image/webp', 0.5)
        .indexOf('data:image/webp') === 0
    )
  } catch (err) {
    return false
  }
}

/**
 * 获取ios版本
 * @returns
 */
function getIOSVersion() {
  const ua = navigator.userAgent.toLowerCase()
  let version = null
  if (ua.indexOf('like mac os x') > 0) {
    const reg = /os [\d._]+/gi
    const v_info = ua.match(reg)
    version = (v_info + '').replace(/[^0-9|_.]/gi, '').replace(/_/gi, '.') //得到版本号9.3.2或者9.0
    version = parseInt(version.split('.')[0]) // 得到版本号第一位
  }

  return version
}

/**
 * 获取安卓版本
 * @returns
 */
function getAndroidVersion() {
  const ua = navigator.userAgent.toLowerCase()
  let version = null
  if (ua.indexOf('android') > 0) {
    const reg = /android [\d._]+/gi
    const v_info = ua.match(reg)
    version = (v_info + '').replace(/[^0-9|_.]/gi, '').replace(/_/gi, '.') //得到版本号4.2.2
    version = +version.split('.')[0] // 得到版本号第一位
  }

  return version
}

/**
 *
 * @param webpImg webp图片url
 * @param demoteImg 降级图片url
 * @returns imgurl
 */

export const useWebp = (webpImg, demoteImg) => {
  if (isMobile) {
    if (IsIOS) {
      const version = getIOSVersion()
      return version >= 14 ? webpImg : demoteImg
    }

    if (IsAndroid) {
      const version = getAndroidVersion()
      return version >= 4.2 ? webpImg : demoteImg
    }
  }

  return webpSupported ? webpImg : demoteImg
}

export { checkSupportWebp, getIOSVersion, getAndroidVersion }
