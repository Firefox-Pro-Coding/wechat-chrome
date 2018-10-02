import { Component, Vue } from 'vue-property-decorator'
import card from '@/components/card.vue'

@Component({
  name: 'PageIndex',
  mpType: 'page',
  components: {
    card,
  }
})
export default class extends Vue {
  public motto = 'Hello World'
  public userInfo = {}

  public created() {
    // 应用创建
    this.getUserInfo()
  }

  public getUserInfo() {
    // 获取用户信息
    wx.getSetting({
      success: (res) => {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: (resp: any) => {
              console.log(resp.userInfo)
              // 用户已授权
              this.userInfo = resp.userInfo
              console.log('用户已授权')
            }
          })
        } else {
          console.log('用户未授权')
          wx.showModal({
            title: '警告',
            content: '尚未进行授权，请点击确定跳转到授权页面进行授权',
            success: (resp: any) => {
              if (resp.confirm) {
                // wx.navigateTo({
                //   url: '../tologin/tologin',
                // })
                wx.switchTab({
                  url: '/pages/index/main',
                })
              }
            }
          })
        }
      }
    })
  }

  public checkUserWxVersion() {
    if (wx.canIUse('button.open-type.getUserInfo')) {
      // 用户版本可用
    } else {
      console.log('请升级微信版本')
    }
  }

  public bindGetUserInfo(e: any) {
    if (e.mp.detail.rawData) {
      console.log('用户允许授权')
      this.userInfo = e.mp.detail.userInfo
    } else {
      console.log('用户拒绝授权')
    }
  }

  public bindViewTap() {
    const url = '../logs/main'
    wx.navigateTo({ url })
  }

  public clickHandle(msg: string, ev: MouseEvent) {
    // eslint-disable-next-line
    console.log('clickHandle:', msg, ev)
  }

  /**
   * launchAppError
   * 打开应用失败
   *
   * 条件:
   * 1. APP 和小程序绑定同一个认证的开放平台账号
   * 2. APP 接入微信终端 SDK
   */
  public launchAppError(e: any) {
    console.log(e)
    wx.showToast({
      title: `${e.mp.detail.errMsg || '-'}`,
      icon: 'none',
    })
  }

  /**
   * onShareAppMessage
   * 全局分享
   */
  public onShareAppMessage() {
    console.log('share')
  }

}
