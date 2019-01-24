// 参照を取得
var numA = document.querySelector('#numA');
var numB = document.querySelector('#numB');
var result = document.querySelector('.result');
var btn = document.querySelector('button'); // ワーカーを作成

var worker = new Worker('worker.js'); // ボタンをクリックしたとき

btn.addEventListener('click', function () {
  worker.postMessage([Number(numA.value), Number(numB.value)]);
  console.log('[メインスクリプト] ワーカーへメッセージを送信');
}); // ワーカーから受信したとき

worker.onmessage = function (e) {
  // 結果を画面に表示
  result.textContent = e.data;
  console.log('[メインスクリプト] ワーカーからメッセージを受信');
};