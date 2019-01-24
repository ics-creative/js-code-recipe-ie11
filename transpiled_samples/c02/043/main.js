document.querySelector('#tweetButton').addEventListener('click', function () {
  // ツイート内容を取得
  var tweetText = document.querySelector('#tweetTextArea').value; // 半角スペースと #JavaScriptをツイート文言に追加する

  tweetText += ' #JavaScript'; // エンコードする

  var encodedText = encodeURIComponent(tweetText); // ツイート用リンクを作成する

  var tweetURL = "https://twitter.com/intent/tweet?text=" + encodedText; // ツイート用リンクを開く

  window.open(tweetURL);
});