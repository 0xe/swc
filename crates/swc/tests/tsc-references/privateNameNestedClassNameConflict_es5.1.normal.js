import * as swcHelpers from "@swc/helpers";
var _foo = new WeakMap();
var A = function A() {
    "use strict";
    swcHelpers.classCallCheck(this, A);
    swcHelpers.classPrivateFieldInit(this, _foo, {
        writable: true,
        value: void 0
    });
    var _foo1 = new WeakMap();
    var A1 = function A1() {
        swcHelpers.classCallCheck(this, A1);
        swcHelpers.classPrivateFieldInit(this, _foo1, {
            writable: true,
            value: void 0
        });
    };
};
