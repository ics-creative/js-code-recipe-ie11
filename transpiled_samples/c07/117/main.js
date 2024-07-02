// DOMにアクセスできるタイミングで処理を実行する
window.addEventListener('DOMContentLoaded', function () {
  // .box要素の数を取得する
  var boxNum = document.querySelectorAll('.box').length;
  // ログを出力
  console.log(".box\u8981\u7D20\u306E\u6570\u306F" + boxNum + "\u3067\u3059");
});