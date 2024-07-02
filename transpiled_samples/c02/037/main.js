var nameInput = document.querySelector('.name-input');
var warningMessage = document.querySelector('.warning-message');

// .name-inputに文字を入力するたびに処理を実行する
nameInput.addEventListener('input', function () {
  // 入力された文字を取得する
  var inputStr = nameInput.value;
  // 入力された文字を小文字に変換する
  var normalStr = inputStr.toLowerCase();
  // 文字に「test」が含まれていれば警告を表示する
  if (normalStr.includes('test') === true) {
    warningMessage.textContent = '「test」が含まれてます';
  } else {
    warningMessage.textContent = '';
  }
});