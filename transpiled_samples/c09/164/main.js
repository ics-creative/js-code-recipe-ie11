// textareaの参照
var element = document.querySelector('#myText');
// イベントを登録
element.addEventListener('input', handleChange);
function handleChange(event) {
  // 値を取得
  var value = event.target.value;

  // 改行コードを改行タグに変換
  var htmlStr = value.split('\n').join('<br />');
  document.querySelector('.log').innerHTML = htmlStr;
}