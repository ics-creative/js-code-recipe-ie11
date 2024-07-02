var date = new Date();
var hour = date.getHours();
var meridiem; // 午前か午後か
var hour2; // 時刻
if (hour < 12) {
  meridiem = '午前';
  hour2 = hour;
} else {
  meridiem = '午後';
  hour2 = hour - 12;
}
var label = "" + meridiem + hour2 + "\u6642";

// HTMLに文字列を挿入
document.querySelector('#log').innerHTML = "\u73FE\u6642\u523B\u306F" + label + "\u3067\u3059";