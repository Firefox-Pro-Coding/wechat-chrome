import { Component, Vue } from 'vue-property-decorator'
import noticeBar from '@/components/noticeBar.vue'
import topicCard from '@/components/topicCard/topicCard.vue'
import { TopicCardConfig } from '@/components/topicCard/topicCard.ts'

@Component({
  name: 'PageIndex',
  mpType: 'page',
  components: {
    noticeBar,
    topicCard,
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
      'https://i.loli.net/2018/08/17/5b7688b38c34d.png',
      'https://i.loli.net/2018/08/17/5b7688b39548e.png',
    ]
  }

  public noticeInfo = 'notice here...'

  public topicCardConfig: TopicCardConfig = {
    title: 'Title',
    desc: 'desc...',
    url: '/pages/counter/main?id=0',
    itemList: [],
  }

  public itemList = [{
    title: '麦乐酷',
    price: 10,
    url: '/pages/shop/shopDetail/main?id=1&name=sdk',
    imgUrl: 'https://i.loli.net/2018/08/22/5b7c768c7e60a.jpg',
    historyTimes: 50,
  }, {
    title: 'test item',
    price: 10,
    url: '/pages/shop/shopDetail/main?id=2',
    imgUrl: 'https://i.loli.net/2018/08/22/5b7c768c7e60a.jpg',
    historyTimes: 50,
  }, {
    title: 'test item 2',
    price: 10,
    url: '/pages/shop/shopDetail/main?id=3',
    imgUrl: 'https://i.loli.net/2018/08/22/5b7c768c7e60a.jpg',
    historyTimes: 50,
  }, {
    title: 'test item 3',
    price: 10,
    url: '/pages/shop/shopDetail/main?id=4',
    imgUrl: 'https://i.loli.net/2018/08/22/5b7c768c7e60a.jpg',
    historyTimes: 50,
  }, {
    title: 'test item 3',
    price: 10,
    url: '/pages/shop/shopDetail/main?id=5',
    imgUrl: 'https://i.loli.net/2018/08/22/5b7c768c7e60a.jpg',
    historyTimes: 50,
  }]

  public swiperChange(e: any) {
    console.log(`image ${e.mp.detail.current} scroll start`)
  }

  public animationfinish(e: any) {
    console.log(`image ${e.mp.detail.current} scroll end`)
  }

  /**
   * onShareAppMessage
   */
  public onShareAppMessage() {
    console.log('share')
  }

  public mounted() {
    this.topicCardConfig.itemList = this.itemList
  }

}
