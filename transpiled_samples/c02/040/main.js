/** 電話番号の入力欄 */
var phoneNumberText = document.querySelector('#phoneNumberText');
/** 警告メッセージ */

var warningMessage = document.querySelector('#warningMessage'); // 文字が入力される度に、内容のチェックを行う

phoneNumberText.addEventListener('keyup', function () {
  // 入力された電話番号
  var phoneNumber = phoneNumberText.value; // 電話番号に「-」が含まれている場合は、''（空文字）に置き換える

  var trimmedPhoneNumber = phoneNumber.replace(/-/g, ''); // 09012345678
  // 0から始まる、10桁か11桁の数字かどうかをチェック

  if (/^[0][0-9]{9,10}$/.test(trimmedPhoneNumber) === false) {
    warningMessage.innerText = '電話番号を正しく入力してください';
  } else {
    warningMessage.innerText = '';
  }
});