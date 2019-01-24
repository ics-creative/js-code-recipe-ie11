var _marked =
/*#__PURE__*/
regeneratorRuntime.mark(range);

// ジェネレータの定義
function range(start, end) {
  var result;
  return regeneratorRuntime.wrap(function range$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          result = start;

        case 1:
          if (!(result <= end)) {
            _context.next = 7;
            break;
          }

          _context.next = 4;
          return result;

        case 4:
          result++;
          _context.next = 1;
          break;

        case 7:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, this);
} // 使用例


for (var _iterator = range(2, 6), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
  var _ref;

  if (_isArray) {
    if (_i >= _iterator.length) break;
    _ref = _iterator[_i++];
  } else {
    _i = _iterator.next();
    if (_i.done) break;
    _ref = _i.value;
  }

  var value = _ref;
  console.log(value); // 結果: 2, 3, 4, 5, 6...と順番に出力される
}