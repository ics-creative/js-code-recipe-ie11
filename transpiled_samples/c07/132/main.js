var boxElement = document.querySelector('#myBox');
boxElement.addEventListener('click', function () {
  boxElement.innerHTML = 'クリックされました';
});
setTimeout(function () {
  boxElement.dispatchEvent(new Event('click'));
}, 1000);