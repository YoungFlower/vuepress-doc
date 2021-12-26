# 普通浏览器下的公共方法

## 防抖函数 antiShake
```js
export function antiShake(callBack, intervalTime = 500) {
  let interval = null
  return function () {
    if (interval) {
      clearTimeout(interval)
      interval = setTimeout(callBack, intervalTime);
    } else if (!interval) {
      interval = setTimeout(callBack, intervalTime);
    }
  }
}
```
#### 推荐使用方式
```js
// 先定义一个方法
function funA () =>{
  console.log('我是方法A')
} 

//使用antiShake传入一个funA  返回一个方法用antiShackFunA接收
let antiShackFunA = antiShake(funA)

//在需要为FunA防抖的地方使用antiShackFunA方法即可
antiShackFunA()
```

#### 传入参数
| 参数名    | 参数类型       | 默认值 | 说明 |
| ------------ | ------------------ | ------ | ---- |
| callBack     | function  | -      | 需要防抖处理的方法|
| intervalTime | number | 500    | 防抖限制时间（ms）|


## 时间戳转标准时间 parseTime
```js
// 时间戳转标准时间
export const parseTime = function (time, cFormat) {
  if (arguments.length === 0) {
    return null
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if ((typeof time === 'string') && (/^[0-9]+$/.test(time))) {
      time = parseInt(time)
    }
    if ((typeof time === 'number') && (time.toString().length === 10)) {
      time = time * 1000
    }
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key]
    // Note: getDay() returns 0 on Sunday
    if (key === 'a') {
      return ['日', '一', '二', '三', '四', '五', '六'][value]
    }
    if (result.length > 0 && value < 10) {
      value = '0' + value
    }
    return value || 0
  })
  return time_str
}
```

#### 推荐使用方式
```js
let timeString = parseTime(new Date())
```

#### 传入参数
| 参数名    | 参数类型       | 默认值 | 说明 |
| ------------ | ------------------ | ------ | ---- |
| time     | string,number,object | -      | 需要被格式化的时间 |
| cFormat | string | {y}-{m}-{d} {h}:{i}:{s}  | 处理完成后的格式 |


## 深拷贝对象 deepClone
```js
// 深拷贝对象
export function deepClone(source) {
  return _deepClone(source)

  function _deepClone(source) {
    let target;
    if (typeof source === 'object') {
      target = Array.isArray(source) ? [] : {}
      for (let key in source) {
        if (source.hasOwnProperty(key)) {
          if (typeof source[key] !== 'object' || source[key] == null) {
            target[key] = source[key]
          } else {
            target[key] = _deepClone(source[key])
          }
        }
      }
    } else {
      target = source
    }
    return target
  }
}
```

#### 推荐使用方式
```js
// 假设有一个带函数的对象需要拷贝赋值给另一个参数
let a={
  b:function() {
    console.log()
  },
  c:1,
  d:[1,2,3,4]
}

// 直接使用deepClone方法进行深拷贝
let b = deepClone(a)

// 此时b的内容为
// {
//   b:function() {
//     console.log()
//   },
//   c:1,
//   d:[1,2,3,4]
// }

// 若使用
let b=JSON.parse(JSON.stringify(a))

// 此时b的内容为
// {
//   c:1,
//   d:[1,2,3,4]
// }
```

#### 传入参数
| 参数名    | 参数类型       | 默认值 | 说明 |
| ------------ | ------------------ | ------ | ----- |
| source     | object | -      | 需要被深拷贝的对象 |



## 获取当前页面url上的参数 getQueryString
```js
//  获取当前页面url上的参数
export const getQueryString = function (name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", 'i');
  var r = window.location.search.substr(1).match(reg); //search,查询？后面的参数，并匹配正则
  var r2 = window.location.hash.substr(1).match(reg); //search,查询？后面的参数，并匹配正则
  if (r != null) return decodeURIComponent(r[2]);
  if (r2 != null) return decodeURIComponent(r2[2]);
  if (window.location.hash && window.location.hash.indexOf('?') != -1) {
    var r3 = window.location.hash.split('?')[1].match(reg) //hash,剔除掉路由查询？后面的参数，并匹配正则
    if (r3 != null) return decodeURIComponent(r3[2]);
  }
  return null;
}
```

#### 推荐使用方式
```js
let queryString = getQueryString('参数名')
```

#### 传入参数
| 参数名    | 参数类型       | 默认值 | 说明|
| ------------ | ------------------ | ------ | ---- |
| name     | string | -      | 需要从url中获取值的参数名 |


## 删除url上的参数 urlDelParam

```js
//  删除url上的参数
export function urlDelParam(url, name) {
  let urlArr = decodeURIComponent(url).split('?');
  if (urlArr.length > 1 && urlArr[1].indexOf(name) > -1) {
    let query = urlArr[1];
    let arr = query.split("&");
    let urlte = urlArr[0] + '?'
    let paramStr = ''
    for (let i = 0; i < arr.length; i++) {
      let key = arr[i].split("=")[0]
      let value = arr[i].split("=")[1];
      if (key !== name) {
        paramStr = i === 0 ? paramStr : paramStr + '&'
        paramStr = paramStr + key + '=' + value
      }
    }
    return urlte + paramStr;
  } else {
    return url;
  }
}
```
#### 推荐使用方式
```js
let url="abc.com?id=1"
let name = "id"

// 传入需要被处理的url及要被删除的参数名即可
url = urlDelParam(url,name)
```

#### 传入参数
| 参数名    | 参数类型       | 默认值 | 说明 |
| ------------ | ------------------ | ------ | --- |
| url     | string | -      | 需要处理的url|
| name | string | -  | 需要被删除的参数名|




## 将参数拼接到路径上 putParameterToUrl
```js
//  将参数拼接到路径上
export function putParameterToUrl(values, sURL) {
  let params = "";
  for (let v in values) {
    if (v !== undefined) {
      params = v + '=' + values[v];
    }
  }
  if (sURL.indexOf('?') === -1) {
    params = '?' + params;
  } else {
    params = '&' + params;
  }
  return sURL + params;
}
```

#### 推荐使用方式
```js
let sURL="abc.com?id=1"
let values = {
  id="1"
}

// 传入需要被处理的url及要添加的参数对象即可
url = putParameterToUrl(values,url)
```
#### 传入参数
| 参数名    | 参数类型       | 默认值 | 说明 |
| ------------ | ------------------ | ------ | --- |
| values     | object | -      | 需要添加的参数及值 |
| sURL | string | -  | 需要被处理的url|


## 方法文件源码
<<< @/docs/function/h5-util.js