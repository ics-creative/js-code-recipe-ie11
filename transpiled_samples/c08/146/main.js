// 3秒後に処理を行う
setTimeout(function () {
  var parentElement = document.querySelector('#parent');
  var childElement = document.querySelector('#child'); // #child要素を取り除く

  parentElement.removeChild(childElement);
}, 3000);