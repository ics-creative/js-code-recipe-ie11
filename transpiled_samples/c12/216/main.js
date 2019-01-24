// キャンバス要素の参照を取得
var canvas = document.querySelector('#my-canvas'); // コンテキストを取得

var context = canvas.getContext('2d');
context.fillStyle = 'red';
context.fillRect(0, 0, 100, 100);
context.fillStyle = 'green';
context.fillRect(25, 25, 50, 50); // Base64の文字列を得る

var data = canvas.toDataURL();
console.log(data); // img要素に代入する

var img = document.querySelector('#my-img');
img.src = data;