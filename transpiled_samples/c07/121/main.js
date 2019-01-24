document.querySelector('.box').addEventListener('mouseover', function () {
  log('.box要素にマウスが乗った');
});
document.querySelector('.inner').addEventListener('mouseover', function () {
  log('.inner要素にマウスが乗った');
});

function log(message) {
  console.log(message);
}