var date = new Date();
var hour = date.getHours(); // 時間
var minutes = date.getMinutes(); // 分
var seconds = date.getSeconds(); // 秒

var label = hour + "\u6642" + minutes + "\u5206" + seconds + "\u79D2";

// HTMLに文字列を挿入
document.querySelector('#log').innerHTML = "\u73FE\u6642\u523B\u306F" + label + "\u3067\u3059";