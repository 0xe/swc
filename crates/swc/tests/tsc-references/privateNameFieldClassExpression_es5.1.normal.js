import _class_call_check from "@swc/helpers/lib/_class_call_check.js";
import _class_private_field_init from "@swc/helpers/lib/_class_private_field_init.js";
var _class, _Foo;
var _foo = /*#__PURE__*/ new WeakMap(), _foo2 = /*#__PURE__*/ new WeakMap();
// @target: es2015
var B = function B() {
    "use strict";
    _class_call_check(this, B);
    _class_private_field_init(this, _foo, {
        writable: true,
        value: (_class = function _class1() {
            _class_call_check(this, _class1);
            console.log("hello");
        }, _class.test = 123, _class)
    });
    _class_private_field_init(this, _foo2, {
        writable: true,
        value: (_Foo = function Foo() {
            _class_call_check(this, Foo);
        }, _Foo.otherClass = 123, _Foo)
    });
};
