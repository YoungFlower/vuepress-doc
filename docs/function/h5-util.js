// 防抖函数
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