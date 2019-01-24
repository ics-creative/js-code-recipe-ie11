// キャンバス要素の参照を取得
var canvas = document.querySelector('#my-canvas'); // コンテキストを取得

var context = canvas.getContext('2d'); // Imageインスタンスを作成

var img = new Image(); // 画像読み込み後の処理

img.onload = function () {
  // コンテキストを通してcanvasに描く
  context.drawImage(img, 0, 0);
}; // 画像を読み込みを開始する


img.src = 'sample.jpg'; // マウスが動いたとき

canvas.addEventListener('mousemove', function (event) {
  // マウスの座標を取得
  var x = event.layerX;
  var y = event.layerY; // ImageDataを取得

  var imageData = context.getImageData(x, y, 1, 1); // 画素配列を取得

  var data = imageData.data;
  var r = data[0]; // 赤

  var g = data[1]; // 緑

  var b = data[2]; // 青

  var a = data[3]; // アルファ
  // 文字列として色情報を扱う

  var color = "rgba(" + r + ", " + g + ", " + b + ", " + a + ")";
  var el = document.querySelector('.log'); // 背景色に指定

  el.style.background = color; // 文字として指定

  el.textContent = color;
});