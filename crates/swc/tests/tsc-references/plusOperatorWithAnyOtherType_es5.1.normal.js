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
// + operator on any type
var ANY;
var ANY1;
var ANY2 = [
    "",
    ""
];
var obj;
var obj1 = {
    x: function(s) {
    },
    y: function(s1) {
    }
};
function foo() {
    var a;
    return a;
}
var A = /*#__PURE__*/ function() {
    "use strict";
    function A() {
        _classCallCheck(this, A);
    }
    _createClass(A, null, [
        {
            key: "foo",
            value: function foo() {
                var a;
                return a;
            }
        }
    ]);
    return A;
}();
var M;
(function(M1) {
    var n;
    M1.n = n;
})(M || (M = {
}));
var objA = new A();
// any other type var
var ResultIsNumber1 = +ANY1;
var ResultIsNumber2 = +ANY2;
var ResultIsNumber3 = +A;
var ResultIsNumber4 = +M;
var ResultIsNumber5 = +obj;
var ResultIsNumber6 = +obj1;
// any type literal
var ResultIsNumber7 = +undefined;
var ResultIsNumber8 = +null;
// any type expressions
var ResultIsNumber9 = +ANY2[0];
var ResultIsNumber10 = +obj1.x;
var ResultIsNumber11 = +obj1.y;
var ResultIsNumber12 = +objA.a;
var ResultIsNumber13 = +M.n;
var ResultIsNumber14 = +foo();
var ResultIsNumber15 = +A.foo();
var ResultIsNumber16 = +(ANY + ANY1);
var ResultIsNumber17 = +(null + undefined);
var ResultIsNumber18 = +(null + null);
var ResultIsNumber19 = +(undefined + undefined);
// miss assignment operators
+ANY;
+ANY1;
+ANY2[0];
+ANY, ANY1;
+objA.a;
+M.n;