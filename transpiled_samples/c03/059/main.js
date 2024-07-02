// データ
var userDataList = [{
  id: 2,
  name: '鈴木'
}, {
  id: 10,
  name: '田中'
}, {
  id: 4,
  name: '佐藤'
}, {
  id: 29,
  name: '高橋'
}, {
  id: 101,
  name: '小笠原'
}];

// 表示を更新する
function updateList() {
  var listHtml = '';
  for (var _i = 0, _userDataList = userDataList; _i < _userDataList.length; _i++) {
    var data = _userDataList[_i];
    listHtml += "<li>" + data.id + " : " + data.name + "</li>";
  }
  document.querySelector('.user_list').innerHTML = listHtml;
}

// 昇順にソート
function sortByAscending() {
  userDataList.sort(function (a, b) {
    return a.id - b.id;
  });
  updateList();
}

// 降順にソート
function sortByDescending() {
  userDataList.sort(function (a, b) {
    return b.id - a.id;
  });
  updateList();
}

// 昇順ボタンをクリックした時の処理
document.querySelector('.ascending').addEventListener('click', function (event) {
  sortByAscending();
});

// 降順ボタンをクリックした時の処理
document.querySelector('.descending').addEventListener('click', function () {
  sortByDescending();
});

// 最初に昇順に並べる
sortByAscending();