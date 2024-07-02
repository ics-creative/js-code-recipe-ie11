// デバイスピクセル比を取得
var dpr = window.devicePixelRatio;
// キャンバスの論理的な大きさ
var w = 200;
var h = 200;

// canvas要素のサイズ調整
var canvas = document.querySelector('canvas');
canvas.width = w * dpr; // 実態の大きさは倍にする
canvas.height = h * dpr;
canvas.style.width = w + 'px'; // 画面表示上のサイズ
canvas.style.height = h + 'px';
var context = canvas.getContext('2d');
// スケールを設定
context.scale(dpr, dpr); // 内部的に倍で描く
// 円を描く
context.fillStyle = 'red';
context.arc(w / 2, h / 2, 100, 0, 2 * Math.PI);
context.fill();

// 画面上にログを表示させる
document.querySelector('.log').innerHTML = "\u73FE\u5728\u306E\u30C7\u30D0\u30A4\u30B9\u30D4\u30AF\u30BB\u30EB\u6BD4\u306F " + dpr + " \u3067\u3059";