import { Vue, Component } from 'vue-property-decorator'

// 必须使用装饰器的方式来指定components
@Component({
  mpType: 'app', // mpvue特定
})
class App extends Vue {
  // app hook
}

export default App
