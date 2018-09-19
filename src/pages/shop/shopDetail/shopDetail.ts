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

  public itemInfo = {
    name: 'spiz Icecream 通兑电子券（全国通兑、仅限购买当日使用）',
    specId: '',
    price: 28,
    groupPrice: 15,
    stock: 222,
    count: 1,
    detail: 'skr skr skr cool'
  }

  public itemSpecs = [{
    id: 1,
    specName: '规格 1',
    price: 28,
    groupPrice: 15,
    stock: 8,
    selected: false,
  }, {
    id: 2,
    specName: '规格 2',
    price: 30,
    groupPrice: 16,
    stock: 322,
    selected: false,
  }, {
    id: 3,
    specName: '规格名称特别特别规格规格长的 3',
    price: 40,
    groupPrice: 17,
    stock: 422,
    selected: false,
  }]

  public mounted() {
    // 清空已选规格
    this.itemInfo = {
      name: 'spiz Icecream 通兑电子券（全国通兑、仅限购买当日使用）',
      specId: '',
      price: 28,
      groupPrice: 15,
      stock: 222,
      count: 1,
      detail: 'skr skr skr cool'
    }

    this.itemSpecs.forEach((e: any) => {
      e.selected = false
    })
  }

  public onLoad(e: any) {
    this.stateParams = e
    console.log('stateParams', this.stateParams)

    // wx.showShareMenu({
    //   withShareTicket: true,
    //   success(res) {
    //     // 分享成功
    //     console.log('分享成功', res)
    //   },
    //   fail(res) {
    //     // 分享失败
    //     console.log('分享失败', res)
    //   }
    // })

    // wx.getShareInfo({
    //   shareTicket: ''
    // })
  }

  /**
   * onShareAppMessage
   * 全局分享
   */
  public onShareAppMessage() {
    console.log('share')
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
   * 展开商品规格弹窗
   */
  public choseItemSpec(ref: string) {
    const actionSheet = this.$refs.actionSheet1 as CustomActionSheetClass

    if (!this.itemInfo.specId && actionSheet.visible) {
      wx.showToast({
        title: '请选择商品规格',
        icon: 'none',
      })
      return false
    }

    if (typeof ref === 'string' && this.itemInfo.specId) {
      // 去订单详情页 Todo
      wx.showToast({
        title: '订单生成中...',
        icon: 'loading',
        mask: true,
        success: () => {
          console.log(this.itemInfo)
        },
      })

      if (actionSheet.visible) {
        actionSheet.close()
      }

      return false
    }

    actionSheet.open()
  }

  /**
   * selectItemSpec
   * 展开商品规格弹窗 - 选择商品规格
   */
  public selectItemSpec(item: any, arr: any) {
    arr.forEach((e: any) => {
      e.selected = false
    })

    // init
    item.selected = true
    this.itemInfo.count = 1

    this.itemInfo.price = item.price
    this.itemInfo.groupPrice = item.groupPrice
    this.itemInfo.stock = item.stock
    this.itemInfo.specId = item.id
  }

  /**
   * decrement
   * 展开商品规格弹窗
   */
  public decrement(obj: any) {
    if (obj.count <= 1) {
      return
    }
    obj.count -= 1
  }

  /**
   * increment
   * 展开商品规格弹窗
   */
  public increment(obj: any) {
    if (obj.count >= obj.stock) {
      return
    }
    obj.count += 1
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
   * shareToFriends
   * 底部分享弹窗 - 分享给朋友
   */
  public shareToFriends() {
    console.log(1)
  }

  /**
   * createPost
   * 底部分享弹窗 - 生成商品海报
   */
  public createPost() {
    console.log(2)
  }
}
