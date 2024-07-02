var weatherElement = document.querySelector('#weather');

// 3秒後に#weatherの中身を書き換える
setTimeout(function () {
  weatherElement.textContent = '気温は24℃の予想です。';
}, 3000);