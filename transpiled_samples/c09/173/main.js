// select要素の参照
var element = document.querySelector('#mySelect');
// 変更イベントを監視
element.addEventListener('change', handleChange);
function handleChange(event) {
  // 値を取得
  var value = element.value;

  // 整形して画面に表示
  var log = "\u9078\u629E\u3055\u308C\u3066\u3044\u308B\u306E\u306F " + value + " \u3067\u3059";
  document.querySelector('.log').innerHTML = log;
}