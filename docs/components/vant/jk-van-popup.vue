<template>
  <van-popup v-bind="$attrs">
    <div class="uni-popup-dialog">
      <div class="uni-dialog-bgc" v-if="dialogImage">
        <img :src="dialogImage" style="width:100%;height: 100px;"></img>
      </div>
      <div class="uni-dialog-title" v-if="title">
        <span class="uni-dialog-title-text" :style="{'margin-top':(dialogImage==''?'28px':'')}">{{title}}</span>
      </div>
      <div class="uni-dialog-content">
        <span class="uni-dialog-content-text" :style="{'margin-top':(title ==''?'12px':'')}">{{content}}</span>
      </div>
      <div class="uni-dialog-button-group">
        <div class="uni-dialog-button" v-if="oneButton" @click="onOk">
          <span class="uni-dialog-button-text uni-button-color">{{textCenter}}</span>
        </div>
        <div class="uni-dialog-button" v-else>
          <div class="uni-dialog-button" @click="close">
            <span class="uni-dialog-button-text">{{textLeft}}</span>
          </div>
          <div class="uni-dialog-button uni-border-left" @click="onOk">
            <span class="uni-dialog-button-text uni-button-color">{{textRight}}</span>
          </div>
        </div>
      </div>
    </div>
  </van-popup>
</template>

<script>
export default {
  name: 'uniPopupDialog',
  props: {
    /**
     * 对话框背景
     */
    dialogImage: {
      type: String,
      default: 'http://wodan-idc.oss-cn-hangzhou.aliyuncs.com/miniProgram/test/jianzhike/dialog-img.png'
    },
    /**
     * 对话框按钮（是否只有一个）
     */
    oneButton: {
      type: Boolean,
      default: false
    },
    /**
     * 对话框标题
     */
    title: {
      type: String,
      default: ''
    },
    /**
     * 对话框内容
     */
    content: {
      type: String,
      default: ''
    },
    /**
     * 对话框操作
     */
    textLeft: {
      type: String,
      default: '取消'
    },
    textRight: {
      type: String,
      default: '确定'
    },
    textCenter: {
      type: String,
      default: '知道了'
    },
    /**
     * 拦截取消事件 ，如果拦截取消事件，必须监听close事件，执行 done()
     */
    beforeClose: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      show: false
    }
  },
  methods: {
    /**
     * 点击确认按钮
     */
    onOk() {
      this.$emit('confirm', () => {
        this.show = false
      })
    },
    /**
     * 点击取消按钮
     */
    close() {
      this.$emit('cancel', () => {
        this.show = false
      })
      if (this.beforeClose) {
        this.$parent.$parent.backFunction && this.$parent.$parent.backFunction()
      }
    },
    open() {
      this.show = true
    }
  }
}
</script>

<style lang="scss" scoped>
.van-overlay {
  display: flex;
  align-items: center;
  justify-content: center;
}
.van-popup {
  background: rgba(0, 0, 0, 0);
}
.uni-popup-dialog {
  width: 280px;
  border-radius: $fs2;
  overflow: hidden;
  background-color: #fff;
  margin: auto;
}

/* 没有这一行，会有默认8px的间距 */
.uni-dialog-bgc {
  height: 100px;
}

.uni-dialog-title {
  display: flex;
  justify-content: center;
  align-items: center;
}

.uni-dialog-title-text {
  font-size: $fs1;
  line-height: $fs1;
  font-weight: 600;
  color: #000000;
  font-family: PingFangSC-Medium, PingFang SC;
}

.uni-dialog-content {
  display: flex;
  justify-content: center;
  align-items: center;
}

.uni-dialog-content-text {
  font-size: $fs3;
  line-height: $fs0;
  font-weight: 500;
  color: #000000;
  margin: 20px auto;
  font-family: PingFangSC-Regular, PingFang SC;
}

.uni-dialog-button-group {
  display: flex;
  border-top-color: #d8d8d8;
  border-top-style: solid;
  border-top-width: 1px;
  width: 100%;
  height: 48.5px;
}

.uni-dialog-button {
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 48px;
}

.uni-border-left {
  border-left-color: #d8d8d8;
  border-left-style: solid;
  border-left-width: 1px;
}

.uni-dialog-button-text {
  font-size: $fs2;
  color: $tc2;
}

.uni-button-color {
  color: $mc1;
}

.uni-dialog-input {
  flex: 1;
  font-size: 14px;
}

.uni-popup__success {
  color: #4cd964;
}

.uni-popup__warn {
  color: #f0ad4e;
}

.uni-popup__error {
  color: #dd524d;
}

.uni-popup__info {
  color: #909399;
}
</style>
