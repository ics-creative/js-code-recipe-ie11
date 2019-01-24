var btn = document.querySelector('button'); // ボタン要素を取得

btn.addEventListener('click', function () {
  // ボタンをクリックしたとき
  // XHRを作成
  var req = new XMLHttpRequest(); // データの種類を設定

  req.responseType = 'blob';
  req.addEventListener('progress', function (event) {
    // 読み込みの割合を算出(0〜1)
    var rate = event.loaded / event.total; // プログレスバーの幅を変更する

    var element = document.querySelector('.progress-bar');
    element.style.width = rate * 100 + "%";
  }); // 読み込み完了時のイベント

  req.addEventListener('load', function (event) {
    // レスポンスを受け取る
    var data = event.target.response; // 画像データに変換

    var source = URL.createObjectURL(data); // 画像を作成

    var image = new Image();
    image.src = source; // テキストを出力

    document.querySelector('#log').appendChild(image);
  }); // ファイルを指定

  req.open('GET', './sample.jpg'); // 読み込み開始

  req.send();
});