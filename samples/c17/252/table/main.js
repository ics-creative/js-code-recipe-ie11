// IE11対応用の追加：console.tableがないときは警告を出す
if (typeof window.console.table == "undefined") {
  alert("console.table()に未対応のブラウザーです");
} // IE11対応用に追加終わり

// console.table のサンプル
const myArray = [
  { id: 100, name: '鈴木', age: 25 },
  { id: 200, name: '田中', age: 30 },
  { id: 300, name: '太郎', age: 35 }
];
console.table(myArray);
