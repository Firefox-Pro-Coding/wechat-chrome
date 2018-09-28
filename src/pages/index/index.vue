<template>
  <div class="container">

    <div class="userinfo" @click="bindViewTap">
      <img class="userinfo-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover" />
      <div class="userinfo-nickname">
        <card :text="userInfo.nickName"></card>
      </div>
    </div>

    <div class="usermotto">
      <div class="user-motto">
        <card :text="motto"></card>
      </div>
    </div>

    <button
      class="user-info-btn"
      open-type="getUserInfo"
      @getuserinfo="bindGetUserInfo"
      @click="checkUserWxVersion"
      v-if="!userInfo.avatarUrl">
      获取授权
    </button>

    <div v-if="userInfo.avatarUrl">
      <form class="form-container">
        <input type="text" class="form-control" v-model="motto" placeholder="v-model" />
        <input type="text" class="form-control" v-model.lazy="motto" placeholder="v-model.lazy" />
      </form>
      <a class="counter link" href="/pages/counter/main">Go to Vuex Demo</a>

      <button class="launch-app-btn" app-parameter="wechat" open-type="launchApp" @error="launchAppError">打开App</button>
    </div>
  </div>
</template>

<script src="./index.ts" lang="ts"></script>

<style lang="less" scoped>
  .userinfo {
    display: flex;
    flex-direction: column;
    align-items: center;

    .userinfo-avatar {
      width: 128rpx;
      height: 128rpx;
      margin: 20rpx;
      border-radius: 50%;
    }

    .userinfo-nickname {
      color: #aaa;
    }
  }

  .usermotto {
    margin-top: 20px;
  }

  .user-info-btn {
    margin-bottom: 20px;
    font-size: 14px;
  }

  .launch-app-btn {
    font-size: 14px;
    width: 200rpx;
  }

  .form-control {
    display: block;
    padding: 0 12px;
    margin-bottom: 5px;
    border: 1px solid #ccc;
  }

  .counter {
    display: inline-block;
    margin: 10px auto;
    padding: 5px 10px;
  }
</style>
