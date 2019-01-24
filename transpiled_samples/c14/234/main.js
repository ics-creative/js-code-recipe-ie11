function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var btn = document.querySelector('button'); // ボタン要素を取得

btn.addEventListener('click', function () {
  // ボタンをクリックしたとき
  function load() {
    return _load.apply(this, arguments);
  }

  function _load() {
    _load = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      var data, obj;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetch('sample.json');

            case 2:
              data = _context.sent;
              _context.next = 5;
              return data.json();

            case 5:
              obj = _context.sent;
              console.log(obj); // 結果: {name: "別所分校", classes: Array(2)}
              // テキストを出力

              document.querySelector('#log').innerHTML = JSON.stringify(obj, null, '  ');

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));
    return _load.apply(this, arguments);
  }

  load();
});