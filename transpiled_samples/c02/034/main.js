// #submitButtonをクリックしたときの処理を設定
document.querySelector('#submitButton').addEventListener('click', function (event) {
  // 電話番号を取得
  var phoneNumber = document.querySelector('#phoneNumberText').value;

  // 電話番号に「-」が含まれている場合は、''（空文字）に置き換える
  var trimmedPhoneNumber = phoneNumber.replace(/-/g, '');
  // 09012345678
  alert("\u96FB\u8A71\u756A\u53F7\u306F" + trimmedPhoneNumber + "\u3067\u3059");

  // ボタンのデフォルトの挙動をキャンセル
  event.preventDefault();
});