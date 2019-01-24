// scrollX、scrollYがサポートされているかどうか
// IE11では未対応なので、window.pageXOffset、window.pageYOffsetを使う
// 参考：https://developer.mozilla.org/ja/docs/Web/API/Window/scrollX
var supportScrollX = window.scrollX != null; // ウインドウ上でスクロールする毎に「スクロール」と座標が出力される

window.addEventListener('scroll', function () {
  var scrollXOffset = supportScrollX ? window.scrollX : window.pageXOffset;
  var scrollYOffset = supportScrollX ? window.scrollY : window.pageYOffset;
  console.log('スクロール', scrollXOffset, scrollYOffset);
});