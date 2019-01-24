document.querySelector('.textarea').addEventListener('keydown', function () {
  console.log('キーが押された');
});
document.querySelector('.textarea').addEventListener('keypress', function () {
  console.log('文字が入力された');
});
document.querySelector('.textarea').addEventListener('keyup', function () {
  console.log('キーが離された');
});