export function formatTime(date: Date): string {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return (
    [year, month, day].map(formatNumber).join('/') +
    ' ' +
    [hour, minute, second].map(formatNumber).join(':')
  )
}

export const showToast = (
  title?: string,
  icon: 'success' | 'loading' | 'none' = 'loading'
) => {
  wx.showToast({
    title: title || '',
    icon: icon
  })
}

export const hideToast = () => {
  wx.hideToast()
}

export const showLoading = (
  title?: string
  //   mask?: boolean,
  //   success?: wx.ShowLoadingSuccessCallback,
  //   fail?: wx.ShowLoadingFailCallback,
  //   complete?: wx.ShowLoadingCompleteCallback
) => {
  wx.showLoading({
    title: title ? title : ''
    // mask,
    // success,
    // fail,
    // complete
  })
}

export const hideLoading = () =>
  //   success?: wx.ShowLoadingSuccessCallback,
  //   fail?: wx.ShowLoadingFailCallback,
  //   complete?: wx.ShowLoadingCompleteCallback
  {
    wx.hideLoading()
  }

const formatNumber = (n: number) => {
  const str = n.toString()
  return str[1] ? str : '0' + str
}
