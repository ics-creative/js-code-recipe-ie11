document.addEventListener('visibilitychange', function () {
  if (document.visibilityState === 'visible') {
    console.log('コンテンツが表示されました');
    return;
  }

  if (document.visibilityState === 'hidden') {
    console.log('コンテンツがバックグラウンドになりました');
  }
});