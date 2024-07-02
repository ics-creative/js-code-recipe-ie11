document.querySelector('.box').addEventListener('mouseenter', function () {
  log('.box要素にマウスが乗った');
});
document.querySelector('.inner').addEventListener('mouseenter', function () {
  log('.inner要素にマウスが乗った');
});
function log(message) {
  console.log(message);
}