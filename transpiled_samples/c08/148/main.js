// create-modal-buttonをクリックしたときの処理
document.querySelector('#create-modal-button').addEventListener('click', displayModalWindow);
/** モーダルウインドウを表示する */

function displayModalWindow() {
  // モーダルウインドウを生成する
  var modalElement = document.createElement('div'); // modalクラスを付与する

  modalElement.classList.add('modal'); // モーダルウインドウの内部要素を生成する

  var innerElement = document.createElement('div');
  innerElement.classList.add('inner');
  innerElement.innerHTML = "\n    <p>\u30E2\u30FC\u30C0\u30EB\u30A6\u30A4\u30F3\u30C9\u30A6\u306E\u4E2D\u8EAB\u3067\u3059</p>\n    <div class=\"character\"></div>\n  "; // モーダルウインドウに内部要素を配置する

  modalElement.appendChild(innerElement); // body要素にモーダルウインドウを配置する

  document.body.appendChild(modalElement); // 内部要素をクリックしたらモーダルウインドウを削除する処理

  innerElement.addEventListener('click', function () {
    closeModalWindow(modalElement);
  });
}
/** モーダルウインドウを閉じる */


function closeModalWindow(modalElement) {
  document.body.removeChild(modalElement);
}