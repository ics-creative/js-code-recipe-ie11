function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var MyClass = /*#__PURE__*/function () {
  function MyClass(value) {
    this._customField = value;
  }
  return _createClass(MyClass, [{
    key: "customField",
    get:
    // 「customField」のgetter
    function get() {
      return this._customField;
    },
    set:
    // 「customField」のsetter
    function set(value) {
      this._customField = value;
    }
  }]);
}();
var myInstance = new MyClass();
// 値のセット(set customField(値) {}部分が実行されている)
myInstance.customField = 20;
// 値の取得(get customField() {}部分が実行されている)
console.log(myInstance.customField); // 結果: 20