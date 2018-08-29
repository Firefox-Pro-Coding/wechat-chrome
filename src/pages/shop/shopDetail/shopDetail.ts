import { Component, Vue } from 'vue-property-decorator'
import noticeBar from '@/components/noticeBar.vue'

@Component({
  name: 'PageIndex',
  mpType: 'page',
  components: {
    noticeBar,
  },
})
export default class extends Vue {
  public swiperConfig = {
    indicatorDots: true,
    autoplay: false,
    interval: 5000,
    duration: 600,
    circular: true,
    imgUrls: [
      'https://i.loli.net/2018/08/17/5b7688b39548e.png',
      'https://i.loli.net/2018/08/17/5b7688b38c34d.png',
    ]
  }

  public noticeInfo = '详情页'

  public swiperChange(e: any) {
    console.log(`image ${e.mp.detail.current} scroll start`)
  }

  public animationfinish(e: any) {
    console.log(`image ${e.mp.detail.current} scroll end`)
  }

  /**
   * navToHome 回到首页
   */
  public navToHome() {
    wx.switchTab({
      url: '/pages/shop/shopIndex/main',
    })
  }

  // public mounted() {
  // }

}
