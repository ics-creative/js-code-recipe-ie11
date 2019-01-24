var date = new Date();
var month = date.getMonth() + 1; // 月

var day = date.getDate(); // 日

var label = month + "\u6708" + day + "\u65E5"; // 日付表記
// HTMLに文字列を挿入

document.querySelector('#log').innerHTML = "\u4ECA\u65E5\u306F" + label + "\u3067\u3059";