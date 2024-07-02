document.querySelector('#checkbox').addEventListener('change', function (event) {
  var element = document.querySelector('.rect');
  if (element.classList.contains('state-show') === true) {
    element.classList.remove('state-show');
  } else {
    element.classList.add('state-show');
  }
});