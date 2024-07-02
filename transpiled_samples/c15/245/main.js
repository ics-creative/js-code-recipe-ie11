var section = document.querySelector('.localStorage'); // 親要素を取得
var btnClear = section.querySelector('.btnClear'); // ボタン要素を取得
var btnRemove = section.querySelector('.btnRemove'); // ボタン要素を取得
var btnSave = section.querySelector('.btnSave'); // ボタン要素を取得
var input = section.querySelector('input'); // テキスト入力欄の要素

// 「保存する」ボタンをクリックしたとき
btnSave.addEventListener('click', function () {
  // テキスト入力欄の文字列を取得
  var data = input.value;

  // ローカルストレージに保存
  localStorage.setItem('myKey1', data);
  localStorage.setItem('myKey2', data);
});

// 「削除する」ボタンをクリックしたとき
btnRemove.addEventListener('click', function () {
  // ローカルストレージから削除する
  localStorage.removeItem('myKey1');
});

// 「クリアする」ボタンをクリックしたとき
btnClear.addEventListener('click', function () {
  // クリアする
  localStorage.clear();
});