// ファイルアップロードゾーン
var fileZone = document.querySelector('.file-zone'); // ファイルアップロードゾーンに着脱するクラス

var className = 'on'; // ドラッグした要素が重なったときの処理

fileZone.addEventListener('dragover', function (event) {
  // デフォルトの挙動を停止
  event.preventDefault();
  fileZone.classList.add(className);
}); // ドラッグした要素が離れたときの処理

fileZone.addEventListener('dragleave', function () {
  // デフォルトの挙動を停止
  event.preventDefault();
  fileZone.classList.remove(className);
}); // ドロップした時の処理

fileZone.addEventListener('drop', function (event) {
  // デフォルトの挙動を停止
  event.preventDefault();
  fileZone.classList.remove(className); // Fileオブジェクトを参照

  var transferdFiles = event.dataTransfer.files; // 画像を表示する

  displayImages(transferdFiles);
});
/** 画像の表示処理 */

function displayImages(transferdFiles) {
  // 画像ファイルの格納配列
  var imageFileList = []; // ファイル数

  var fileNum = transferdFiles.length; // ファイルが画像のもののみを配列に格納する

  for (var i = 0; i < fileNum; i++) {
    if (transferdFiles[i].type.match('image.*') === false) {
      return;
    }

    imageFileList.push(transferdFiles[i]);
  } // 画像表示エリアの参照


  var imagePreviewArea = document.querySelector('.image-list'); // 各画像ファイルについて処理

  for (var _i = 0; _i < imageFileList.length; _i++) {
    var imageFile = imageFileList[_i];
    // 画像ファイルの読み込み処理
    var fileReader = new FileReader();
    fileReader.readAsDataURL(imageFile);
    fileReader.addEventListener('load', function (event) {
      var image = new Image();
      image.src = event.target.result; // 表示エリアの先頭に画像ファイルを表示

      imagePreviewArea.insertBefore(image, imagePreviewArea.firstChild);
    });
  }
}