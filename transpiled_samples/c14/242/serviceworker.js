self.addEventListener('fetch', function (event) {
  console.log('通信が発生', event.request);
});