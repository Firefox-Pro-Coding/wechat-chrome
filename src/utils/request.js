import wx from 'wx'
import Fly from 'flyio'

const fly = new Fly()

fly.interceptors.request.use((request) => {
  wx.showNavigationBarLoading()
  return request
})

fly.interceptors.response.use(
  (response) => {
    wx.hideNavigationBarLoading()
    return response
  },
  (err) => {
    wx.hideNavigationBarLoading()
    wx.showToast({
      title: err.message,
      icon: 'none',
    })
    return Promise.reject(err)
  },
)

export default fly
