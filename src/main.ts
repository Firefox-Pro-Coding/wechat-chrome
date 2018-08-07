import Vue from 'vue'
import { Component } from 'vue-property-decorator'

import App from './App.vue'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()


// 添加小程序hooks http://mpvue.com/mpvue/#_4
Component.registerHooks([
  // app
  'onLaunch', // 初始化
  'onShow', // 当小程序启动，或从后台进入前台显示
  'onHide', // 当小程序从前台进入后台
  // pages
  'onLoad', // 监听页面加载
  'onShow', // 监听页面显示
  'onReady', // 监听页面初次渲染完成
  'onHide', // 监听页面隐藏
  'onUnload', // 监听页面卸载
  'onPullDownRefresh', // 监听用户下拉动作
  'onReachBottom', // 页面上拉触底事件的处理函数
  'onShareAppMessage', // 用户点击右上角分享
  'onPageScroll', // 页面滚动
  'onTabItemTap', // 当前是 tab 页时， 点击 tab 时触发 （mpvue 0.0.16 支持）
])

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: [
      'pages/logs/main',
      '^pages/index/main',
    ],

    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black',
    },
  },
}