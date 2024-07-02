// form要素を参照
var element = document.querySelector('#radioGroup');
// 変更を監視
element.addEventListener('change', handleChange);
function handleChange(event) {
  // 現在の選択状態を取得
  var drinkValue = element.drink.value;
  var fruitValue = element.fruit.value;
  console.log("drink\u306E\u5024\u306F " + drinkValue + " \u3067\u3059");
  console.log("fruitValue\u306E\u5024\u306F " + fruitValue + " \u3067\u3059");
}