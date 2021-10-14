import {
  getIOSVersion,
  getAndroidVersion,
  isMobile,
  isIOS,
  isAndroid,
} from './env'

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

const isSupportWebp = checkSupportWebp()

/**
 *
 * @param webpImg webp图片url
 * @param demoteImg 降级图片url
 * @returns imgurl
 */

const useWebp = (webpImg, demoteImg) => {
  if (isMobile) {
    if (isIOS) {
      const version = getIOSVersion()
      return version >= 14 ? webpImg : demoteImg
    }

    if (isAndroid) {
      const version = getAndroidVersion()
      return version >= 4.2 ? webpImg : demoteImg
    }
  }

  return isSupportWebp ? webpImg : demoteImg
}

export { isSupportWebp, useWebp }
