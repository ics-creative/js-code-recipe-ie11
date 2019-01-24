var box = document.querySelector('.box');
box.addEventListener('dragenter', function () {
  console.log('dragenterイベント');
});
box.addEventListener('dragover', function () {
  console.log('dragoverイベント');
});
box.addEventListener('dragleave', function () {
  console.log('dragleaveイベント');
});