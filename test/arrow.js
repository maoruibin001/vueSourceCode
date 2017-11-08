/**
 * Created by lenovo on 2017/11/8.
 */
let MakePowerFn = power => base => Math.pow(base, power);

let a = MakePowerFn(2);
console.log(a(10));