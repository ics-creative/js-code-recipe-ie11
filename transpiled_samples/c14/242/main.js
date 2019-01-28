if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('serviceworker.js').then(function (registration) {
    // 登録成功
    console.log('ServiceWorkerの登録に成功');
  }).catch(function (error) {
    // 登録失敗
    console.log('ServiceWorkerの登録に失敗: ', error);
  });
} else {
  console.log('ServiceWorkerに未対応です');
}