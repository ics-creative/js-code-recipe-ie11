setInterval(function () {
  // 現在時間を取得
  var now = new Date();

  // 時間の数値を取得
  var h = now.getHours(); // 時間(0〜23)
  var m = now.getMinutes(); // 分(0〜59)
  var s = now.getSeconds(); // 秒(0〜59)

  // 針の角度に反映する

  // 短針 (短針は時間だけでなく分も角度に考慮する)
  var degH = h * (360 / 12) + m * (360 / 12 / 60);
  // 分針
  var degM = m * (360 / 60);
  // 秒針
  var degS = s * (360 / 60);
  var elementH = document.querySelector('.lineHour');
  var elementM = document.querySelector('.lineMin');
  var elementS = document.querySelector('.lineSec');
  elementH.style.transform = "rotate(" + degH + "deg)";
  elementM.style.transform = "rotate(" + degM + "deg)";
  elementS.style.transform = "rotate(" + degS + "deg)";
}, 50);