// 保存ボタンをクリックしたときの処理
document.querySelector('#btnSave').addEventListener('click', saveFile);

// ファイルとして保存
function saveFile() {
  // ファイル名
  var fileName = "mySvg.svg";
  // SVG要素を取得
  var content = document.querySelector('#mySvg').outerHTML;
  // データを準備
  var dataUrl = 'data:image/svg+xml,\n' + encodeURIComponent(content);

  // BOMの文字化け対策
  var bom = new Uint8Array([0xef, 0xbb, 0xbf]);
  var blob = new Blob([bom, content], {
    type: 'text/plain'
  });
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
    // for Safari
    window.open(dataUrl, '_blank');
  }
}