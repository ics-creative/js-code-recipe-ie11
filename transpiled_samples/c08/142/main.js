var container = document.querySelector('.container');
var myBox = document.querySelector('#myBox');

// 3秒後に#myBox要素を.container要素の末尾に追加する
setTimeout(function () {
  container.appendChild(myBox);
}, 3000);