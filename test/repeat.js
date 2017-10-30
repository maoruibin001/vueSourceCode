/**
 * Created by lenovo on 2017/8/31.
 */
function repeat(str, n) {
    var ret = '';
    while (n) {
        if (n % 2 === 1) ret += str;
        if (n > 1) str += str;
        n >>= 1;
    }
    return ret;

}


console.log(repeat('aaa', 9).length);