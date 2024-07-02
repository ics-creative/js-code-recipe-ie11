// 配列を作成
var arrFunc = [];
var _loop = function _loop(i) {
  var func = function func(resolve) {
    console.log("\u51E6\u7406" + i + "\u3092\u958B\u59CB", new Date().toLocaleTimeString());
    // 0〜2秒ぐらいで遅延
    var delayMsec = 2000 * Math.random();

    // 遅延処理
    setTimeout(function () {
      console.log("\u51E6\u7406" + i + "\u304C\u5B8C\u4E86", new Date().toLocaleTimeString());
      resolve();
    }, delayMsec);
  };
  // 配列に保存
  arrFunc.push(func);
};
for (var i = 0; i < 5; i++) {
  _loop(i);
}
console.log(arrFunc);

// 関数を含めた配列を、Promiseの配列に変換
var arrPromise = arrFunc.map(function (func) {
  return new Promise(func);
});
console.log(arrPromise);

// 並列処理を実行
Promise.all(arrPromise).then(function () {
  console.log('すべての処理が完了しました');
});