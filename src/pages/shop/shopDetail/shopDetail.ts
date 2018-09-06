import { Component, Vue } from 'vue-property-decorator'
import noticeBar from '@/components/noticeBar.vue'
import CustomActionSheet from '@/components/customActionSheet/customActionSheet.vue'
import CustomActionSheetClass from '@/components/customActionSheet/customActionSheet.ts'

@Component({
  name: 'PageIndex',
  mpType: 'page',
  components: {
    noticeBar,
    CustomActionSheet,
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

  public stateParams = {}

  public noticeInfo = '详情页'

  public mounted() {
    console.log('mounted')
  }

  public swiperChange(e: any) {
    console.log(`image ${e.mp.detail.current} scroll start`)
  }

  public animationfinish(e: any) {
    console.log(`image ${e.mp.detail.current} scroll end`)
  }

  /**
   * navToHome
   * 回到商品首页
   */
  public navToHome() {
    wx.switchTab({
      url: '/pages/shop/shopIndex/main',
    })
  }

  /**
   * choseItemSpec
   * 选择商品规格
   */
  public choseItemSpec() {
    const actionSheet = this.$refs.actionSheet1 as CustomActionSheetClass
    actionSheet.open()
  }

  /**
   * openShareActionSheet
   * 底部分享弹窗
   */
  public openShareActionSheet() {
    const actionSheet = this.$refs.actionSheet2 as CustomActionSheetClass
    actionSheet.open()
  }

  /**
   * onShareAppMessage
   */
  public onShareAppMessage() {
    console.log('share')
  }

  public onLoad(e: any) {
    this.stateParams = e
    console.log('stateParams', this.stateParams)
  }

}
