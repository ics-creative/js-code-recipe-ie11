var box = document.querySelector('.box'); // dragoverイベントの無効化

box.addEventListener('dragover', function (event) {
  event.preventDefault();
});
box.addEventListener('drop', function () {
  console.log('dropイベント');
});