var date = new Date();
var locale = date.toLocaleString(); // 例: '2018/8/29 16:15:34'

var localeDate = date.toLocaleDateString(); // 例: '2018/8/29'

var localeTime = date.toLocaleTimeString(); // 例: '16:15:34'
// HTMLに文字列を挿入

document.querySelector('#log').innerHTML = locale + "<br />\n   " + localeDate + "<br />\n   " + localeTime;