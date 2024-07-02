/** 時間 */
var hourElement = document.querySelector('.hour');

/** 分 */
var minuteElement = document.querySelector('.minute');

/** 秒 */
var secondElement = document.querySelector('.second');
update();

/**
 * 現在時間を表示する処理
 */
function update() {
  var currentTime = new Date();

  // 時間の表示
  var hour = currentTime.getHours();
  hourElement.innerText = addZeroPadding(hour);

  // 分の表示
  var minute = currentTime.getMinutes();
  minuteElement.innerText = addZeroPadding(minute);

  // 秒の表示
  var second = currentTime.getSeconds();
  secondElement.innerText = addZeroPadding(second);

  // 次のフレームで再度update()を実行する
  requestAnimationFrame(update);
}

/**
 * 2桁の表記になるよう、文字列冒頭に0をつける関数
 * @param num
 * @returns {string}
 */
function addZeroPadding(num) {
  return String(num).padStart(2, '0');
}