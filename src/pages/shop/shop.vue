<template>
  <div class="page">
    <noticeBar :text="noticeInfo"></noticeBar>

    <div class="page-swiper">
      <div class="page__bd page__bd_spacing">
        <swiper :indicator-dots="swiperConfig.indicatorDots" :autoplay="swiperConfig.autoplay" :interval="swiperConfig.interval" :duration="swiperConfig.duration" :circular="swiperConfig.circular" @change="swiperChange" @animationfinish="animationfinish">
          <div v-for="(item, index) in swiperConfig.imgUrls" :key="index">
            <swiper-item>
              <image :src="item" class="slide-image" mode="widthFix" />
            </swiper-item>
          </div>
        </swiper>
      </div>
    </div>

    <div class="box mt-10">今日专题</div>

    <topic-card :topic-card-config="topicCardConfig"></topic-card>

  </div>
</template>

<script src="./shop.ts" lang="ts"></script>

<style scoped>
.flex {
  display: flex;
  flex-flow: row nowrap;
}

.flex-co {
  display: flex;
  flex-flow: column nowrap;
}

.mt-10 {
  margin-top: 10rpx;
}

.box {
  padding: 10rpx 20rpx;
  background: #fff;
  font-size: 14px;
}

.swiper-page {
  width: 100%;
}
.slide-image {
  width: 100%;
}
</style>
