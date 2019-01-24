var date = new Date();
var day = date.getDay();
var dayList = ['日', '月', '火', '水', '木', '金', '土'];
var label = dayList[day]; // HTMLに表示

document.querySelector('#log').innerHTML = "\u4ECA\u65E5\u306F" + label + "\u66DC\u65E5\u3067\u3059";