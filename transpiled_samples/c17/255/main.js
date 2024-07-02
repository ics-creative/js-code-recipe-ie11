/** 引数valueが数値でない場合にエラーを発生させる関数 */
function myFunction(value) {
  if (typeof value !== 'number') {
    // エラーを生成する
    var error = new Error("\u300C" + value + "\u300D\u306FNumber\u3067\u306F\u3042\u308A\u307E\u305B\u3093");
    // エラー内容をアラートで表示する
    alert(error.message);
    // エラーを投げる
    throw error;
  }
  console.log("\u300C" + value + "\u300D\u306F\u6570\u5024\u3067\u3059");
}

// 関数に数値を渡す（エラーなし）
myFunction(5);
// 関数に文字列を渡す（エラーが発生する）
myFunction('鈴木');