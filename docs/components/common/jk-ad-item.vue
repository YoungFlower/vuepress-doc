<template>
  <div v-show="showAd&&unitId" class="jk-ad-item">
    <ad :unit-id="unitId" :ad-type="adType" :ad-theme="adTheme" @load="adLoad" @error="adError" @close="adClose"></ad>
  </div>
</template>

<script>
export default {
  props: {
    unitId: {
      type: String,
      default: ''
    },
    adType: {
      type: String,
      default: ''
    },
    adTheme: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      showAd: false
    }
  },
  methods: {
    // 广告加载成功
    adLoad() {
      this.showAd = true
      console.log(`${this.adType || 'Banner'}广告加载成功`)
    },
    // 广告加载失败
    adError(err) {
      this.showAd = false
      console.log(`${this.unitId}广告加载失败`, err)
    },
    // 广告关闭
    adClose() {
      this.showAd = false
      console.log(`${this.adType || 'Banner'}广告关闭`)
    }
  }
}
</script>

<style lang="scss">
.jk-ad-item {
  .hidden-ad {
    display: none;
    height: 0;
  }
  .show-ad {
    display: block;
  }
}
</style>
