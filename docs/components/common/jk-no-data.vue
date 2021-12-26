<template>
  <div class="jk-no-data flex-col-center" :style="{'height':height}">
    <div class="no-data flex-col flex-align-center">
      <template :type="1">
        <img :src="noEmployImg" alt="" style="margin-top: 0;">
        <div class="tip-text">
          {{text}}
        </div>
      </template>

    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {}
  },
  props: {
    type: {
      type: Number,
      default: 1
    },
    height: {
      type: String,
      default: 'auto'
    },
    noEmployImg: {
      type: String,
      default: ''
    },
    text: { type: String, default: '暂无数据' }
  },
  watch: {},
  methods: {}
}
</script>

<style lang="scss">
.jk-no-data {
  .no-data {
    img,
    image {
      margin-top: 90rpx;
      width: 550rpx;
      height: 400rpx;
    }
    .tip-text {
      margin: 40rpx 0;
      font-size: 28rpx;
      color: #b4b8b8;
      line-height: 28rpx;
      text-align: center;
    }
  }
}
</style>
