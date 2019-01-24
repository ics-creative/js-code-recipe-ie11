var array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var shuffled1 = shuffleArray(array1);
console.log(shuffled1); // 結果: [5, 1, 8, 3,...（略）

var array2 = ['田中', '鈴木', '吉田', '後藤', '辻'];
var shuffled2 = shuffleArray(array2);
console.log(shuffled2); // 結果: ["辻", "田中", "吉田", "鈴木", "後藤"]

/**
 * 配列をシャッフルします。
 * 元の配列は変更せず、新しい配列を返します。
 * @param sourceArr 元の配列
 * @returns シャッフルされた配列
 */

function shuffleArray(sourceArr) {
  // 元の配列の複製を作成
  var array = sourceArr.concat(); // Fisher–Yatesのアルゴリズム

  var arrayLength = array.length;

  for (var i = arrayLength - 1; i >= 0; i--) {
    var randomIndex = Math.floor(Math.random() * (i + 1));
    var _ref = [array[randomIndex], array[i]];
    array[i] = _ref[0];
    array[randomIndex] = _ref[1];
  }

  return array;
}