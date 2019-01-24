// キャンバス要素の参照を取得
var canvas = document.querySelector('#my-canvas'); // コンテキストを取得

var context = canvas.getContext('2d'); // 図形を描く

context.fillRect(0, 0, 100, 100);