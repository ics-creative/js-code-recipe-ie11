// キャンバス要素の参照を取得
var canvas1 = document.querySelector('#canvas-original'); // コンテキストを取得

var context1 = canvas1.getContext('2d'); // Imageインスタンスを作成

var img = new Image(); // 画像読み込み後の処理

img.onload = function () {
  // コンテキストを通してcanvasに描く
  context1.drawImage(img, 0, 0); // 画素情報を得る

  var imageData = context1.getImageData(0, 0, 150, 150);
  var data = imageData.data;
  var monoImageData = new ImageData(150, 150);
  var monoArr = monoImageData.data;

  for (var i = 0; i < data.length / 4; i += 1) {
    // 画素情報を取得
    var r = data[i * 4 + 0];
    var g = data[i * 4 + 1];
    var b = data[i * 4 + 2];
    var a = data[i * 4 + 3]; // 平均値を求める（簡易的な計算のため）

    var color = (r + g + b) / 3; // 新しい配列に色を指定

    monoArr[i * 4 + 0] = color;
    monoArr[i * 4 + 1] = color;
    monoArr[i * 4 + 2] = color;
    monoArr[i * 4 + 3] = a;
  } // キャンバス要素の参照を取得


  var canvas2 = document.querySelector('#canvas-effected'); // コンテキストを取得

  var context2 = canvas2.getContext('2d'); // コンテキストに新しい画素情報を割り当てる

  context2.putImageData(monoImageData, 0, 0);
}; // 画像を読み込みを開始する


img.src = 'sample.jpg';
var btnDownload = document.querySelector('#btnDownload');
btnDownload.addEventListener('click', function () {
  // キャンバス要素の参照を取得
  var canvas2 = document.querySelector('#canvas-effected'); // ファイルの種類とファイル名を指定

  var mimeType = 'image/png';
  var fileName = 'download.png'; // Base64文字列を取得

  var base64 = canvas2.toDataURL(mimeType); // Base64文字列からUint8Arrayに変換

  var bin = atob(base64.replace(/^.*,/, ''));
  var buffer = new Uint8Array(bin.length);

  for (var i = 0; i < bin.length; i++) {
    buffer[i] = bin.charCodeAt(i);
  } // Blobを作成


  var blob = new Blob([buffer.buffer], {
    type: mimeType
  }); // 画像をダウンロードする

  if (window.navigator.msSaveBlob) {
    // for IE
    window.navigator.msSaveBlob(blob, fileName);
  } else if (window.URL && window.URL.createObjectURL) {
    // for Firefox, Chrome, Safari
    var a = document.createElement('a');
    a.download = fileName;
    a.href = window.URL.createObjectURL(blob);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  } else {
    // for Other
    window.open(base64, '_blank');
  }
});