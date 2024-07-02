setTimeout(function () {
  // コンテナ
  var container = document.querySelector('.container');
  // 旧ボックス要素
  var oldBox = document.querySelector('.old-box');
  // 新ボックス要素。div要素を作り、「新ボックス」というテキストノードを追加する
  var newBox = document.createElement('div');
  newBox.textContent = '新ボックス';
  // new-box, boxというCSSクラスを追加する
  newBox.classList.add('new-box', 'box');
  // 新旧ボックスを入れ替える
  container.replaceChild(newBox, oldBox);
}, 3000);