// チェックボックスの参照
var cb = document.querySelector('#cbA');
cb.addEventListener('change', function (event) {
  // 選択状態を確認する
  var value = event.target.checked; // 画面に表示する

  var log = "\u30C1\u30A7\u30C3\u30AF\u30DC\u30C3\u30AF\u30B9A\u306F " + value + " \u306B\u306A\u308A\u307E\u3057\u305F";
  document.querySelector('.log').innerHTML = log;
});