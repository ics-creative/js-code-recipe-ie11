var STAGE_W = 300; // 幅
var STAGE_H = 300; // 高さ
var CENTER_X = STAGE_W / 2; // 中心X座標
var CENTER_Y = STAGE_H / 2; // 中心Y座標
var MAX = 150; // ループ回数

// 変数の初期化
var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
var n = 0; // カウント

// アニメーションを開始
tick();
function tick() {
  // 描画をリセット
  context.clearRect(0, 0, STAGE_W, STAGE_H);

  // 変数
  var oldX = CENTER_X;
  var oldY = CENTER_Y;

  // 模様を描く
  for (var i = 0; i < MAX; i++) {
    context.beginPath();
    context.lineWidth = 1;
    context.strokeStyle = 'hsl(' + (i / MAX * 360 + n * 4000) + ', 100%, 50%)';
    context.moveTo(oldX, oldY);
    context.lineTo(oldX = CENTER_X + i * Math.cos(i + i * n), oldY = CENTER_Y + i * Math.sin(i + i * n));
    context.stroke();
  }

  // カウントを更新
  n += 0.00025;
  requestAnimationFrame(tick);
}

// JPEG 画像を取得
var btnJpeg = document.querySelector('#btnJpeg');
btnJpeg.addEventListener('click', function () {
  var data = canvas.toDataURL('image/jpeg');
  cloneToImage(data);
});

// PNG 画像を取得
var btnPng = document.querySelector('#btnPng');
btnPng.addEventListener('click', function () {
  var data = canvas.toDataURL('image/png');
  cloneToImage(data);
});

// WebP 画像を取得
var btnWebp = document.querySelector('#btnWebp');
btnWebp.addEventListener('click', function () {
  var data = canvas.toDataURL('image/webp');
  cloneToImage(data);
});

// img要素にDataURLの文字列を代入
function cloneToImage(data) {
  document.querySelector('#myImg').src = data;
}