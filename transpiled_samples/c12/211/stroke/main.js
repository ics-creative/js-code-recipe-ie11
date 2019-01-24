// キャンバス要素の参照を取得
var canvas = document.querySelector('#my-canvas'); // コンテキストを取得

var context = canvas.getContext('2d'); // 線の幅を指定

context.lineWidth = 3; // 選の色を指定

context.strokeStyle = 'red'; // 矩形を線で描く

context.strokeRect(0, 0, 100, 100);