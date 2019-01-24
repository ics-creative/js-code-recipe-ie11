var LikeCounter = function LikeCounter() {
  var _this = this;

  // ボタンをクリックした数
  this.clickedCount = 0;
  var button = document.querySelector('.button');
  var clickedCountText = document.querySelector('.clickedCountText');
  button.addEventListener('click', function () {
    _this.clickedCount += 1;
    clickedCountText.textContent = _this.clickedCount;
  });
};

new LikeCounter();