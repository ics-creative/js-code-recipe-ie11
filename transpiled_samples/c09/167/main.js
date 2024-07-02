// input要素を参照
var element = document.querySelector('#myFile');

// ファイル選択ダイアログが選択されたら
element.addEventListener('change', function (event) {
  var target = event.target;
  // 選択されたファイルを参照
  var files = target.files;
  // 配列になってるので、0番目のファイルを参照
  var file = files[0];

  // ユーザーが選択したファイル名を表示
  alert(file.name + "\u304C\u9078\u629E\u3055\u308C\u307E\u3057\u305F");
});