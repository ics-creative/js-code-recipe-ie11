// 操作対象エリア
var logArea = document.querySelector('#log2'); // 対象エリア上でマウスボタンを押したら、ログを出力

logArea.addEventListener('mousedown', function () {
  logArea.innerHTML = "\u30DE\u30A6\u30B9\u30DC\u30BF\u30F3\u3092\u62BC\u3057\u305F";
}); // 対象エリア上でマウスボタンを離したら、ログを出力

logArea.addEventListener('mouseup', function () {
  logArea.innerHTML = "\u30DE\u30A6\u30B9\u30DC\u30BF\u30F3\u3092\u96E2\u3057\u305F";
}); // 対象エリア上でマウスを移動したら、ログを出力

logArea.addEventListener('mousemove', function () {
  logArea.innerHTML = "\u30DE\u30A6\u30B9\u3092\u79FB\u52D5\u3057\u305F";
});