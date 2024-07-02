// input要素の参照
var element = document.querySelector('#myText');
// イベントを登録
element.addEventListener('input', handleChange);
function handleChange(event) {
  // 値を取得する
  var value = event.target.value;
  // 画面に反映
  document.querySelector('.log').innerHTML = value;
}