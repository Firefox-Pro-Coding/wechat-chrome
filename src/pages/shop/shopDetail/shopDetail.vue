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
          <span class="item-price">{{ itemInfo.price }}</span>
        </div>

        <div class="share-button-wrapper flex-co" @click="openShareActionSheet">
          <i class="iconfont icon-share share-icon" aria-hidden="true"></i>
          <div class="share-text">分享</div>
        </div>
      </div>
      <div class="item-name">{{ itemInfo.name }}</div>
    </div>

    <div class="box mt-10 flex item-spec-wrapper" @click="choseItemSpec">
      <div class="left-side-text">规格</div>
      <i class="iconfont icon-right right-side-icon"></i>
    </div>

    <div class="mt-10 item-desc-wrapper">
      <div class="item-desc-title">商品详情</div>
      <div class="item-desc-text">{{ itemInfo.detail }}</div>
    </div>

    <div class="empty-block">&nbsp;</div>

    <div class="foot-bar flex clearfix">
      <div class="foot-bar-cell foot-bar-item" @click="navToHome">
        <i class="iconfont icon-home foot-bar-home-icon"></i>
        <div>首页</div>
      </div>
      <div class="foot-bar-cell foot-bar-item2" @click="choseItemSpec('buy')">
        <div class="foot-bar-price">¥ {{ itemInfo.price }}</div>
        <div>单独购买</div>
      </div>
      <div class="foot-bar-cell foot-bar-item3">
        <div class="foot-bar-price">¥ {{ itemInfo.groupPrice }}</div>
        <div>拼团</div>
      </div>
    </div>

    <custom-action-sheet
      ref="actionSheet1"
      :offset="100">
      <div class="spec-bar">
        <div class="spec-title">
          <div class="spec-title-left">
            <div class="spec-title-img-outter">
              <div class="spec-title-img-wrapper">
                <img class="spec-title-img" src="https://i.loli.net/2018/08/17/5b7688b39548e.png" alt="item">
              </div>
            </div>
            <div class="spec-title-text">
              <div class="spec-title-text-cell price">¥ {{ itemInfo.price }}</div>
              <div class="spec-title-text-cell store">库存 {{ itemInfo.stock }} 件</div>
            </div>
          </div>

          <i class="spec-title-right iconfont icon-close" @click="$refs.actionSheet1.close()"></i>
        </div>

        <div class="spec-wrapper">
          <div
            class="spec-item-cell"
            :class="{ selected: item.selected }"
            @click="selectItemSpec(item, itemSpecs)"
            v-for="(item, index) of itemSpecs"
            :key="index">
            {{ item.specName }}
          </div>
        </div>

        <div class="counter-wrapper">
          <div class="counter-wrapper-left">数量</div>
          <div class="counter-wrapper-right">
            <span class="counter-btn" :class="{ disabled: itemInfo.count <= 1 }" @click="decrement(itemInfo)">
              <i class="iconfont icon-minus"></i>
            </span>
            <span class="counter-text">{{ itemInfo.count }}</span>
            <span class="counter-btn" :class="{ disabled: itemInfo.count >= itemInfo.stock }" @click="increment(itemInfo)">
              <i class="iconfont icon-plus"></i>
            </span>
          </div>
        </div>
      </div>
    </custom-action-sheet>

    <custom-action-sheet ref="actionSheet2">
      <div class="share-bar">
        <div class="share-wrapper">
          <div class="share-cell">
            <i class="share-cell-icon iconfont icon-wechat" @click="shareToFriends"></i>
            <div class="share-cell-text">分享给朋友</div>
          </div>
          <div class="share-cell">
            <i class="share-cell-icon iconfont icon-qrcode" @click="createPost"></i>
            <div class="share-cell-text">生成商品海报</div>
          </div>
        </div>

        <div class="share-close" @click="$refs.actionSheet2.close()">关闭</div>
      </div>
    </custom-action-sheet>
  </div>
</template>

<script src="./shopDetail.ts" lang="ts"></script>
<style src="./shopDetail.less" lang="less" scoped></style>
