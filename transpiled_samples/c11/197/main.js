var audio = document.querySelector('#myAudio');
audio.addEventListener('loadedmetadata', function () {
  console.log(audio.duration); // 音声の長さ(秒)
});
document.querySelector('#btnPlay').addEventListener('click', function () {
  audio.play();
});
document.querySelector('#btnPause').addEventListener('click', function () {
  audio.pause();
});