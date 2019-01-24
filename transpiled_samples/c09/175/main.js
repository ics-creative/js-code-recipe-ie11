// input要素の参照
var element = document.querySelector('#myRange'); // 変更イベントを監視

element.addEventListener('input', handleChange);

function handleChange(event) {
  // 現在の値を取得
  var value = event.target.value; // 画面に表示

  document.querySelector('.log').innerHTML = "\u73FE\u5728\u306E\u5024\u306F " + value + " \u3067\u3059";
}