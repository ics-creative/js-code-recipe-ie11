var character = document.querySelector('.character');
character.addEventListener('dragstart', function () {
  console.log('dragstartイベント');
});
character.addEventListener('drag', function () {
  console.log('dragイベント');
});
character.addEventListener('dragend', function () {
  console.log('dragendイベント');
});