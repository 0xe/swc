function _throw(e) {
    throw e;
}
// @declaration: true
function f() {
    var ref = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
        a: 1,
        b: "2",
        c: true
    }, ref = ref !== null ? ref : _throw(new TypeError("Cannot destructure undefined"));
    var x, y, z;
}