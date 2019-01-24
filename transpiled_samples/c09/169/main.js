var element = document.querySelector('#myFile');
var imgEl = document.querySelector('.log img'); // ファイル選択ダイアログが選択されたら

element.addEventListener('input', function (event) {
  var target = event.target; // 選択されたファイルを参照

  var files = target.files; // 配列になってるので、0番目のファイルを参照

  var file = files[0]; // FileReaderのインスタンスを作成

  var reader = new FileReader(); // 読み込み終わったら

  reader.addEventListener('load', function () {
    // 画像を表示
    imgEl.src = reader.result;
  }); // テキストファイルとして読み込む

  reader.readAsDataURL(file);
});