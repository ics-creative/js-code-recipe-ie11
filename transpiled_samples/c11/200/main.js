function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

loadAndPlay();
var source; // 再生させたいとき

function loadAndPlay() {
  return _loadAndPlay.apply(this, arguments);
} // 停止させたいとき


function _loadAndPlay() {
  _loadAndPlay = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    var context, data, buffer, decodedBuffer;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            context = new AudioContext(); // サウンドファイルを読み込む

            _context.next = 3;
            return fetch('assets/music.mp3');

          case 3:
            data = _context.sent;
            _context.next = 6;
            return data.arrayBuffer();

          case 6:
            buffer = _context.sent;
            _context.next = 9;
            return context.decodeAudioData(buffer);

          case 9:
            decodedBuffer = _context.sent;
            // ソースを作成
            source = context.createBufferSource(); // ソースにオーディオデータを割り当てる

            source.buffer = decodedBuffer; // スピーカーをつなげる

            source.connect(context.destination); // 再生を開始する

            source.start(0);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _loadAndPlay.apply(this, arguments);
}

function stop() {
  // 再生を停止する
  source.stop();
}