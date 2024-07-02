// idキーとnameキーを持つユーザーデータの配列
var userDataList = [{
  id: 123,
  name: '高橋'
}, {
  id: 1021,
  name: '鈴木'
}, {
  id: 6021,
  name: '後藤'
}];

/** 検索IDを入力するinput要素 */
var searchIdInput = document.querySelector('#search-id-input');

/** 検索結果を表示する要素 */
var searchResult = document.querySelector('#search-result');

// 文字が入力される度に、内容のチェックを行う
searchIdInput.addEventListener('keyup', function () {
  // 検索IDを取得する
  var searchId = Number(event.target.value);
  findUser(searchId);
});

/*** ユーザーを検索する */
function findUser(searchId) {
  // 該当データを取得する
  var targetData = userDataList.find(function (data) {
    return data.id === searchId;
  });

  // 該当データが存在しなかったら、「該当者なし」と表示して終了
  if (targetData == null) {
    searchResult.textContent = '該当者なし';
    return;
  }

  // 該当データの名前を表示する
  searchResult.textContent = targetData.name;
}