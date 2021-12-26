# jk-no-data

jk-no-data 缺省图

## 基本用法

适用于列表的缺省状态

::: demo 适用于列表的缺省状态
```vue
<template>
  <div class="page-div">
    <jk-no-data :type="1" :noEmployImg="img" :text="'很抱歉,暂无搜索结果'"></jk-no-data>
  </div>
</template>

<script>
export default {
  name: 'Loading',
  data(){
    return{
      img:'http://wodan-idc.oss-cn-hangzhou.aliyuncs.com/miniProgram/test/jianzhike/no-employ-img.png',
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
| 属性          | 说明     | 类型  | 可选值  | 默认值  |
| :-------------:|:-------:|:-----:|:-------:|:-----:|
| noEmployImg    | 缺省图 | string |-- |空字符 |
| test    | 缺省文本      |   string |  -- |  空字符 |
| height |  高度      |    string,number | -- | auto |


## 组件源码
<<< @/docs/components/common/jk-no-data.vue