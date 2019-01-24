var totalTime = 10000; // 10秒

var oldTime = Date.now();
var timerId = setInterval(function () {
  var currentTime = Date.now(); // 差分を求める

  var diff = currentTime - oldTime; // 残りミリ秒を計算する

  var remainMSec = totalTime - diff; // ミリ秒を整数の秒数に変換する

  var remainSec = Math.ceil(remainMSec / 1000);
  var label = "\u6B8B\u308A" + remainSec + "\u79D2"; // 0秒以下になったら

  if (remainMSec <= 0) {
    // タイマーを終了する
    clearInterval(timerId); // タイマー終了の文言を表示

    label = '終了';
  } // 画面に表示する


  document.querySelector('#log').innerHTML = label;
}, 1000);