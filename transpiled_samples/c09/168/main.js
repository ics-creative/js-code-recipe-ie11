var element = document.querySelector('#myFile');
var pEl = document.querySelector('.log'); // ファイル選択ダイアログが選択されたら

element.addEventListener('input', function (event) {
  var target = event.target; // 選択されたファイルを参照

  var files = target.files; // 配列になってるので、0番目のファイルを参照

  var file = files[0]; // FileReaderのインスタンスを作成

  var reader = new FileReader(); // 読み込み終わったら

  reader.addEventListener('load', function () {
    // 結果をp要素に出力する
    pEl.textContent = reader.result;
  }); // テキストファイルとして読み込む

  reader.readAsText(file);
});