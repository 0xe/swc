var _x;
function _classExtractFieldDescriptor(receiver, privateMap, action) {
    if (!privateMap.has(receiver)) throw new TypeError("attempted to " + action + " private field on non-instance");
    return privateMap.get(receiver);
}
const C = (_x = new WeakMap(), class {
    m() {
        var receiver, privateMap, descriptor, receiver, descriptor, receiver, privateMap, value, descriptor;
        receiver = this, privateMap = _x, receiver = this, value = ((descriptor = _classExtractFieldDescriptor(receiver, privateMap = _x, "get")).get ? descriptor.get.call(receiver) : descriptor.value) + 2, descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"), (function(receiver, descriptor, value) {
            if (descriptor.set) descriptor.set.call(receiver, value);
            else {
                if (!descriptor.writable) throw new TypeError("attempted to set read only private field");
                descriptor.value = value;
            }
        })(receiver, descriptor, value);
    }
    constructor(){
        (function(obj, privateMap, value) {
            (function(obj, privateCollection) {
                if (privateCollection.has(obj)) throw new TypeError("Cannot initialize the same private elements twice on an object");
            })(obj, privateMap), privateMap.set(obj, value);
        })(this, _x, {
            get: void 0,
            set: function(x) {}
        });
    }
});
console.log(new C().m());
