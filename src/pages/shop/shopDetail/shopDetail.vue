<template>
  <div class="page">
    <noticeBar v-if="false" :text="noticeInfo"></noticeBar>

    <div class="page-swiper">
      <div class="page__bd page__bd_spacing">
        <swiper class="swiper" :indicator-dots="swiperConfig.indicatorDots" :autoplay="swiperConfig.autoplay" :interval="swiperConfig.interval" :duration="swiperConfig.duration" :circular="swiperConfig.circular" @change="swiperChange" @animationfinish="animationfinish">
          <div v-for="(item, index) in swiperConfig.imgUrls" :key="index">
            <swiper-item>
              <image :src="item" class="slide-image" mode="widthFix" />
            </swiper-item>
          </div>
        </swiper>
      </div>
    </div>

    <div class="item-detail-wrapper">
      <div class="price-wrapper flex">
        <div>
          <span class="item-price-unit">¥</span>
          <span class="item-price">35.00</span>
        </div>

        <div class="share-button-wrapper flex-co">
          <i class="fa fa-share-square-o share-icon" aria-hidden="true"></i>
          <div class="share-text">分享</div>
        </div>
      </div>
      <div class="item-name">spiz Icecream 通兑电子券（全国通兑、仅限购买当日使用）</div>
    </div>

    <div class="box mt-10 flex item-spec-wrapper">
      <div class="left-side-text">规格</div>
      <i class="fa fa-angle-right right-side-icon" aria-hidden="true"></i>
    </div>

    <div class="mt-10 item-desc-wrapper">
      <div class="item-desc-title">商品详情</div>
      <div class="item-desc-text">
        <div>skr skr skr</div>
        <div>ez pz lm sqz</div>
        <div>ez pz lm sqz</div>
        <div>ez pz lm sqz</div>
        <div>ez pz lm sqz</div>
        <div>ez pz lm sqz</div>
      </div>
    </div>

    <div class="empty-block">&nbsp;</div>

    <div class="foot-bar flex clearfix">
      <div class="foot-bar-cell foot-bar-item" @click="navToHome">
        <i class="fa fa-home fs-18" aria-hidden="true"></i>
        <div>首页</div>
      </div>
      <div class="foot-bar-cell foot-bar-item2">
        <div class="foot-bar-price">¥ 35.00</div>
        <div>单独购买</div>
      </div>
      <div class="foot-bar-cell foot-bar-item3">
        <div class="foot-bar-price">¥ 19.00</div>
        <div>拼团</div>
      </div>
    </div>
  </div>
</template>

<script src="./shopDetail.ts" lang="ts"></script>

<style scoped>
.flex {
  display: flex;
  flex-flow: row nowrap;
}

.flex-co {
  display: flex;
  flex-flow: column nowrap;
}

.fs-12 {
  font-size: 12px;
}

.fs-18 {
  font-size: 18px;
}

.item-detail-wrapper {
  padding: 20rpx;
  background: #fff;
}

.item-detail-wrapper .item-price-unit {
  color: #f05e53;
  font-size: 12px;
}

.item-detail-wrapper .item-price {
  margin-left: 20rpx;
  font-size: 30px;
  color: #f05e53;
}

.item-detail-wrapper .item-name {
  font-size: 18px;
}

.price-wrapper {
  justify-content: space-between;
  align-items: center;
}

.share-button-wrapper {
  display: flex;
  flex: 0 0 auto;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
}

.share-button-wrapper .share-icon {
  font-size: 24px;
  line-height: 24px;
  color: #68be40;
}

.share-button-wrapper .share-text {
  padding-right: 5rpx;
  font-size: 12px;
}

.item-spec-wrapper {
  justify-content: space-between;
  align-items: center;
}

.item-spec-wrapper .right-side-icon {
  display: flex;
  align-items: center;
  font-size: 18px;
  color: #cecece;
}

.item-desc-wrapper {
  font-size: 14px;
  background: #fff;
}

.item-desc-wrapper .item-desc-title {
  padding: 10rpx 20rpx;
  border-bottom: 1px solid #f2f2f2;
}

.item-desc-wrapper .item-desc-text {
  padding: 10rpx 20rpx;
}

.empty-block {
  height: 150rpx;
}

.foot-bar {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100rpx;
  background: #fff;
}

.foot-bar .foot-bar-cell {
  display: flex;
  flex: 1 1 auto;
  width: 0;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  font-size: 12px;
}

.foot-bar .foot-bar-item {
  flex: 0 0 15%;
}

.foot-bar-price {
  font-size: 16px;
  line-height: 18px;
}

.foot-bar .foot-bar-item2 {
  flex: 0 0 35%;
  color: #f05e53;
  background: #ffeeee;
}

.foot-bar .foot-bar-item3 {
  flex: 1 1 auto;
  color: #e8e8e8;
  background: linear-gradient(45deg,#fa9f55,#f05e53,#f33029);
  background-size: 400% 400%;
}

.swiper {
  height: 600rpx;
}

.mt-10 {
  margin-top: 10rpx;
}

.box {
  padding: 10rpx 20rpx;
  background: #fff;
  font-size: 14px;
}

.page-swiper {
  width: 100%;
}

.slide-image {
  width: 100%;
}
</style>
