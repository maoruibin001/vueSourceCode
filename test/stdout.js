/**
 * Created by lenovo on 2017/11/2.
 */
function gets(cb){
  process.stdin.setEncoding('utf8');
  //输入进入流模式（flowing-mode，默认关闭，需用resume开启），注意开启后将无法read到数据
  //见 https://github.com/nodejs/node-v0.x-archive/issues/5813
  process.stdin.resume();
  process.stdin.on('data', function(chunk) {
    console.log('start!');
    //去掉下一行可一直监听输入，即保持标准输入流为开启模式
    process.stdin.pause();
    cb(chunk);
  });
  console.log('试着在键盘敲几个字然后按回车吧');
}
var n = 3;
process.stdin.on('end', function() {
  circle(--n)
})
circle(n);
function circle(n) {
  if (n >= 0) {
    gets(function(reuslt){
      console.log("["+reuslt+"]");
      process.stdin.emit('end'); //触发end事件
    });
  } else {
    process.exit(0);
  }
}
