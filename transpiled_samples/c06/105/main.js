// ハッシュ変更のイベントを監視
window.addEventListener('hashchange', handleHashChange);
handleHashChange();
function handleHashChange() {
  // 変更後のハッシュの値
  var hash = location.hash;
  document.querySelector('.log').innerHTML = "\u73FE\u5728\u306E\u30A2\u30F3\u30AB\u30FC\u306F\u300C" + hash + "\u300D\u3067\u3059";
}