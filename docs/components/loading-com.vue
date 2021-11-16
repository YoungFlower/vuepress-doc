<template>
  <div class="loader">
    1
  </div>
</template>

<script>
export default {
  name: 'Loading',
  props: {
    cell: Object
  },
  data() {
    return {
      // hotImg: ossImgUrl + '/test-goods.png' // 商品配图
    }
  },
  methods: {
    // 页面跳转
    // router(path) {
    //   this.$router.push('/' + path)
    // }
  }
}
</script>

<style lang="scss">
.loader {
  font-size: 10px;
  width: 3px;
  height: 3px;
  margin-right: 15px;
  border-radius: 50%;
  text-indent: -9999em;
  position: relative;
  display: inline-block;
  animation: mymove 1.3s infinite linear;
  -webkit-animation: mymove 1.5s infinite linear;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
}

@keyframes mymove {
  0%,
  100% {
    box-shadow: 0 -9px 0 0.6px #ff7d6d, 6px -6px 0 0em #ff7d6d, 9px 0 0 -3px #ff7d6d, 6px 6px 0 -3px #ff7d6d, 0 9px 0 -3px #ff7d6d,
      -6px 6px 0 -3px #ff7d6d, -9px 0 0 -3px #ff7d6d, -6px -6px 0 0 #ff7d6d;
  }
  12.5% {
    box-shadow: 0 -9px 0 0 #ff7d6d, 6px -6px 0 0.6px #ff7d6d, 9px 0 0 0 #ff7d6d, 6px 6px 0 -3px #ff7d6d, 0 9px 0 -3px #ff7d6d,
      -6px 6px 0 -3px #ff7d6d, -9px 0 0 -3px #ff7d6d, -6px -6px 0 -3px #ff7d6d;
  }
  25% {
    box-shadow: 0 -9px 0 -0.15px #ff7d6d, 6px -6px 0 0 #ff7d6d, 9px 0 0 0.6px #ff7d6d, 6px 6px 0 0 #ff7d6d, 0 9px 0 -3px #ff7d6d,
      -6px 6px 0 -3px #ff7d6d, -9px 0 0 -3px #ff7d6d, -6px -6px 0 -3px #ff7d6d;
  }
  37.5% {
    box-shadow: 0 -9px 0 -3px #ff7d6d, 6px -6px 0 -3px #ff7d6d, 9px 0em 0 0 #ff7d6d, 6px 6px 0 0.6px #ff7d6d, 0 9px 0 0em #ff7d6d,
      -6px 6px 0 -3px #ff7d6d, -9px 0em 0 -3px #ff7d6d, -6px -6px 0 -3px #ff7d6d;
  }
  50% {
    box-shadow: 0 -9px 0 -3px #ff7d6d, 6px -6px 0 -3px #ff7d6d, 9px 0 0 -3px #ff7d6d, 6px 6px 0 0em #ff7d6d, 0 9px 0 0.6px #ff7d6d,
      -6px 6px 0 0 #ff7d6d, -9px 0em 0 -3px #ff7d6d, -6px -6px 0 -3px #ff7d6d;
  }
  62.5% {
    box-shadow: 0 -9px 0 -3px #ff7d6d, 6px -6px 0 -3px #ff7d6d, 9px 0 0 -3px #ff7d6d, 6px 6px 0 -3px #ff7d6d, 0 9px 0 0 #ff7d6d,
      -6px 6px 0 0.6px #ff7d6d, -9px 0 0 0 #ff7d6d, -6px -6px 0 -3px #ff7d6d;
  }
  75% {
    box-shadow: 0em -9px 0 -3px #ff7d6d, 6px -6px 0 -3px #ff7d6d, 9px 0em 0 -3px #ff7d6d, 6px 6px 0 -3px #ff7d6d, 0 9px 0 -3px #ff7d6d,
      -6px 6px 0 0 #ff7d6d, -9px 0em 0 0.6px #ff7d6d, -6px -6px 0 0 #ff7d6d;
  }
  87.5% {
    box-shadow: 0em -9px 0 0 #ff7d6d, 6px -6px 0 -3px #ff7d6d, 9px 0 0 -3px #ff7d6d, 6px 6px 0 -3px #ff7d6d, 0 9px 0 -3px #ff7d6d,
      -6px 6px 0 0 #ff7d6d, -9px 0em 0 0 #ff7d6d, -6px -6px 0 0.6px #ff7d6d;
  }
}

