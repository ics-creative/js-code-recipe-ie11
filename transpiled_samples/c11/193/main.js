// 保存用にMapを用意
var srcMap = new Map();
window.addEventListener('DOMContentLoaded', function () {
  // img要素を一括で参照
  var imgs = document.querySelectorAll('img');
  imgs.forEach(function (img) {
    // 各img要素のdata-src属性をMapに保存
    srcMap.set(img, img.dataset.src); // 遅延読み込みのため空にしておく

    img.removeAttribute('src');
  });
});
var btn = document.querySelector('.btn');
btn.addEventListener('click', function () {
  // img要素を一括で参照
  var imgs = document.querySelectorAll('img');
  imgs.forEach(function (img) {
    // 保存していたMapからsrcを割り当てる
    var source = srcMap.get(img);
    img.src = source;
  });
});