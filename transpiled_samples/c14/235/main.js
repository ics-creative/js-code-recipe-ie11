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
      var response, text, xml;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetch('sample.xml');

            case 2:
              response = _context.sent;
              _context.next = 5;
              return response.text();

            case 5:
              text = _context.sent;
              // XMLとして解析
              xml = new DOMParser().parseFromString(text, 'application/xml');
              console.log(xml); // 結果: #document
              // テキストを出力

              document.querySelector('#log').textContent = text;

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