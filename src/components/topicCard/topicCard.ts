import { Component, Vue, Prop } from 'vue-property-decorator'

const getDefaultConfig = (): TopicCardConfig => ({
  title: '',
  desc: '',
  url: '',
  itemList: [],
})

export interface TopicCardConfig {
  title: string
  desc: string
  url: string
  itemList: Array<CellListItem>
}

interface CellListItem {
  title: string
  price: number
  url: string
  imgUrl: string
  historyTimes: number
}

@Component({
  name: 'topicCard',
  mpType: 'component',
})
export default class extends Vue {
  @Prop({ type: Object, default: getDefaultConfig })
  public topicCardConfig!: TopicCardConfig

  public mounted() {
    const newConfig = {
      ...getDefaultConfig(),
      ...this.topicCardConfig,
    }
    this.topicCardConfig = newConfig
  }
}
