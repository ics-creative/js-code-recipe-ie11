var btn = document.querySelector('button'); // ボタン要素を取得
btn.addEventListener('click', function () {
  // ボタンをクリックしたとき
  // XHRを作成
  var req = new XMLHttpRequest();
  // 読み込み完了時のイベント
  req.addEventListener('load', function (event) {
    // レスポンスを受け取る
    var text = event.target.responseText;

    // テキストを出力
    document.querySelector('#log').innerHTML = text;
  });
  // ファイルを指定
  req.open('GET', './sample.txt');
  // 読み込み開始
  req.send();
});