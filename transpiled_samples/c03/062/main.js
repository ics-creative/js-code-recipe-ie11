// データ
var userDataList = [{
  name: '鈴木',
  age: 18
}, {
  name: '田中',
  age: 27
}, {
  name: '佐藤',
  age: 32
}, {
  name: '高橋',
  age: 41
}, {
  name: '小笠原',
  age: 56
}]; // .button要素についてイベント設定

document.querySelectorAll('.button').forEach(function (element) {
  element.addEventListener('click', function (event) {
    onClickButton(event);
  });
});
/**
 * ボタンがクリックされたときの処理
 */

function onClickButton(event) {
  // クリックされたボタン要素
  var button = event.target; // ボタン要素からdata-ageを取得

  var targetAge = button.dataset.age; // targetAge以上のユーザー配列を生成する

  var filterdList = userDataList.filter(function (data) {
    return data.age >= targetAge;
  }); // 配列を出力する

  updateList(filterdList);
}
/**
 * ユーザー配列を出力する
 */


function updateList(filterdList) {
  var listHtml = '';

  for (var _iterator = filterdList, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
    var _ref;

    if (_isArray) {
      if (_i >= _iterator.length) break;
      _ref = _iterator[_i++];
    } else {
      _i = _iterator.next();
      if (_i.done) break;
      _ref = _i.value;
    }

    var data = _ref;
    listHtml += "<li>" + data.name + " : " + data.age + "\u6B73</li>";
  }

  document.querySelector('.user_list').innerHTML = listHtml;
}