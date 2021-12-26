# jk-ad-item

腾讯广告处理方式


## 基本用法


在需要使用的地方直接引入并赋予小程序后台审核通过的广告id（unitId）即可
```html
<template>
  <div><jk-ad-item v-if="unitId" :unit-id="unitId"></jk-ad-item></div>
</template>

<script>
export default {
  name: 'Loading',
  data() {
    return{
      unitId:"111111"//小程序后台的广告id
    }
  }
}
</script>

<style lang="scss">
</style>
```

## 组件源码
<<< @/docs/components/common/jk-ad-item.vue