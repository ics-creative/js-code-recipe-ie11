var cbA = document.querySelector('#myColor');
cbA.addEventListener('change', function (event) {
  // 選択された色を確認する
  var value = event.target.value;

  // 画面に表示する
  var log = "\u9078\u629E\u3055\u308C\u305F\u8272\u304C " + value + " \u306B\u306A\u308A\u307E\u3057\u305F";
  var logEl = document.querySelector('.log');
  logEl.innerHTML = log;
  logEl.style.backgroundColor = value;
});