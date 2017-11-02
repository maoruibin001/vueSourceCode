/**
 * Created by lenovo on 2017/11/1.
 */
var a = 0;
var b = 0;
function test() {
  a ++;
  console.log('a:', a);
  setTimeout(() => test(), 0);
}

function test2() {
  b ++;
  console.log('b:', b);
  process.nextTick(() => test2());
}
test();
test2();