var _marked =
/*#__PURE__*/
regeneratorRuntime.mark(myGenerator);

function myGenerator() {
  return regeneratorRuntime.wrap(function myGenerator$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log('こんにちは');
          _context.next = 3;
          return 1000;

        case 3:
          console.log('今日はいい天気ですね');
          _context.next = 6;
          return 2000;

        case 6:
          console.log('明日は晴れるでしょう');
          _context.next = 9;
          return 3000;

        case 9:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, this);
}

var myIterable = myGenerator(); // 結果
// 1秒後、「こんにちは」が出力された後、1000が出力される
// 2秒後、「今日はいい天気ですね」が出力された後、2000が出力される
// 3秒後、「明日は晴れるでしょう」が出力された後、3000が出力される
// それ以降はundfinedが出力される

setInterval(function () {
  console.log(myIterable.next().value);
}, 1000);