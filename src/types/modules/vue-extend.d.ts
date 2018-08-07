import Vue from 'vue'

declare module 'vue/types/vue' {
  interface Vue {
    $mp: any
  }

  interface VueConstructor {
    mpType: string
  }
}
