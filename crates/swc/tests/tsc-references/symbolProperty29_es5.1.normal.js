function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
var _toStringTag = Symbol.toStringTag;
var C1 = //@target: ES6
/*#__PURE__*/ function() {
    "use strict";
    function C1() {
        _classCallCheck(this, C1);
    }
    _createClass(C1, [
        {
            key: _toStringTag,
            value: function value() {
                return {
                    x: ""
                };
            }
        }
    ]);
    return C1;
}();
