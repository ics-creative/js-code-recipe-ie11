document.querySelector('#checkbox').addEventListener('change', function (event) {
  var element = document.querySelector('.rect');
  if (element.classList.contains('state-show') === true) {
    element.classList.remove('state-show');
  } else {
    element.classList.add('state-show');
  }
});
var targetEl = document.querySelector('.rect');
targetEl.addEventListener('animationstart', function (event) {
  document.querySelector('.log').innerHTML = 'animationstart 発生 : ' + new Date().toLocaleTimeString();
});
targetEl.addEventListener('animationiteration', function (event) {
  document.querySelector('.log').innerHTML = 'animationiteration 発生 : ' + new Date().toLocaleTimeString();
});
targetEl.addEventListener('animationend', function (event) {
  document.querySelector('.log').innerHTML = 'animationend 発生 : ' + new Date().toLocaleTimeString();
});