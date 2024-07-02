// スクリプト開始時の時間を記録
var oldTime = Date.now();
setInterval(function () {
  var currentTime = Date.now();
  // 経過したミリ秒を取得
  var diff = currentTime - oldTime;

  // 秒数を得る
  var sec = Math.floor(diff / 1000);

  // HTMLに文字列を挿入
  document.querySelector('#log').innerHTML = sec + "\u79D2\u304C\u7D4C\u904E";
}, 1000);