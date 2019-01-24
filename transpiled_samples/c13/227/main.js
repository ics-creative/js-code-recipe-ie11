function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// 配列を作成
var listFunctions = []; // 動的に関数を追加

var _loop = function _loop(i) {
  // 1秒後に処理をする非同期関数を作成
  var func = function func(resolve) {
    // setTimeoutで遅延処理
    setTimeout(function () {
      console.log("\u95A2\u6570" + i + "\u304C\u5B8C\u4E86\u3057\u307E\u3057\u305F", new Date().toLocaleTimeString());
      resolve(); // Promiseを完了
    }, 1000);
  }; // 配列に保存


  listFunctions.push(func);
};

for (var i = 0; i < 5; i++) {
  _loop(i);
} // 配列の中身を出力


console.log(listFunctions); // 結果: [ [Function: func], ...

execute();

function execute() {
  return _execute.apply(this, arguments);
}

function _execute() {
  _execute = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    var i, func;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            i = 0;

          case 1:
            if (!(i < listFunctions.length)) {
              _context.next = 8;
              break;
            }

            func = listFunctions[i];
            _context.next = 5;
            return new Promise(func);

          case 5:
            i++;
            _context.next = 1;
            break;

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _execute.apply(this, arguments);
}