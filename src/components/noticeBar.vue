<template>
  <div class="notice-bar">
    <div class="notice-bar-left">
      <i class="fa fa-rss left-side-icon" aria-hidden="true"></i>
      <span class="notice-bar-title">{{ title }}</span>
      <span class="notice-bar-showcase">{{ text }}</span>
    </div>
    <div class="notice-bar-right">
      <i class="fa fa-angle-right right-side-icon" aria-hidden="true"></i>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        default: '公告',
      },
      text: {
        type: String,
        default: '',
      },
    },
  }
</script>

<style>
  .notice-bar {
    padding: 10rpx 20rpx;
    background: #fb8063;
    color: #fff;
    font-size: 14px;
    height: 40rpx;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .notice-bar .left-side-icon {
    display: flex;
    align-items: center;
  }

  .notice-bar .notice-bar-left {
    display: flex;
    flex: 1 1 0;
    width: 0;
    flex-flow: row nowrap;
  }

  .notice-bar .notice-bar-right {
    display: flex;
    align-items: center;
  }

  .notice-bar .notice-bar-title {
    margin: 0 20rpx;
  }
  .notice-bar .notice-bar-showcase {
    flex: 1 1 0;
    width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    zoom: 1
  }

  .notice-bar .right-side-icon {
    font-size: 18px;
    color: #cecece;
  }
</style>
