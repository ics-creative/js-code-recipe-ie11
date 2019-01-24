// 真偽値の基本
var a = 10;
var b = 20;
console.log(a < b); // 結果：true

console.log(a > b); // 結果：false
// iOSかどうかの判定

var isIOs = navigator.userAgent.includes('iPhone');

if (isIOs) {} // iOS用の処理
// 「こんにちは鈴木さん」とアラートが表示される


var userName = '鈴木';

if (userName) {
  alert("\u3053\u3093\u306B\u3061\u306F" + userName + "\u3055\u3093");
} // addressが''なので、アラートは表示されない


var address = '';

if (address) {
  console.log("\u3042\u306A\u305F\u306F" + address + "\u306B\u4F4F\u3093\u3067\u3044\u307E\u3059\u306D\uFF1F");
}