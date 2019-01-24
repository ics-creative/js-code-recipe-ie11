function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MyClass =
/*#__PURE__*/
function () {
  _createClass(MyClass, [{
    key: "customField",
    // 「customField」のsetter
    set: function set(value) {
      this._customField = value;
    } // 「customField」のgetter
    ,
    get: function get() {
      return this._customField;
    }
  }]);

  function MyClass(value) {
    this._customField = value;
  }

  return MyClass;
}();

var myInstance = new MyClass(); // 値のセット(set customField(値) {}部分が実行されている)

myInstance.customField = 20; // 値の取得(get customField() {}部分が実行されている)

console.log(myInstance.customField); // 結果: 20