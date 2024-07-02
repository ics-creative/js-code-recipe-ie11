window.addEventListener('resize', resizeHandler);
function resizeHandler(event) {
  // 新しい画面幅
  var w = innerWidth;
  // 新しい画面高さ
  var h = innerHeight;
  document.querySelector('.value-width').innerHTML = "\u6A2A\u5E45\u306F " + w + "px \u3067\u3059";
  document.querySelector('.value-height').innerHTML = "\u9AD8\u3055\u306F " + h + "px \u3067\u3059";
}