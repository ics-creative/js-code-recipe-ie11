function _readOnlyError(name) { throw new Error("\"" + name + "\" is read-only"); }

var a = 10;
console.log("\u5B9A\u6570a\u306E\u5024\u306F" + a + "\u3067\u3059"); // 「定数aの値は10です」と出力される

a = (_readOnlyError("a"), 20); // aに値を再代入しようとすると、エラーが発生

console.log("\u51E6\u7406\u304C\u5B9F\u884C\u3055\u308C\u307E\u3057\u305F"); // エラーが発生したため、実行されない