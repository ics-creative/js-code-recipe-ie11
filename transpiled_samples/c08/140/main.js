var themeChangeButton = document.querySelector('.theme-change-button'); // テーマ変更ボタンをクリックしたときの処理

themeChangeButton.addEventListener('click', function () {
  // body要素のクラスの「theme-dark」を切り替える
  document.body.classList.toggle('theme-dark');
});