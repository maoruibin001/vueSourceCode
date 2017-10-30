/**
 * Created by lenovo on 2017/8/30.
 */
function clone(oldValue) {
    var newValue;
    var type = typeof oldValue;
    if (type === 'object') {
        var toString = Object.prototype.toString.call(oldValue);
        if (toString === "[object Object]") {
            newValue = {};
            for (var key in oldValue) {
                if (typeof oldValue[key] === 'object') {
                    newValue[key] = clone(oldValue[key]);
                } else {
                    newValue[key] = oldValue[key];
                }
            }
        } else if (toString === "[object Array]") {
            newValue = [];
            for(var i = 0; i < oldValue.length; i ++) {
                if (typeof oldValue[i] === 'object') {
                    newValue[i] = clone(oldValue[i]);
                } else {
                    newValue[i] = oldValue[i];
                }
            }
        } else {
            newValue = oldValue;
        }

    } else {
        newValue = oldValue;
    }
    return newValue;
}

var a = [2, 3, 5, {name: 20}];
var b = [...a];
a[3].name = 333

console.log(b);
