/** 50%の確率でエラーが発生し、try cacthで処理する */
function generateError() {
  try {
    // 50%の確率でエラーを発生させる
    if (Math.random() > 0.5) {
      throw new Error();
    } else {
      console.log('エラーなし');
    }
  } catch (error) {
    // エラー発生時の処理
    console.log("\u30A8\u30E9\u30FC\u304C\u767A\u751F");
  } finally {
    // エラー発生有無に関わらず実行される
    console.log('エラーの処理が完了しました');
    console.log('----------');
  }
} // 3秒ごとにgenerateError()を実行する


setInterval(generateError, 3000);