let tmp = "" + "", tmp1 = "" + "", tmp2 = "" + "";
// @target: es6
// @declaration: true
class C {
    [tmp]() {}
    get [tmp1]() {
        return 0;
    }
    set [tmp2](x) {}
}
