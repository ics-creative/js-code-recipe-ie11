// キャンバス要素の参照を取得
var canvas = document.querySelector('#my-canvas');
// コンテキストを取得
var context = canvas.getContext('2d');

// Imageインスタンスを作成
var img = new Image();
// 画像読み込み後の処理
img.onload = function () {
  // コンテキストを通してcanvasに描く
  context.drawImage(img, 0, 0);
};
// 画像を読み込みを開始する
img.src = 'sample.jpg';