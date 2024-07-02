// API等から出力するユーザーデータの配列
var userList = [{
  id: 1,
  name: '田中',
  address: '東京'
}, {
  id: 2,
  name: '鈴木',
  address: '宮城'
}, {
  id: 3,
  name: '高橋',
  address: '福岡'
}];

// コンテナー
var container = document.querySelector('.container');

// userListの配列の各要素についてループ
userList.forEach(function (userData) {
  // 各要素を書き出す
  container.innerHTML += "\n        <div class=\"card\">\n          <h2>" + userData.name + "</h2>\n          <p>\u51FA\u8EAB\u5730\uFF1A" + userData.address + "</p>\n        </div>\n  ";
});