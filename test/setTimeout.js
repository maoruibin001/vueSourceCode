/**
 * Created by lenovo on 2017/11/1.
 */
var b = 0;
function test() {
  a ++;
  console.log(a);
  setTimeout(() => test(), 0);
}
test();