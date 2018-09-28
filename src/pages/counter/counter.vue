<template>
  <div class="counter-warp">
    <p>Vuex counter：{{ count }}</p>
    <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </p>

    <a @click="navBack" class="link" style="margin-top: 20px;">去往首页</a>
  </div>
</template>

<script>
  // Use Vuex
  import store from './store'

  export default {
    computed: {
      count() {
        return store.state.count
      },
    },
    methods: {
      increment() {
        store.commit('increment')
      },

      decrement() {
        store.commit('decrement')
      },

      navBack() {
        wx.switchTab({
          url: '/pages/index/main',
        })
      },
    },
  }
</script>

<style>
  .counter-warp {
    text-align: center;
    margin-top: 100px;
  }
</style>
