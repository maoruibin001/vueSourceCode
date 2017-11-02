/**
 * Created by lenovo on 2017/11/1.
 */
var a = function() {

}

a.prototype = [];

var A = new a;

class B extends Array {
  constructor() {
    super();
  }
}

var b = new B;

console.log(Object.prototype.toString.call(b));