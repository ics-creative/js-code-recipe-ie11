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
      var res, blob, image;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetch('./sample.jpg');

            case 2:
              res = _context.sent;
              _context.next = 5;
              return res.blob();

            case 5:
              blob = _context.sent;
              // img 要素を作る
              image = new Image(); // blob を src 属性に代入

              image.src = URL.createObjectURL(blob); // 画面に表示する

              document.querySelector('#log').appendChild(image);

            case 9:
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