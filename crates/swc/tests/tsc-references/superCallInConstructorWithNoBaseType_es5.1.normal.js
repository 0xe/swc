import _class_call_check from "@swc/helpers/lib/_class_call_check.js";
var C = function C() {
    "use strict";
    _class_call_check(this, C);
    super(); // error
};
var D = function D(x) {
    "use strict";
    _class_call_check(this, D);
    super(); // error
    this.x = x;
};
