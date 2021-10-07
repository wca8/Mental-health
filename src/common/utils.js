//debounce 防抖动
export function isEmpty(obj) {
  if (typeof obj == "undefined" || obj == null || obj.trim() == "") {
    return true;
  }else{
    return  false
  }
}


export function isEmpty_(obj) {
  if (typeof obj == "undefined" || obj == null || obj == "") {
    return true;
  }else{
    return  false
  }
}

export function debounce(func, delay=50) {
  let timer = null;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}


export function randomRange(min, max){
  var returnStr = "",
      range = (max ? Math.round(Math.random() * (max-min)) + min : min),
      arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  for(var i=0; i<range; i++){
    var index = Math.round(Math.random() * (arr.length-1));
    returnStr += arr[index];
  }
  return returnStr;
}


// 时间戳转换
export function formatDate(date, fmt) {
  //1、获取年份
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  //2、获取
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + '';
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
    }
  }
  return fmt;
};

function padLeftZero (str) {
  return ('00' + str).substr(str.length);
};


export function random(m, n) {
  var num = Math.floor(Math.random() * (m - n) + n);
  return num;
}
