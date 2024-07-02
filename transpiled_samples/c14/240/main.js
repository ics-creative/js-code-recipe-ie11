var btn = document.querySelector('button'); // ボタン要素を取得
btn.addEventListener('click', function () {
  // ボタンをクリックしたとき
  // XHRを作成
  var req = new XMLHttpRequest();
  // データの種類を設定
  req.responseType = 'blob';

  // 読み込みに失敗したときのイベント
  req.addEventListener('abort', function (event) {
    // 画面に表示
    document.querySelector('#log').textContent = '読み込みに失敗しました';
  });

  // 読み込み完了時のイベント
  req.addEventListener('load', function (event) {
    // レスポンスを受け取る
    var data = event.target.response;
    // 画像データに変換
    var source = URL.createObjectURL(data);

    // 画像を作成
    var image = new Image();
    image.src = source;
    // テキストを出力
    document.querySelector('#log').appendChild(image);
  });
  // ファイルを指定
  req.open('GET', './sample.jpg');
  // 読み込み開始
  req.send();

  // 50%の確率で
  if (Math.random() > 0.5) {
    // わざと読み込みを中断する
    req.abort();
  }
});