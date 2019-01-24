// 各.box要素に対してループ
document.querySelectorAll('.box').forEach(function (targetBox) {
  // .box要素をクリックしたときの処理
  targetBox.addEventListener('click', function () {
    // クリックされた.box要素のテキストを表示
    alert(targetBox.textContent + "\u304C\u30AF\u30EA\u30C3\u30AF\u3055\u308C\u307E\u3057\u305F");
  });
});