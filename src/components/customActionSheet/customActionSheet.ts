import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({
  name: 'CustomActionSheet',
  mpType: 'component',
})
export default class CustomActionSheet extends Vue {
  @Prop({ type: Number, default: 0 })
  public offset!: number

  @Prop({ default: null })
  public props!: any

  public visible = false
  public timer = 0
  public classNames: Array<string> = []

  // public mounted() {
  //   console.log(this)
  // }

  public onUnload() {
    this.visible = false
  }

  public open() {
    clearTimeout(this.timer)
    this.classNames = ['enter']
    this.visible = true
    this.timer = setTimeout(() => {
      this.classNames = ['enter-to']
      this.timer = setTimeout(() => {
        this.classNames = []
      }, 300)
    })
  }

  public close() {
    clearTimeout(this.timer)
    this.classNames = ['leave']
    this.visible = true
    this.timer = setTimeout(() => {
      this.classNames = ['leave-to']
      this.timer = setTimeout(() => {
        this.classNames = []
        this.visible = false
      }, 300)
    })
  }
}
