/** 長方形 */
var rectangle = document.querySelector('.rectangle'); // ボタンをクリックしたらonClickButton()を実行する

document.querySelector('.button').addEventListener('click', onClickButton);
/** ボタンをクリックする度に、長方形のグラデーション色を変える */

function onClickButton() {
  // 0~359の間のランダムな数を取得する
  var randomHue = Math.trunc(Math.random() * 360); // グラデーションの開始色と終了色を決定

  var randomColorStart = "hsl(" + randomHue + ", 100%, 50%)";
  var randomColorEnd = "hsl(" + (randomHue + 40) + ", 100%, 50%)"; // 長方形のグラデーションのための変数（--startと--end）を変更

  rectangle.style.setProperty('--start', randomColorStart);
  rectangle.style.setProperty('--end', randomColorEnd);
}