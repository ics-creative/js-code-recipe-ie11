/** ウインドウの幅を表示する要素 */
var widthLog = document.querySelector('#widthLog');
/** ウインドウの高さを表示する要素 */

var heightLog = document.querySelector('#heightLog'); // ウインドウがリサイズされる度に処理を実行する

window.addEventListener('resize', function () {
  widthLog.innerText = window.innerWidth + "px";
  heightLog.innerText = window.innerHeight + "px";
});