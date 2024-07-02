function _readOnlyError(r) { throw new TypeError('"' + r + '" is read-only'); }
var a = 10;
try {
  20, _readOnlyError("a"); // aへの再代入。エラー
} catch (error) {
  console.log("\u30A8\u30E9\u30FC\u304C\u767A\u751F\u3057\u307E\u3057\u305F: " + error.message);
}

// 中断されることなく実行される
console.log("\u5B9A\u6570a\u306E\u5024\u306F" + a + "\u3067\u3059");