/**
 * Created by lenovo on 2017/11/1.
 */
var buf = new Buffer('nodejsv0.10.4&nodejsv0.10.4&nodejsv0.10.4&nodejsv0.10.4&');
console.time('string += buf')
var s = '';
for(var i=0;i<10000;i++){
  s += buf;
}
console.timeEnd('string += buf')


console.time('buf concat')
var list = [];
var len=0;
for(var i=0;i<10000;i++){
  list.push(buf);
  len += buf.length;
}
var s2 = Buffer.concat(list, len).toString();
console.timeEnd('buf concat')