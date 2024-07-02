var section = document.querySelector('.localStorage'); // 親要素を取得
var btnRead = section.querySelector('.btnRead'); // ボタン要素を取得
var btnSave = section.querySelector('.btnSave'); // ボタン要素を取得
var input = section.querySelector('input'); // テキスト入力欄の要素

// 「保存する」ボタンをクリックしたとき
btnSave.addEventListener('click', function () {
  // テキスト入力欄の文字列を取得
  var data = input.value;

  // ローカルストレージに保存
  localStorage.setItem('myKey', data);
});

// 「読み出す」ボタンをクリックしたとき
btnRead.addEventListener('click', function () {
  // ローカルストレージから読み出す
  var data = localStorage.getItem('myKey');

  // テキスト入力欄の文字列に代入
  input.value = data;
});