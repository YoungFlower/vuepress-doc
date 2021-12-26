# jk-popup-dialog

jk-popup-dialog

## 基本用法
::: demo jk-popup-dialog  适用于h5页面中自定义的弹窗
```vue
<template>
  <div class="page-div">
    <jk-van-popup v-model="show" :title="'联系雇主'" content="188*****822" :text-right="'拨打'" :text-left="'取消'"
        @confirm="confirmEvent" @cancel="cancelEvent" />
    <el-button @click="open">打开弹窗</el-button>
  </div>
</template>

<script>
export default {
  name: 'jk-popup-dialog',
  data(){
    return{
      show:false
    }
  },
  methods:{
    confirmEvent(){
      this.$toast('确认点击')
      this.show=false
    },
    cancelEvent(){
      this.show=false
      this.$toast('取消点击')
    },
    open(){
      this.show=true
    }
  }
}
</script>

<style>
  .page-div{
    width:375px;
    height:667px;
    background:#f2f2f2;
    
  }
</style>
```
:::

## 属性
| 参数      | 说明值                                    | 参数类型 | 参数可选值 | 默认值                                                                               |
| :-----------: | :----------------: | :--------: | :-----------: | :--------: |
| dialogImage | 弹窗背景                                 | string   |             | http://wodan-idc.oss-cn-hangzhou.aliyuncs.com/miniProgram/test/jianzhike/dialog-img.png |
| oneButton   | 这是弹窗按钮是否为一个            | Boolean  | false，true | fasle                                                                                   |
| title       | 弹窗显示的标题                        | string   | -           | -                                                                                       |
| content     | 对话框内容                              | string   | -           | -                                                                                       |
| textLeft    | 当oneButton为false使用，设置弹窗左边按钮文字 | string   | -           | 取消                                                                                  |
| textRight   | 当oneButton为false使用，设置弹窗右边按钮文字 | string   | -           | 确定                                                                                  |
| textCenter  | 当oneButton为true使用，设置弹窗右边按钮文字 | string   | -           | 知道了                                                                               |


## 事件

| 事件名 | 说明                         | 回调参数 |
| :-------: | :------------------------------: | :--------: |
| confirm | 点击确认或中间按钮后触发的事件 | -        |
| cancel  | 点击取消后触发的事件 | -        |

[van-popup属性及参数](https://youzan.github.io/vant/#/zh-CN/popup)

## 组件源码
<<< @/docs/components/vant/jk-van-popup.vue