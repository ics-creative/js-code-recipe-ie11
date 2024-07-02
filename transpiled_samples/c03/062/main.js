function _createForOfIteratorHelperLoose(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (t) return (t = t.call(r)).next.bind(t); if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var o = 0; return function () { return o >= r.length ? { done: !0 } : { done: !1, value: r[o++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
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
}];

// .button要素についてイベント設定
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
  var button = event.target;
  // ボタン要素からdata-ageを取得
  var targetAge = button.dataset.age;
  // targetAge以上のユーザー配列を生成する
  var filterdList = userDataList.filter(function (data) {
    return data.age >= targetAge;
  });
  // 配列を出力する
  updateList(filterdList);
}

/**
 * ユーザー配列を出力する
 */
function updateList(filterdList) {
  var listHtml = '';
  for (var _iterator = _createForOfIteratorHelperLoose(filterdList), _step; !(_step = _iterator()).done;) {
    var data = _step.value;
    listHtml += "<li>" + data.name + " : " + data.age + "\u6B73</li>";
  }
  document.querySelector('.user_list').innerHTML = listHtml;
}