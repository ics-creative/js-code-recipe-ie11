var myBox1 = document.querySelector('#myBox1');
var myBox2 = document.querySelector('#myBox2');
var targetBox = document.querySelector('#targetBox');

// 4秒後に#myBox1要素を#targetBox要素の前に追加する
setTimeout(function () {
  targetBox.before(myBox1);
}, 3000);

// 4秒後に#myBox2要素を#targetBox要素の後に追加する
setTimeout(function () {
  targetBox.after(myBox2);
}, 4000);