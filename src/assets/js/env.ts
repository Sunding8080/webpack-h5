const { navigator } = window

const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
  navigator.userAgent,
) // 判断移动端

const isIOS = /(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent) // 判断是否ios

const isAndroid = /(Android)/i.test(navigator.userAgent) // 判断是否安卓

/**
 * 获取ios版本
 * @returns
 */
function getIOSVersion() {
  const ua = navigator.userAgent.toLowerCase()
  let version = ''
  if (ua.indexOf('like mac os x') > 0) {
    const reg = /os [\d._]+/gi
    const vInfo = ua.match(reg)
    version = `${vInfo}`.replace(/[^0-9|_.]/gi, '').replace(/_/gi, '.') // 得到版本号9.3.2或者9.0
    version = version?.split('.')?.[0] // 得到版本号第一位
  }

  return +version
}

/**
 * 获取安卓版本
 * @returns
 */
function getAndroidVersion() {
  const ua = navigator.userAgent.toLowerCase()
  let version = ''
  if (ua.indexOf('android') > 0) {
    const reg = /android [\d._]+/gi
    const vInfo = ua.match(reg)
    version = `${vInfo}`.replace(/[^0-9|_.]/gi, '').replace(/_/gi, '.') // 得到版本号4.2.2
    version = version?.split('.')?.[0] // 得到版本号第一位
  }

  return +version
}

export {
  isMobile, isIOS, isAndroid, getIOSVersion, getAndroidVersion,
}
