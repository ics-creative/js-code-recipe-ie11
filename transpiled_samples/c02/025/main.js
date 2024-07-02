/** キャラクター画像 */
var character = document.querySelector('.character');

/** 角度 */
var degree = 0;

// ループの開始
loop();

/**
 * 画面更新ごとに実行される関数
 */
function loop() {
  // 回転させたい角度をラジアンで求める
  var rotation = degree * Math.PI / 180;
  // 回転角から位置を求める
  var targetX = window.innerWidth / 2 + 100 * Math.cos(rotation) - 50;
  var targetY = window.innerHeight / 2 + 100 * Math.sin(rotation) - 50;
  // characterの位置として反映する
  character.style.left = targetX + "px";
  character.style.top = targetY + "px";
  // 角度を1度増やす
  degree += 1;
  // 次の画面更新タイミングでloop()を実行する
  requestAnimationFrame(loop);
}