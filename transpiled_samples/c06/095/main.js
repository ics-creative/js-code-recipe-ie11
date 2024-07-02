// ボタンの参照
var btn = document.querySelector('button');

// ボタンをクリックしたとき
btn.addEventListener('click', function (event) {
  // コンファームを表示
  var isYes = confirm('天気は晴れていますか？');
  // ユーザーが入力した結果を画面に表示
  document.querySelector('.log').innerHTML = isYes;
});