const IsMobile =
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  ) // 判断移动端

const IsIOS = /(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent) // 判断是否ios

const IsAndroid = /(Android)/i.test(navigator.userAgent) // 判断是否安卓

export { IsMobile, IsIOS, IsAndroid }
