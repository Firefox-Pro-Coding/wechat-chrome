<template>
  <div class="topic-card-wrapper">
    <div class="topic-card-title">
      {{ topicCardConfig.title }}
      <span class="topic-card-desc">{{ topicCardConfig.desc }}</span>
      <span class="topic-card-more">
        <a :href="topicCardConfig.url">
          更多
          <i class="fa fa-angle-right right-side-icon" aria-hidden="true"></i>
        </a>
      </span>
    </div>

    <scroll-view scroll-x class="topic-card-list-wrapper">
      <div class="topic-card-list-content">
        <div class="flex-co item-cell" v-for="(item, index) in topicCardConfig.itemList" :key="index">
          <a :href="item.url">
            <div class="flex-co item-cell-img-wrapper">
              <img class="item-cell-img" :src="item.imgUrl" alt="item" mode="widthFix">
            </div>
            <div class="item-cell-title">{{ item.title }}</div>
            <div class="item-cell-price"><span class="item-cell-unit">¥</span>{{ item.price }}</div>
            <div class="item-cell-desc">已拼 {{ item.historyTimes }} 件</div>
          </a>
        </div>
      </div>
    </scroll-view>
  </div>
</template>

<script lang="ts" src="./topicCard.ts"></script>

<style scoped>
  .flex {
    display: flex;
    flex-flow: row nowrap;
  }

  .flex-co {
    display: flex;
    flex-flow: column nowrap;
  }

  .topic-card-wrapper {
    padding: 10rpx 20rpx;
    background: #fff7f7;
  }

  .topic-card-wrapper .topic-card-title {
    color: #444;
    line-height: 55rpx;
  }

  .topic-card-wrapper .topic-card-desc {
    color: #cdcdcd;
    font-size: 12px;
  }

  .topic-card-wrapper .topic-card-more {
    float: right;
    font-size: 14px;
  }

  .topic-card-wrapper .right-side-icon {
    margin: 2rpx 0 0 4rpx;
    font-size:34rpx;
  }

  .topic-card-wrapper .topic-card-list-wrapper {
    overflow-x: auto;
    box-sizing: border-box;
    /* scroll-behavior: smooth; */
  }

  .topic-card-wrapper .topic-card-list-wrapper::-webkit-scrollbar {
    width: 0;
    height: 0;
    color: transparent;
  }

  .topic-card-wrapper .topic-card-list-content {
    margin: 5rpx 0 10rpx 0;
    display: flex;
    flex-flow: row nowrap;
    align-items: stretch;
    justify-content: flex-start;
    box-sizing: border-box;
  }

  .topic-card-wrapper .item-cell {
    flex:0 0 auto;
    width: 250rpx;
    margin-right: 20rpx;
    background: #fff;
    box-sizing: border-box;
  }

  .item-cell .item-cell-img-wrapper {
    /* align-self: center;
    flex: 0 0 auto; */
    margin: 20rpx;
    width: 210rpx;
    height: 210rpx;
    overflow: hidden;
  }

  .item-cell .item-cell-img {
    width: 100%;
  }

  .item-cell .item-cell-title {
    margin: 20rpx 20rpx 0 20rpx;
    font-size: 14px;
  }

  .item-cell .item-cell-unit {
    font-size: 14px;
  }

  .item-cell .item-cell-price {
    margin: 0 20rpx;
    font-size: 20px;
    color: #fe6601;
  }

  .item-cell .item-cell-desc {
    margin-top: 10rpx;
    border-top: 1px solid #f2f2f2;
    padding: 5rpx 20rpx;
    font-size: 14px;
    color: #808080;
  }
</style>
