window.addEventListener('focus', function () {
  document.querySelector('#log').innerHTML = 'フォーカスがあたっている';
});
window.addEventListener('blur', function () {
  document.querySelector('#log').innerHTML = 'フォーカスがはずれている';
});