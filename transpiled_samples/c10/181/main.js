// 要素の class 指定の切り替え
document.querySelector('#checkbox').addEventListener('change', function (event) {
  var element = document.querySelector('.rect');
  if (element.classList.contains('state-show') === true) {
    element.classList.remove('state-show');
  } else {
    element.classList.add('state-show');
  }
});
var element = document.querySelector('.rect');
element.addEventListener('transitionend', function (event) {
  document.querySelector('.log').innerHTML = 'transitionend 発生 : ' + new Date().toLocaleTimeString();
});