@-webkit-keyframes mymove
    /*Safari and Chrome*/ {
  0%,
  100% {
    box-shadow: 0 -9px 0 0.6px #ff7d6d, 6px -6px 0 0em #ff7d6d, 9px 0 0 -3px #ff7d6d, 6px 6px 0 -3px #ff7d6d, 0 9px 0 -3px #ff7d6d,
      -6px 6px 0 -3px #ff7d6d, -9px 0 0 -3px #ff7d6d, -6px -6px 0 0 #ff7d6d;
  }
  12.5% {
    box-shadow: 0 -9px 0 0 #ff7d6d, 6px -6px 0 0.6px #ff7d6d, 9px 0 0 0 #ff7d6d, 6px 6px 0 -3px #ff7d6d, 0 9px 0 -3px #ff7d6d,
      -6px 6px 0 -3px #ff7d6d, -9px 0 0 -3px #ff7d6d, -6px -6px 0 -3px #ff7d6d;
  }
  25% {
    box-shadow: 0 -9px 0 -0.15px #ff7d6d, 6px -6px 0 0 #ff7d6d, 9px 0 0 0.6px #ff7d6d, 6px 6px 0 0 #ff7d6d, 0 9px 0 -3px #ff7d6d,
      -6px 6px 0 -3px #ff7d6d, -9px 0 0 -3px #ff7d6d, -6px -6px 0 -3px #ff7d6d;
  }
  37.5% {
    box-shadow: 0 -9px 0 -3px #ff7d6d, 6px -6px 0 -3px #ff7d6d, 9px 0em 0 0 #ff7d6d, 6px 6px 0 0.6px #ff7d6d, 0 9px 0 0em #ff7d6d,
      -6px 6px 0 -3px #ff7d6d, -9px 0em 0 -3px #ff7d6d, -6px -6px 0 -3px #ff7d6d;
  }
  50% {
    box-shadow: 0 -9px 0 -3px #ff7d6d, 6px -6px 0 -3px #ff7d6d, 9px 0 0 -3px #ff7d6d, 6px 6px 0 0em #ff7d6d, 0 9px 0 0.6px #ff7d6d,
      -6px 6px 0 0 #ff7d6d, -9px 0em 0 -3px #ff7d6d, -6px -6px 0 -3px #ff7d6d;
  }
  62.5% {
    box-shadow: 0 -9px 0 -3px #ff7d6d, 6px -6px 0 -3px #ff7d6d, 9px 0 0 -3px #ff7d6d, 6px 6px 0 -3px #ff7d6d, 0 9px 0 0 #ff7d6d,
      -6px 6px 0 0.6px #ff7d6d, -9px 0 0 0 #ff7d6d, -6px -6px 0 -3px #ff7d6d;
  }
  75% {
    box-shadow: 0em -9px 0 -3px #ff7d6d, 6px -6px 0 -3px #ff7d6d, 9px 0em 0 -3px #ff7d6d, 6px 6px 0 -3px #ff7d6d, 0 9px 0 -3px #ff7d6d,
      -6px 6px 0 0 #ff7d6d, -9px 0em 0 0.6px #ff7d6d, -6px -6px 0 0 #ff7d6d;
  }
  87.5% {
    box-shadow: 0em -9px 0 0 #ff7d6d, 6px -6px 0 -3px #ff7d6d, 9px 0 0 -3px #ff7d6d, 6px 6px 0 -3px #ff7d6d, 0 9px 0 -3px #ff7d6d,
      -6px 6px 0 0 #ff7d6d, -9px 0em 0 0 #ff7d6d, -6px -6px 0 0.6px #ff7d6d;
  }
}
</style>
