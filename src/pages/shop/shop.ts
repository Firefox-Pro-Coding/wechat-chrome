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

  public noticeInfo = '不好啦，战地5又出新dlc啦！！！不好啦，战地5又出新dlc啦！不好啦，战地5又出新dlc啦！不好啦，战地5又出新dlc啦！不好啦，战地5又出新dlc啦！'

  public topicCardConfig: TopicCardConfig = {
    title: 'Electric Arts',
    desc: 'Challenge Everythings',
    url: '/pages/counter/main?id=0',
    itemList: [],
  }

  public itemList = [{
    title: '麦乐酷',
    price: 10,
    url: '/pages/counter/main?id=1',
    imgUrl: 'https://i.loli.net/2018/08/22/5b7c768c7e60a.jpg',
    historyTimes: 50,
  }, {
    title: '大盘鸡',
    price: 10,
    url: '/pages/counter/main?id=2',
    imgUrl: 'https://i.loli.net/2018/08/22/5b7c768c7e60a.jpg',
    historyTimes: 50,
  }, {
    title: '很僵硬',
    price: 10,
    url: '/pages/counter/main?id=3',
    imgUrl: 'https://i.loli.net/2018/08/22/5b7c768c7e60a.jpg',
    historyTimes: 50,
  }, {
    title: '缸鸭狗',
    price: 10,
    url: '/pages/counter/main?id=4',
    imgUrl: 'https://i.loli.net/2018/08/22/5b7c768c7e60a.jpg',
    historyTimes: 50,
  }, {
    title: '绿水灵',
    price: 10,
    url: '/pages/counter/main?id=5',
    imgUrl: 'https://i.loli.net/2018/08/22/5b7c768c7e60a.jpg',
    historyTimes: 50,
  }]

  public swiperChange(e: any) {
    console.log(`image ${e.mp.detail.current} scroll start`)
  }

  public animationfinish(e: any) {
    console.log(`image ${e.mp.detail.current} scroll end`)
  }

  public mounted() {
    this.topicCardConfig.itemList = this.itemList
  }

}
