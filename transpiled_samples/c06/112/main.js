// オンラインであるかの真偽値
var isOnline = navigator.onLine;
if (isOnline === true) {
  console.log('オンラインです');
} else {
  console.log('ネットワークにつながっていません');
}

// オンラインになったら呼び出されるイベント
window.addEventListener('online', function () {
  console.log('オンラインです');
});

// オフラインになったら呼び出されるイベント
window.addEventListener('offline', function () {
  console.log('️ネットワークにつながっていません');
});

// オンラインであるかの真偽値
if (isOnline === true) {
  log('オンラインです');
} else {
  log('ネットワークにつながっていません');
}

// オンラインになったら呼び出されるイベント
window.addEventListener('online', function () {
  log('📶オンラインです');
});

// オフラインになったら呼び出されるイベント
window.addEventListener('offline', function () {
  log('❎️ネットワークにつながっていません');
});
function log(message) {
  document.querySelector('.log').innerHTML = message;
}