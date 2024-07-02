var button = document.querySelector('button');
button.addEventListener('click', handleClick);
function handleClick() {
  var element = document.querySelector('.target');
  if (element.classList.contains('state-show') === false) {
    element.classList.add('state-show');
  } else {
    element.classList.remove('state-show');
  }
}

// CSS Transition のイベント
document.querySelector('.target').addEventListener('transitionend', function (event) {
  document.querySelector('.log').innerHTML = 'transitionend 発生 : ' + new Date().toLocaleTimeString();
});