// 今日の日付を取得
var today = new Date();

// #main内に、HTMLコードを動的に書き出す
document.querySelector('#main').innerHTML = "\n  <h1>\u4ECA\u65E5" + (today.getMonth() + 1) + "/" + today.getDate() + "\u306E\u5929\u6C17</h1>\n  <p>\u6771\u4EAC\u306F\u3001\u6674\u308C\u3067\u3057\u3087\u3046</p>\n";