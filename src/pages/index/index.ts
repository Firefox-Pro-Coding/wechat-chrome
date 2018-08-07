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
    // 调用应用实例的方法获取全局数据
    this.getUserInfo()
  }

  public bindViewTap() {
    const url = '../logs/main'
    wx.navigateTo({ url })
  }

  public clickHandle(msg: string, ev: MouseEvent) {
    // eslint-disable-next-line
    console.log('clickHandle:', msg, ev)
  }

  private getUserInfo() {
    // 调用登录接口
    wx.login({
      success: () => {
        wx.getUserInfo({
          success: (res) => {
            this.userInfo = res.userInfo
          },
        })
      },
    })
  }
}
