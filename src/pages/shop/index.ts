import { Component, Vue } from 'vue-property-decorator'
import card from '@/components/card.vue'

@Component({
  name: 'PageIndex',
  mpType: 'page',
  components: {
    card,
  },
})

export default class extends Vue {
  public mockData = 'cool'
}
