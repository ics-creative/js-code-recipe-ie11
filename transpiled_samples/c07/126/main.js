// タッチエリア
var targetBox = document.querySelector('.box');
// ログ
var log = document.querySelector('.log');

// 画面上でタッチ位置を移動したら、ログを表示
targetBox.addEventListener('touchmove', function () {
  var touch = event.changedTouches;
  log.innerHTML = "\n   " + touch[0].pageX.toFixed(2) + "<br>\n   " + touch[0].pageY.toFixed(2) + "\n  ";
});