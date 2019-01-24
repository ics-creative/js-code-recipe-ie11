var video = document.querySelector('#myVideo');
document.querySelector('#btnPlay').addEventListener('click', function () {
  video.play();
});
document.querySelector('#btnPause').addEventListener('click', function () {
  video.pause();
});