<template>
  <div
    class="dialog"
    :class="classNames"
    :style="{ bottom: offset + 'rpx' }"
    v-if="visible">
    <div class="dialog-mask" @click="close"></div>
    <div class="dialog-content">
      <slot></slot>
    </div>
  </div>
</template>

<script src="./customActionSheet.ts" lang="ts"></script>

<style lang="less" scoped>
  .dialog {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 100;
    overflow: hidden;
    transition: 0.3s;

    &.enter-to, &.leave {
      .dialog-mask {
        background: rgba(0, 0, 0, 0.3);
      }

      .dialog-content {
        transform: translateY(0);
      }
    }

    &.leave-to, &.enter {
      .dialog-mask {
        background: rgba(0, 0, 0, 0);
      }

      .dialog-content {
        transform: translateY(100%);
      }
    }

    .dialog-mask {
      position: relative;
      z-index: 1;
      height: 100%;
      widows: 100%;
      background: rgba(0, 0, 0, 0.3);
      transition: 0.3s;
    }

    .dialog-content {
      width: 100%;
      background: white;
      position: absolute;
      bottom: 0;
      left: 0;
      transition: 0.3s;
      transform: translateY(0);
      z-index: 2;
    }
  }
</style>
