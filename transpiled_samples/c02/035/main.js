// ハッシュを格納するためのオブジェクト
var hashes = {};

// URLの?hoge=fuga...部分を配列として取得する
var parameters = location.search.split(/&|\?/).filter(function (value) {
  return value.includes('=');
});

// hashes[key]=valueの形でオブジェクトに格納する
parameters.forEach(function (parameter) {
  // hoge=fugaを['hoge', 'fuga']の配列にする
  var parameterList = parameter.split('=');
  var key = parameterList[0];
  // valueはデコードしておく
  var value = decodeURIComponent(parameterList[1]);
  hashes[key] = value;
});

// 取得したパラメータを反映

// hashesにidが含まれていれば、それを反映
if (hashes['id'] != null) {
  document.querySelector('.id').innerHTML = hashes['id'];
}
if (hashes['name'] != null) {
  document.querySelector('.name').innerHTML = hashes['name'];
}
if (hashes['age'] != null) {
  document.querySelector('.age').innerHTML = hashes['age'];
}